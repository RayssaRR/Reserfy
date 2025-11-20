import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { User } from '../../auth/models/user';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RegisterService } from '../../auth/services/register.service';
import { LogoComponent } from '../../components/layout/logo.component/logo.component';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { jwtDecode } from 'jwt-decode';
import { Login } from '../../auth/models/login';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, LogoComponent, MatDialogModule, NgSelectModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  stroke ='#b5b5b5';
  errorDark = '#ff0000bf';

  corBordaCPF = this.stroke;
  corBordaSenha = this.stroke;
  corBordaSenhaConf = this.stroke;
  corBordaPhone = this.stroke;


  name!: string;
  email!: string;
  cpf!: string;
  phone!: string;
  department!: string;
  position!: string;
  password!: string;
  confirmPassword!: string;
  roleFlag!: string;

  departments: string[] = [
    'Administração Geral',
    'Financeiro',
    'Contabilidade',
    'Recursos Humanos',
    'Departamento Pessoal',
    'Marketing',
    'Comercial / Vendas',
    'Atendimento ao Cliente',
    'Produção / Operações',
    'Logística',
    'Compras / Suprimentos',
    'TI (Tecnologia da Informação)',
    'Desenvolvimento de Software',
    'Segurança da Informação',
    'Jurídico',
    'Pesquisa e Desenvolvimento (P&D)',
    'Qualidade',
    'Sustentabilidade / ESG',
    'Comunicação Institucional',
  ];

  router = inject(Router);
  authService = inject(AuthService);
  login: Login = new Login();


  constructor(private registerService: RegisterService, private dialog: MatDialog) {}

criarConta() {
  function capitalizeWords(sentence: string) {
    return sentence
    .split(' ')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  }

  const user: User = {
    name: capitalizeWords(this.name),
    email: this.email,
    password: this.password,
    confirmPassword: this.confirmPassword,
    cpf: this.cpf,
    phone: this.phone,
    department: this.department,
    position: capitalizeWords(this.position),
    roleFlag: this.roleFlag,
  };

  this.registerService.register(user).subscribe({
    next: () =>{
      const dialogRef = this.abrirDialog(
      'Cadastro realizado',
      'Usuário registrado com sucesso!',
      'check_circle',
      'green'
      );

      dialogRef.afterClosed().subscribe(() => {

        this.login.email = this.email;
        this.login.password = this.password;

        this.authService.login(this.login).subscribe({
        next: (token) => {
          if (token) {
            this.authService.saveToken(token);
            const decoded: any = jwtDecode(token);
            const roleFlag = decoded.roleFlag;

            if (roleFlag === 'ROLE_ADMIN') {
              this.router.navigate(['/admin']);
            } else if (roleFlag === 'ROLE_USER') {
              this.router.navigate(['/user']);
            } else {
              this.router.navigate(['/login']);
            }
          } else {
            this.abrirDialog('Erro ao logar', 'Token inválido ou não recebido!', 'error', 'red');
          }
        },
        error: () => {
          this.abrirDialog('Erro ao logar', 'Login ou senha incorretos!', 'error', 'red');
        }
        });
      });
      },
      error: (err) => {
        console.error('Erro ao registrar:', err);
        this.abrirDialog(
          'Erro no servidor',
          'Não foi possível concluir o cadastro. Tente novamente mais tarde.',
          'warning',
          'orange'
        );
      },
    });
  }

  abrirDialog(title: string, message: string, icon?: string, color?: string) {
    return this.dialog.open(DialogComponent, {
      width: '400px',
      data: { title, message, icon, color },
    });
  }



  validarCPF(){
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}\s*$/;    
    const cpfNum = this.cpf.replace(/\D/g, '');

    const cpfArray = cpfNum.split('').map(Number);
    const primeiroVerificador = this.digitoVerificador(cpfArray.slice(0, 9));
    const segundoVerificador = this.digitoVerificador(cpfArray.slice(0, 10));

    if (!this.cpf || this.cpf.trim() === '' || cpfNum.length !== 11 || !regexCPF.test(this.cpf) || primeiroVerificador !== cpfArray[9] || segundoVerificador !== cpfArray[10]) {
      this.corBordaCPF = this.errorDark;
    } else{
      this.corBordaCPF = this.stroke;
    }
  }


  validarTelefone(){
    const regexTelefone = /^(\(\d{2}\)\s)\d{5}-\d{4}$/;
    
    if(!this.phone || this.phone.trim() === '' || !regexTelefone.test(this.phone)){
      this.corBordaPhone = this.errorDark;
    } else {
      this.corBordaPhone = this.stroke;
    }
    
  }

  validarSenha() {
    const regexSenha =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/;

    if (!regexSenha.test(this.password)) {
      this.corBordaSenha = this.errorDark;
      return;
    } else {
      this.corBordaSenha = this.stroke;
    }

    if (this.confirmPassword && this.password !== this.confirmPassword) {
      this.corBordaSenhaConf = this.errorDark;
    } else {
      this.corBordaSenhaConf = this.stroke;
    }
  }

  validarConfirmPassword() {
    if (this.confirmPassword && this.password !== this.confirmPassword) {
      this.corBordaSenhaConf = this.errorDark;
    } else {
      this.corBordaSenhaConf = this.stroke;
    }
  }


  digitoVerificador(cpfArray: number[]): number {
    let soma = 0;
    let multiplicador = cpfArray.length + 1;
    for (let i = 0; i < cpfArray.length; i++) {
      soma += cpfArray[i] * multiplicador;
      multiplicador--;
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  }
}
