import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-about',
  imports: [CommonModule, CardModule, TagModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  youtubeUrl = 'https://youtube.com'; // Reemplaza con tu URL de YouTube

  technologies = [
    { name: 'Angular', icon: 'pi pi-code' },
    { name: 'TypeScript', icon: 'pi pi-code' },
    { name: 'JavaScript', icon: 'pi pi-code' },
    { name: 'React', icon: 'pi pi-code' },
    { name: 'Node.js', icon: 'pi pi-code' },
    { name: 'Python', icon: 'pi pi-code' },
    { name: 'Java', icon: 'pi pi-code' },
    { name: 'MongoDB', icon: 'pi pi-database' },
    { name: 'PostgreSQL', icon: 'pi pi-database' },
    { name: 'Git', icon: 'pi pi-github' },
  ];
}
