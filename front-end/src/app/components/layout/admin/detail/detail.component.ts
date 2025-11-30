import { Component } from '@angular/core';
import { CalendarioComponent } from '../calendar/calendar';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NgFor, CalendarioComponent],   // <-- IMPORTANTE
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  recurso = {
    nome: 'Projetor X100',
    descricao: 'Projetor de alta definição com recursos avançados para apresentações e eventos.',
    status: 'Disponível',
    proximaManutencao: '15 de Outubro, 2025',
    ultimaManutencao: '15 de Outubro, 2025',
    historico: [
      { nome: 'Ana Pereira', dataInicio: '21 de Jul, 2024', dataFim: '21 de Jul, 2024', status: 'Devolvido' },
      { nome: 'Carlos Lima', dataInicio: '15 de Jul, 2024', dataFim: '16 de Jul, 2024', status: 'Devolvido' }
    ],
    incidente: {
      descricao: 'Lâmpada defeituosa',
      data: '01 de Jul, 2024',
      status: 'Aberto'
    }
  };
}
