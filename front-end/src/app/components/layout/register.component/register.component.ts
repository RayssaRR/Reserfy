import { Component } from '@angular/core';
import { LogoComponent } from '../logo.component/logo.component';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../../../auth/register.service';

import { User } from '../../../auth/user';

@Component({
  selector: 'app-register',
  imports: [LogoComponent, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  name!: string;
  email!: string;
  cpf!: string;
  phone!: string;
  department!: string;
  position!: string;
  password!: string;
  confirmPassword!: string;
  roleFlag!: string;

  constructor(private registerService: RegisterService) {}

  criarConta() {
    const red = '#ff0000';
    const stroke = '#b5b5b5';
    const inputs = document.querySelectorAll('.password');
    if (this.password !== this.confirmPassword) {
      inputs.forEach(input => {
        if (input instanceof HTMLElement) {
          input.style.borderColor = red;
        }
      });
      return;
    } else {
      inputs.forEach(input => {
        if (input instanceof HTMLElement) {
          input.style.borderColor = stroke;
        }
      });
    }

    const user: User = {
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      cpf: this.cpf,
      phone: this.phone,
      department: this.department,
      position: this.position,
      roleFlag: this.roleFlag,
    };

    this.registerService.register(user).subscribe({
      next: (token) => {
        console.log('Usuário registrado com sucesso! Token:', token);
        alert('Cadastro realizado com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao registrar:', err);
        alert('Erro ao criar conta. Verifique os dados e tente novamente.');
      }
    });
  }
}
