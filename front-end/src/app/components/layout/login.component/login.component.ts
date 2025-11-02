import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from '../logo.component/logo.component';
import { Login } from '../../../auth/login';
import { Router } from '@angular/router';
import { LoginService } from '../../../auth/login.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, LogoComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], 
})
export class LoginComponent {
  login: Login = new Login();

  router = inject(Router);
  loginService = inject(LoginService);

  logar() {
    this.loginService.logar(this.login).subscribe({
      next: (token) => {
        if (token) {
          this.loginService.addToken(token);
          this.router.navigate(['user/dashboard']);
        }
      },
      error: (erro) => {
        console.error('Erro ao logar', erro);
        alert('Email ou senha incorretos');
      },
    });
  }
}
