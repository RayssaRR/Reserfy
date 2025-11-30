import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../../../../auth/services/auth.service';
import { MenuComponent } from '../menu.component/menu.component';



@Component({
  selector: 'app-principal.component',
  imports: [MenuComponent, RouterOutlet],
  standalone: true,
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent {
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
      this.name = decoded.Name.split(' ', 1) || 'Usuário';
      this.username = decoded.User || 'Usuário';
    }
  }

}
