import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  isDarkMode = signal<boolean>(true);

  constructor() {
    // Cargar tema guardado o usar dark por defecto
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme) {
      this.isDarkMode.set(savedTheme === 'dark');
    }
    this.applyTheme(this.isDarkMode());
  }

  toggleTheme() {
    this.isDarkMode.set(!this.isDarkMode());
    this.applyTheme(this.isDarkMode());
    localStorage.setItem(this.THEME_KEY, this.isDarkMode() ? 'dark' : 'light');
  }

  private applyTheme(isDark: boolean) {
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.add('app-dark');
      htmlElement.classList.remove('app-light');
    } else {
      htmlElement.classList.add('app-light');
      htmlElement.classList.remove('app-dark');
    }
  }
}

