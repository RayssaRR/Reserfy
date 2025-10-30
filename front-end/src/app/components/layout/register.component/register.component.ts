import { Component } from '@angular/core';

@Component({
  selector: 'app-register.component',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
    nome!: string;
    email!: string;
    cpf!: string;
    telefone!: string;
    departamento!: string;
    cargo!: string;
    senha!: string;
    
    
}
