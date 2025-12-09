import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { Certifications } from './sections/certifications/certifications';
import { Contact } from './sections/contact/contact';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Footer,
    Hero,
    About,
    Projects,
    Skills,
    Certifications,
    Contact,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // El servicio ya inicializa el tema en su constructor
  }
}
