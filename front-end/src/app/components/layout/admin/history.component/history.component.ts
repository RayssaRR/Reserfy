import { Component } from '@angular/core';
import { HistoryCardComponent } from '../history-card/history-card.component'; //importando um card
import { Request } from '../../../../models/request/request.model';
import { RequestService } from '../../../../services/request/request';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-history', //apagar component para importar para outra pasta
  standalone: true,
  imports: [HistoryCardComponent, CommonModule, FormsModule, MatIcon], //importei o card do historycard.
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent {
  buscar() {
    throw new Error('Method not implemented.');
  }
  searchText: any;
  onSearch() {
    throw new Error('Method not implemented.');
  }
  requests: Request[] = []; // lista das requisições. Serve para guardar todos os cards que vão aparecer na tela.
  filteredRequests: any;

  constructor(private requestService: RequestService) {} //conecta o componente ao serviço.

  ngOnInit(): void {
    this.loadRequests(); //Serve para carregar as requisições automaticamente assim que a tela abre.
  }

  loadRequests(): void {
    this.requestService.list().subscribe({
      //Chama o backend E ENVIA UM GET
      next: (data) => (this.requests = data), //Agora a lista do componente recebe os dados do backend.
      error: (err) => console.error('Erro ao carregar requisições', err),
    });
  }
}
