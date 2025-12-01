import { Component, OnInit } from '@angular/core';
import { Manutencao } from '../../../../models/maintenance-details/maintenance-details.model'; 
import { ManutencaoService } from '../../../../services/maintenance-details/maintenanceDetails'; 

@Component({
  selector: 'app-manutencao-detalhes',
  templateUrl: './maintenance-details.component.html',
  styleUrls: ['./maintenance-details.component.css']
})
export class MaintenanceDetailsComponent implements OnInit {

  manutencao?: Manutencao; // pode receber undefined antes da carga
  manutencaoService: any;

  constructor(private maintenanceDetailsService: ManutencaoService) {}

  ngOnInit(): void {
    // Só exemplo — depois pega o ID via rota:
    // this.loadData(1);
  }

  loadData(id: number): void {
    this.manutencaoService.getDetalhes(id).subscribe({
      next: (data: any) => this.manutencao = data,
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
