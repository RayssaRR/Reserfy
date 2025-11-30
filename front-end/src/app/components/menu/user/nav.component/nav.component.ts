import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() nameLabel!: string;
  @Input() usernameLabel!: string;

  dropdownOpen = false;

  constructor(private authService: AuthService, private router: Router) { }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout(): void {
    this.authService.logout();
  }

  dashboard() {
    this.router.navigate(['/user/principal/dashboard']);
  }

  internalResources() {
    this.router.navigate(['/user/principal/internal-resources']);
  }

  reservations() {
    this.router.navigate(['/user/principal/reservations']);
  }
}
