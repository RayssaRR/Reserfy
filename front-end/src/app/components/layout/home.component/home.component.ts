import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cardhome } from '../../home/cardhome/cardhome';
import { LogoComponent } from '../logo.component/logo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Cardhome, LogoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})



export class HomeComponent {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
