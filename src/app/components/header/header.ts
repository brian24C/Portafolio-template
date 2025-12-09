import { Component, HostListener, signal } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [MenubarModule, CommonModule, RouterModule, ToggleSwitchModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isSticky = signal(false);

  constructor(public themeService: ThemeService) {}

  items = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      command: () => this.scrollToSection('home'),
    },
    {
      label: 'Acerca de',
      icon: 'pi pi-user',
      command: () => this.scrollToSection('about'),
    },
    {
      label: 'Proyectos',
      icon: 'pi pi-briefcase',
      command: () => this.scrollToSection('projects'),
    },
    {
      label: 'Habilidades',
      icon: 'pi pi-code',
      command: () => this.scrollToSection('skills'),
    },
    {
      label: 'Certificaciones',
      icon: 'pi pi-certificate',
      command: () => this.scrollToSection('certifications'),
    },
    {
      label: 'Contacto',
      icon: 'pi pi-envelope',
      command: () => this.scrollToSection('contact'),
    },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky.set(window.scrollY >= 20);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
