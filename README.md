# 🚀 Portafolio Template - Angular

<div align="center">

![Angular](https://img.shields.io/badge/Angular-21.0.0-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![PrimeNG](https://img.shields.io/badge/PrimeNG-21.0.1-FF6B6B?style=for-the-badge&logo=primeng&logoColor=white)

**Un template moderno y profesional para crear tu portafolio personal con Angular**

[Características](#-características) • [Instalación](#-instalación) • [Uso](#-cómo-usar-este-template) • [Estructura](#-estructura-del-proyecto) • [Personalización](#-personalización)

</div>

---

## 📋 Descripción

Este es un **template reutilizable** diseñado para que puedas crear rápidamente tu propio portafolio personal. Está construido con **Angular 21** y utiliza **PrimeNG** para una interfaz moderna y responsive.

Perfecto para desarrolladores que quieren mostrar sus proyectos, habilidades y experiencia profesional de manera elegante y profesional.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con soporte para modo claro/oscuro
- 📱 **Totalmente Responsive**: Se adapta perfectamente a todos los dispositivos
- 🌓 **Tema Oscuro/Claro**: Sistema de temas con persistencia en localStorage
- 🧩 **Componentes Modulares**: Estructura organizada y fácil de personalizar
- ⚡ **Rendimiento Optimizado**: Construido con las últimas características de Angular
- 🎯 **Secciones Incluidas**:
  - Hero Section
  - Sobre Mí (About)
  - Proyectos (Projects)
  - Habilidades (Skills)
  - Certificaciones (Certifications)
  - Contacto (Contact)
- 🔧 **TypeScript**: Completamente tipado para mejor desarrollo
- 📦 **PrimeNG UI**: Componentes de interfaz listos para usar

## 🚀 Instalación

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm (versión 10.8.2 o superior)
- Angular CLI 21.0.2

### Pasos

1. **Clona este repositorio** o úsalo como template:
   ```bash
   git clone https://github.com/tu-usuario/portafolio-template.git
   cd portafolio-template
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**:
   ```bash
   npm start
   # o
   ng serve
   ```

4. **Abre tu navegador** en `http://localhost:4200`

## 📖 Cómo usar este template

### 1. Personaliza la información

Edita los archivos de cada sección para agregar tu información personal:

- **Hero Section**: Tu nombre, título profesional y descripción
- **About**: Tu biografía y experiencia
- **Projects**: Tus proyectos con imágenes, tecnologías y enlaces
- **Skills**: Tus habilidades técnicas
- **Certifications**: Tus certificaciones y logros
- **Contact**: Tu información de contacto

### 2. Agrega tus proyectos

Modifica los datos de proyectos en los componentes correspondientes. El template incluye interfaces TypeScript para mantener la estructura consistente:

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}
```

### 3. Personaliza los estilos

Los archivos CSS están organizados por componente. Puedes modificar:
- Colores y temas en `styles.css`
- Estilos específicos de cada sección en sus respectivos archivos `.css`

### 4. Configura el tema

El servicio de temas (`ThemeService`) maneja automáticamente el modo oscuro/claro. Puedes personalizar los colores editando las clases CSS `app-dark` y `app-light`.

## 📁 Estructura del Proyecto

```
portafolio-template/
├── src/
│   ├── app/
│   │   ├── components/          # Componentes reutilizables
│   │   │   ├── header/         # Header con navegación
│   │   │   └── footer/         # Footer
│   │   ├── sections/            # Secciones principales
│   │   │   ├── hero/           # Sección principal
│   │   │   ├── about/          # Sobre mí
│   │   │   ├── projects/       # Proyectos
│   │   │   ├── skills/         # Habilidades
│   │   │   ├── certifications/ # Certificaciones
│   │   │   └── contact/        # Contacto
│   │   ├── models/             # Interfaces TypeScript
│   │   │   ├── project.interface.ts
│   │   │   ├── skill.interface.ts
│   │   │   └── certification.interface.ts
│   │   ├── services/           # Servicios
│   │   │   └── theme.service.ts # Servicio de temas
│   │   ├── app.ts              # Componente principal
│   │   └── app.routes.ts       # Rutas de la aplicación
│   ├── styles.css              # Estilos globales
│   └── index.html
├── package.json
└── README.md
```

## 🎨 Personalización

### Cambiar colores del tema

Edita las variables CSS en `src/styles.css`:

```css
.app-dark {
  --primary-color: #tu-color;
  --background-color: #tu-color;
  /* ... más variables */
}

.app-light {
  --primary-color: #tu-color;
  --background-color: #tu-color;
  /* ... más variables */
}
```

### Agregar nuevas secciones

1. Crea un nuevo componente:
   ```bash
   ng generate component sections/nueva-seccion
   ```

2. Importa el componente en `app.ts`
3. Agrega el componente en `app.html`

### Modificar el header/footer

Los componentes están en `src/app/components/header/` y `src/app/components/footer/`. Edita sus archivos HTML, CSS y TypeScript según tus necesidades.

## 🛠️ Tecnologías Utilizadas

- **Angular 21.0.0** - Framework principal
- **TypeScript 5.9.2** - Lenguaje de programación
- **PrimeNG 21.0.1** - Biblioteca de componentes UI
- **RxJS 7.8.0** - Programación reactiva
- **Vitest 4.0.8** - Framework de testing

## 📦 Build para Producción

Para crear una build optimizada para producción:

```bash
ng build
```

Los archivos compilados se generarán en la carpeta `dist/`. Puedes desplegarlos en cualquier servicio de hosting estático como:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3

## 🧪 Testing

Ejecuta las pruebas unitarias:

```bash
ng test
```

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo, modificarlo y distribuirlo como desees.

## 🤝 Contribuciones

Las contribuciones son bienvenidas! Si tienes ideas para mejorar este template:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 👨‍💻 Autor

Este template fue creado y desarrollado por mí como un proyecto personal para ayudar a otros desarrolladores a crear sus portafolios de manera rápida y profesional.

Si este template te ha sido útil, considera darle una ⭐ al repositorio. ¡Gracias!

---

<div align="center">

¿Tienes preguntas o sugerencias? ¡Abre un issue!

</div>
