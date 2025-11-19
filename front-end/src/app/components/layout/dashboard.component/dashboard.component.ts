import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardChartsComponent } from '../../../components/dashboard-charts/dashboard-charts.component'; 

@Component({
  selector: 'app-dashboard',
  standalone: true, 
  imports: [
    CommonModule, 
    DashboardChartsComponent 
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
    console.log('Dashboard principal carregado.');
  }

}
