import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard-charts',
  standalone: true,
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  templateUrl: './dashboard-charts.component.html',
  styleUrls: ['./dashboard-charts.component.scss']
})
export class DashboardChartsComponent implements OnInit {

  monthlySalesData = [
    { name: 'Jan', value: 8940 },
    { name: 'Fev', value: 5000 },
    { name: 'Mar', value: 7200 },
    { name: 'Abr', value: 6500 },
    { name: 'Mai', value: 9500 },
  ];

  categorySalesData = [
    { name: 'Eletrônicos', value: 40000 },
    { name: 'Informática', value: 35000 },
    { name: 'Acessórios', value: 15000 },
    { name: 'Outros', value: 10000 }
  ];

  view: [number, number] = [700, 300];
  scheme = { domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'] };
  gradient = true;
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Mês';
  showYAxisLabel = true;
  yAxisLabel = 'Vendas (R$)';
  animations = true;

  ngOnInit(): void {
  }

  onSelect(event: any): void {
    console.log('Item selecionado no gráfico:', event);
  }
}
