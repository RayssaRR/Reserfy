import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from '../logo.component/logo.component';
import { User } from '../../../auth/models/user';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RegisterService } from '../../../auth/services/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, LogoComponent, MatDialogModule, NgSelectModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
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

  cpfInvalido = false;
  senhaInvalida = false;
  telefoneInvalido = false;

  constructor(private registerService: RegisterService, private dialog: MatDialog) {}

  criarConta() {
    const cpfInvalido = this.validarCPF();
    const senhaInvalida = this.validarSenha();
    const telefoneInvalido = this.validarTelefone();
    const senhasDiferentes = this.password !== this.confirmPassword;

    if (cpfInvalido || senhaInvalida || telefoneInvalido || senhasDiferentes) {
      let msg = 'Formulário preenchido de forma incorreta!\n';
      if (cpfInvalido) {
        msg += '- CPF inválido\n';
      } if (senhaInvalida) {
        msg += '- Senha inválida\n';
      } if (telefoneInvalido) {
        msg += '- Telefone inválido\n';
      } if (senhasDiferentes) {
        msg += '- Senhas não conferem\n';
      }

      this.abrirDialog(
        'Erro ao cadastrar', 
        msg, 
        'error', 
        'red');
        
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
      next: () => this.abrirDialog(
        'Cadastro realizado', 
        'Usuário registrado com sucesso!', 
        'check_circle', 
        'green'),
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
      data: { title, message, icon, color },
    });
  }

  validarCPF(): boolean {
    const regexCPF = /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/;
    const cpfNum = this.cpf.replace(/\D/g, '');

    if (cpfNum.length !== 11 || !regexCPF.test(this.cpf)) {
      return this.cpfInvalido = true;
    }

    const cpfArray = cpfNum.split('').map(Number);
    const primeiroVerificador = this.digitoVerificador(cpfArray.slice(0, 9));
    const segundoVerificador = this.digitoVerificador(cpfArray.slice(0, 10));

    if (primeiroVerificador !== cpfArray[9] || segundoVerificador !== cpfArray[10]) {
      return this.cpfInvalido = true;
    }

    return false;
  }

  validarSenha(): boolean {
    const regexSenha = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/;
    this.senhaInvalida = regexSenha.test(this.password);
    return this.senhaInvalida;
  }

  validarTelefone(): boolean {
    const regexTelefone = /^(\(?\d{2}\)?\s?)?\d{5}-?\d{4}$/;
    this.telefoneInvalido = regexTelefone.test(this.phone);
    return this.telefoneInvalido;
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
