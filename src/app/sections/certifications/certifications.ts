import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Certification } from '../../models/certification.interface';

@Component({
  selector: 'app-certifications',
  imports: [CommonModule, CardModule, ButtonModule, TagModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications {
  window = window;

  certifications: Certification[] = [
    {
      id: '1',
      title: 'Ejemplo de certificación 1',
      issuer: 'Ejemplo de institución emisora',
      issueDate: '2024-01-15',
      credentialId: 'EJEMPLO-ID-1234567890',
      credentialUrl: 'https://ejemplo-de-url-certificado.com',
      type: 'certification',
      description: 'Ejemplo de descripción de la certificación. Aquí puedes describir el contenido, nivel o alcance de la certificación.',
    },
    {
      id: '2',
      title: 'Ejemplo de certificación 2',
      issuer: 'Ejemplo de plataforma educativa',
      issueDate: '2023-11-20',
      credentialUrl: 'https://ejemplo-de-url-certificado.com',
      type: 'certification',
      description: 'Ejemplo de descripción de otra certificación. Puedes incluir detalles sobre las habilidades o conocimientos adquiridos.',
    },
    {
      id: '3',
      title: 'Ejemplo de título académico',
      issuer: 'Ejemplo de universidad o institución educativa',
      issueDate: '2018-06-01',
      expirationDate: '2025-12-31',
      type: 'education',
      description: 'Ejemplo de descripción del título académico. Puedes incluir información sobre la carrera, especialización o logros académicos.',
    },
    {
      id: '4',
      title: 'Ejemplo de certificación profesional',
      issuer: 'Ejemplo de organización certificadora',
      issueDate: '2023-08-10',
      expirationDate: '2026-08-10',
      credentialId: 'EJEMPLO-CREDENTIAL-123456789',
      credentialUrl: 'https://ejemplo-de-url-verificacion.com',
      type: 'certification',
      description: 'Ejemplo de descripción de certificación profesional. Incluye información sobre el área de especialización y validez.',
    },
  ];

  getCertificationsByType(type: 'certification' | 'education'): Certification[] {
    return this.certifications.filter((cert) => cert.type === type);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}

