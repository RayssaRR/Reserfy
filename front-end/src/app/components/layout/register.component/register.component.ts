import { Component } from '@angular/core';
import { LogoComponent } from '../logo.component/logo.component';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../../../auth/register.service';
import { User } from '../../../auth/user';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog.component/dialog.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LogoComponent, FormsModule, MatDialogModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
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

  constructor(
    private registerService: RegisterService,
    private dialog: MatDialog
  ) {}




  criarConta() {
    this.validarCPF();

    if (this.password !== this.confirmPassword) {
      this.abrirDialog(
        'Senhas não coincidem',
        'Verifique e tente novamente.',
        'error',
        'red'
      );
      return;
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
      next: () => {
        this.abrirDialog(
          'Cadastro realizado',
          'Usuário registrado com sucesso!',
          'check_circle',
          'green'
        );
      },
      error: (err) => {
        console.error('Erro ao registrar:', err);
        this.abrirDialog(
          'Erro no servidor',
          'Não foi possível concluir o cadastro. Tente novamente mais tarde.',
          'warning',
          'orange'
        );
      }
    });
  }

  abrirDialog(title: string, message: string, icon?: string, color?: string) {
    this.dialog.open(DialogComponent, {
      width: '400px',
      data: { title, message, icon, color }
    });
  }


  validarCPF() {
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    const cpfNum = this.cpf.replace(/\D/g, '');

    
    if (cpfNum.length !== 11 || !regexCPF.test(this.cpf)) {
      this.abrirDialog(
        'CPF inválido',
        'Formato incorreto. Use o formato XXX.XXX.XXX-XX',
        'error',
        'red'
      );
      return false;
    }


    const cpfArray = cpfNum.split('').map(Number);

    const primeiroVerificador = this.digitoVerificador(cpfArray.slice(0, 9));
    const segundoVerificador = this.digitoVerificador(cpfArray.slice(0, 10));

    if (primeiroVerificador !== cpfArray[9] || segundoVerificador !== cpfArray[10]) {
      this.abrirDialog('CPF inválido', 'Seu CPF é inválido.', 'error', 'red');
      return false;
    }

    return true;
  }


  digitoVerificador(cpfArray: number[]): number {
    let soma = 0;
    let multiplicador = cpfArray.length + 1;

    for (let i = 0; i < cpfArray.length; i++) {
      soma += cpfArray[i] * multiplicador;
      multiplicador = multiplicador - 1;
    }

    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  }


  validarSenha(){
    const regexSenha = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/;

    if(!regexSenha.test(this.password)){
    }
  }

  validarTelefone(){
    const regexTelefone = /^(\(?\d{2}\)?\s?)?\d{5}-?\d{4}$/;

  
  }

}
