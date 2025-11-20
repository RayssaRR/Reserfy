import { Component} from '@angular/core';
import { MenuAdminComponent } from '../menu-admin.component/menu.component';
import { AuthService } from '../../../../auth/services/auth.service';
import { jwtDecode } from 'jwt-decode';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal-admin',
  imports: [MenuAdminComponent, RouterOutlet],
  templateUrl: './principal-admin.component.html',
  styleUrl: './principal-admin.component.scss',
})
export class PrincipalAdminComponent {
  name!: string;
  username!: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  private loadUserData(): void {
    const token = this.authService.getToken();
    if (token) {
      const decoded: any = jwtDecode(token);
      console.log(decoded);
      this.name = decoded.Name.split(' ', 1) || 'Administrador';
      this.username = decoded.User || 'Usuário';
    }
  }
}
