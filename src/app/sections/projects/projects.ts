import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Project } from '../../models/project.interface';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, CardModule, ButtonModule, TagModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  window = window;

  projects: Project[] = [
    {
      id: '1',
      title: 'Proyecto Ejemplo 1',
      description:
        'Una aplicación web moderna construida con Angular y PrimeNG. Incluye funcionalidades avanzadas de UI/UX y integración con APIs.',
      technologies: ['Angular', 'TypeScript', 'PrimeNG', 'Node.js'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true,
    },
    {
      id: '2',
      title: 'Proyecto Ejemplo 2',
      description:
        'Sistema de gestión desarrollado con React y Node.js. Incluye autenticación, base de datos y panel de administración.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true,
    },
    {
      id: '3',
      title: 'Proyecto Ejemplo 3',
      description:
        'Aplicación móvil híbrida con funcionalidades en tiempo real. Desarrollada con tecnologías modernas y diseño responsivo.',
      technologies: ['Ionic', 'Angular', 'Firebase', 'TypeScript'],
      githubUrl: 'https://github.com',
      featured: false,
    },
  ];
}
