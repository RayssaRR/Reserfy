import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Login } from '../../auth/models/login';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../auth/services/auth.service';
import { jwtDecode } from 'jwt-decode';
import { LogoComponent } from '../../components/layout/logo.component/logo.component';

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
  authService = inject(AuthService);

  constructor(private dialog: MatDialog) {}

  logar() {
    this.authService.login(this.login).subscribe({
      next: (token) => {
        if (token) {
          this.authService.saveToken(token);
          const decoded: any = jwtDecode(token);
          const roleFlag = decoded.roleFlag;
          console.log('RoleFlag:', roleFlag);
          if (roleFlag === 'ADMIN') {
            this.router.navigate(['/admin']);
          } else if (roleFlag === 'USER') {
            this.router.navigate(['/user']);
          } else {
            this.router.navigate(['/login']);
          }
        } else {
          this.abrirDialog('Erro ao logar', 'Token inválido ou não recebido!', 'error', 'red');
        }
      },
      error: (erro) => {
        this.abrirDialog('Erro ao logar', 'Login ou senha incorretos!', 'error', 'red');
        console.error('Erro ao logar:', erro);
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
