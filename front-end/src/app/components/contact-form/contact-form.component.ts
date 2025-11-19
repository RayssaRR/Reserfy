import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-contact-form',
  standalone: true, 
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'] 
})
export class ContactFormComponent implements OnInit {
  
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Formulário Válido, Dados Enviados:', this.contactForm.value);
      alert('Mensagem enviada com sucesso! (Veja o console para os dados)');
      this.contactForm.reset(); 
    } else {
      console.log('Formulário Inválido');
      this.contactForm.markAllAsTouched(); 
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
  get f() { return this.contactForm.controls; }
}
