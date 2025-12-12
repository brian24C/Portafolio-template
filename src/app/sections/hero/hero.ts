import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, ButtonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  name = signal('EJEMPLO DE NOMBRE');
  roles = signal(['Ejemplo de rol profesional 1', 'Ejemplo de rol profesional 2']);
  currentRole = signal(0);

  constructor() {
    this.rotateRoles();
  }

  rotateRoles() {
    setInterval(() => {
      this.currentRole.set((this.currentRole() + 1) % this.roles().length);
    }, 3000);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
