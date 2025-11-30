import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-admin',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavAdminComponent {
  @Input() nameLabel!: string;
  @Input() usernameLabel!: string;

  dropdownOpen = false;


  constructor(private authService: AuthService, private router: Router){}
  
  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout(): void {
    this.authService.logout();
  }

  dashboard(){
    this.router.navigate(['/admin/principal/dashboard']); 
  }

  internalResources(){
    this.router.navigate(['/admin/principal/internal-resources']); 
  }

  history(){
    this.router.navigate(['/admin/principal/history']); 
}
}