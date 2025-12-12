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
  youtubeUrl = 'https://ejemplo-de-url-youtube.com'; // Reemplaza con tu URL de YouTube

  technologies = [
    { name: 'Ejemplo de tecnología 1', icon: 'pi pi-code' },
    { name: 'Ejemplo de tecnología 2', icon: 'pi pi-code' },
    { name: 'Ejemplo de tecnología 3', icon: 'pi pi-code' },
    { name: 'Ejemplo de tecnología 4', icon: 'pi pi-code' },
    { name: 'Ejemplo de tecnología 5', icon: 'pi pi-code' },
    { name: 'Ejemplo de tecnología 6', icon: 'pi pi-code' },
    { name: 'Ejemplo de tecnología 7', icon: 'pi pi-code' },
    { name: 'Ejemplo de tecnología 8', icon: 'pi pi-database' },
    { name: 'Ejemplo de tecnología 9', icon: 'pi pi-database' },
    { name: 'Ejemplo de tecnología 10', icon: 'pi pi-github' },
  ];
}
