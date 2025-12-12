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
      title: 'Ejemplo de proyecto destacado 1',
      description:
        'Ejemplo de descripción del proyecto. Aquí puedes describir las funcionalidades principales, el propósito del proyecto y cualquier detalle relevante que quieras destacar.',
      technologies: ['Ejemplo de tecnología 1', 'Ejemplo de tecnología 2', 'Ejemplo de tecnología 3', 'Ejemplo de tecnología 4'],
      githubUrl: 'https://ejemplo-de-url-github.com',
      liveUrl: 'https://ejemplo-de-url-demo.com',
      featured: true,
    },
    {
      id: '2',
      title: 'Ejemplo de proyecto destacado 2',
      description:
        'Ejemplo de descripción del segundo proyecto. Puedes incluir información sobre el stack tecnológico utilizado, desafíos resueltos o resultados obtenidos.',
      technologies: ['Ejemplo de tecnología 1', 'Ejemplo de tecnología 2', 'Ejemplo de tecnología 3', 'Ejemplo de tecnología 4'],
      githubUrl: 'https://ejemplo-de-url-github.com',
      liveUrl: 'https://ejemplo-de-url-demo.com',
      featured: true,
    },
    {
      id: '3',
      title: 'Ejemplo de proyecto regular',
      description:
        'Ejemplo de descripción de un proyecto no destacado. Este tipo de proyectos aparecerán en la sección general de proyectos.',
      technologies: ['Ejemplo de tecnología 1', 'Ejemplo de tecnología 2', 'Ejemplo de tecnología 3', 'Ejemplo de tecnología 4'],
      githubUrl: 'https://ejemplo-de-url-github.com',
      featured: false,
    },
  ];
}
