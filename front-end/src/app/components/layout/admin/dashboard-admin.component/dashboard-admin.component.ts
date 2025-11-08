import { Component, Input } from '@angular/core';
import { MenuComponent } from '../../menu.component/menu.component';
import { CardNumbersComponent } from '../../../dashboard/admin/card-numbers.component/card-numbers.component';
import { LastRequestsComponent } from '../../../dashboard/admin/last-requests.component/last-requests.component';

@Component({
  selector: 'app-dashboard-admin.component',
  imports: [CardNumbersComponent, MenuComponent, LastRequestsComponent],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.scss',
})

export class DashboardAdminComponent {
  @Input() name!: string;
  @Input() username!: string;
}
