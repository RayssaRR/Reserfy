import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { combineLatest, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { HistoryCardComponent } from '../history-card/history-card.component';
import { ResourceRequest } from '../../../../models/request/request.model';
import { RequestService } from '../../../../services/request/request';
import { InternalResourceService } from '../../../../services/internalResource/internal-resource';


@Component({
  selector: 'app-history',
  standalone: true,
  imports: [HistoryCardComponent, CommonModule, FormsModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  cards: ResourceRequest[] = [];

  constructor(
    private requestService: RequestService,
    private resourceService: InternalResourceService
  ) {}

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests(): void {
    this.requestService.list()
      .pipe(
        switchMap((requests: ResourceRequest[]) => {
          if (!requests.length) return of([]);

          const enrichedObservables = requests.map(req => {
            const user$ = req.user?.id
              ? this.requestService.findById(+req.user.id).pipe(
                  catchError(() => of({ id: req.user.id, name: 'Usuário não informado', email: '' }))
                )
              : of({ id: '', name: 'Usuário não informado', email: '' });

            const resource$ = req.resource?.id
              ? this.resourceService.findById(req.resource.id).pipe(
                  catchError(() => of({ id: req.resource.id, name: 'Recurso não informado' }))
                )
              : of({ id: 0, name: 'Recurso não informado' });

            return combineLatest([user$, resource$]).pipe(
              map(([user, resource]) => ({
                ...req,
                user,
                resource
              }))
            );
          });

          return combineLatest(enrichedObservables);
        })
      )
      .subscribe({
        next: (enrichedRequests: ResourceRequest[]) => {
          this.cards = enrichedRequests;
          console.log('Requisições enriquecidas:', this.cards);
        },
        error: (err) => console.error('Erro ao carregar requisições', err)
      });
  }
}
