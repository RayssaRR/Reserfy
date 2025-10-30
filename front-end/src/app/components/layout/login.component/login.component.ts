import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-login.component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  usuario!: string;
  senha!: string;


  logar(){
    if (this.usuario =="admin" && this.senha =="admin"){
      alert('Admin')
    } else {
      alert('Usuário errado')
    }
  }
}

