import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from '../logo.component/logo.component';
import { Login } from '../../../auth/models/login';
import { Router } from '@angular/router';
import { LoginService } from '../../../auth/services/login.service';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private dialog: MatDialog) {}

  logar() {
    this.loginService.logar(this.login).subscribe({
      next: (token) => {
        if (token) {
          this.loginService.addToken(token);
          this.router.navigate(['user/dashboard']);
        }
      },
      error: (erro) => {
        this.abrirDialog('Erro ao logar', 'Login ou senha incorreto !', 'error', 'red');
        console.error('Erro ao logar', erro);
      },
    });
  }

  abrirDialog(title: string, message: string, icon?: string, color?: string) {
    this.dialog.open(DialogComponent, {
      width: '400px',
      data: { title, message, icon, color },
    });
  }
}
