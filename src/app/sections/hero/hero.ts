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
  name = signal('BRIAN');
  roles = signal(['Desarrollador Full Stack', 'Entusiasta de la Tecnología']);
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
