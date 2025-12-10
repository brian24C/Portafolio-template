import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    InputTextModule,
    TextareaModule,
    ButtonModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm = {
    name: '',
    email: '',
    message: '',
  };

  submitForm() {
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', this.contactForm);
    alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    this.contactForm = { name: '', email: '', message: '' };
  }
}
