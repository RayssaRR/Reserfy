import { Component, OnInit } from '@angular/core';
import { CardImgComponent } from '../../../dashboard/user/card-img.component/card-img.component';
import { CardPendingReservationsComponent } from '../../../dashboard/user/card-pending-reservations.component/card-pending-reservations.component';
import { CardNextReservationsComponent } from '../../../dashboard/user/card-next-reservations.component/card-next-reservations.component';
import { AuthService } from '../../../../auth/services/auth.service';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CardImgComponent,
    CardPendingReservationsComponent,
    CardNextReservationsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent{
  name!: string;


  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  private loadUserData(): void {
    const token = this.authService.getToken();
    if (token) {
      const decoded: any = jwtDecode(token);
      console.log(decoded);
      this.name = decoded.Name.split(' ', 1) || 'Usuário';
    }
  }
}
