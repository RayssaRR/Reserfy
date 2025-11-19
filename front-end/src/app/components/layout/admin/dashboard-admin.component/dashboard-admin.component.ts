import { Component, Input } from '@angular/core';
import { CardNumbersComponent } from '../../../dashboard/admin/card-numbers.component/card-numbers.component';
import { LastRequestsComponent } from '../../../dashboard/admin/last-requests.component/last-requests.component';
import { LastIncidentsComponent } from '../../../dashboard/admin/last-incidents.component/last-incidents.component';
import { AuthService } from '../../../../auth/services/auth.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-dashboard-admin',
  imports: [
    CardNumbersComponent,
    LastRequestsComponent,
    LastIncidentsComponent,
  ],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.scss',
})
export class DashboardAdminComponent {
  name!: string;

  ngOnInit(): void {
    this.loadUserData();
  }

  constructor(private authService: AuthService){}

  private loadUserData(): void {
    const token = this.authService.getToken();
    if (token) {
      const decoded: any = jwtDecode(token);
      console.log(decoded);
      this.name = decoded.Name.split(' ', 1) || 'Usuário';
    }
  }

}
