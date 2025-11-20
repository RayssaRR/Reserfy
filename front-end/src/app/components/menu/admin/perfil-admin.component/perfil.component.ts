import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../../auth/services/auth.service';

@Component({
  selector: 'app-perfil-admin',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilAdminComponent {
  dropdownOpen = false;
  @Input() nameLabel!: string;

  constructor(private authService: AuthService) {}

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout(): void {
    this.authService.logout();
  }
}
