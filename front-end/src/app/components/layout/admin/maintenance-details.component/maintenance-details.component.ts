import { Component, OnInit } from '@angular/core';
import { Manutencao } from '../../../../models/maintenance-details/maintenance-details.model'; 
import { MaintenanceDetailsService } from '../../../../services/maintenance-details/maintenanceDetails'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manutencao-detalhes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maintenance-details.component.html',
  styleUrls: ['./maintenance-details.component.scss'],
})
export class MaintenanceDetailsComponent implements OnInit {
  manutencao?: Manutencao; 

  constructor(private manutencaoService: MaintenanceDetailsService) {}

  ngOnInit(): void {
    // this.loadData(algumId);
  }

  loadData(id: number): void {
    this.manutencaoService.getDetalhes(id).subscribe({
      next: (data: Manutencao) => this.manutencao = data,
      error: () => console.error("Erro ao carregar manutenção")
    });
  }

  marcarResolvido() {
    console.log("Resolver clicado");
  }

  enviarParaRevisao() {
    console.log("Revisão clicado");
  }

  excluir() {
    console.log("Excluir clicado");
  }
}
