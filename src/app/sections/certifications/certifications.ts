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
      title: 'Angular - The Complete Guide',
      issuer: 'Udemy',
      issueDate: '2024-01-15',
      credentialId: 'UC-1234567890',
      credentialUrl: 'https://udemy.com/certificate',
      type: 'certification',
      description: 'Curso completo de Angular desde cero hasta nivel avanzado',
    },
    {
      id: '2',
      title: 'TypeScript Fundamentals',
      issuer: 'Pluralsight',
      issueDate: '2023-11-20',
      credentialUrl: 'https://pluralsight.com/certificate',
      type: 'certification',
      description: 'Fundamentos y mejores prácticas de TypeScript',
    },
    {
      id: '3',
      title: 'Titulo de prueba',
      issuer: 'Universidad de prueba',
      issueDate: '2018-06-01',
      expirationDate: '2025-12-31',
      type: 'education',
      description: 'Titulo de prueba',
    },
    {
      id: '4',
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      issueDate: '2023-08-10',
      expirationDate: '2026-08-10',
      credentialId: 'AWS-123456789',
      credentialUrl: 'https://aws.amazon.com/verification',
      type: 'certification',
      description: 'Certificación oficial de AWS en arquitectura de soluciones',
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

