import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, CardModule, TagModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills = [
    { name: 'Ejemplo de habilidad frontend 1', category: 'frontend' },
    { name: 'Ejemplo de habilidad frontend 2', category: 'frontend' },
    { name: 'Ejemplo de habilidad frontend 3', category: 'frontend' },
    { name: 'Ejemplo de habilidad frontend 4', category: 'frontend' },
    { name: 'Ejemplo de habilidad backend 1', category: 'backend' },
    { name: 'Ejemplo de habilidad backend 2', category: 'backend' },
    { name: 'Ejemplo de habilidad database 1', category: 'database' },
    { name: 'Ejemplo de habilidad database 2', category: 'database' },
    { name: 'Ejemplo de herramienta 1', category: 'tool' },
  ];
}
