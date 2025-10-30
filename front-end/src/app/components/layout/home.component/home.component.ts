import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Cardhome } from '../../home/cardhome/cardhome';

@Component({
  selector: 'app-home.component',
  standalone: true,
  imports: [Cardhome, RouterOutlet],
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
