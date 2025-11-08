import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../../auth/services/auth.service';

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

  constructor(private authService: AuthService){}
  
  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout(): void {
    this.authService.logout();
  }
}
