# Landing Page: Bombas Hidráulicas Premium

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SEO Optimized](https://img.shields.io/badge/SEO-Optimized-10B981?style=for-the-badge)

Una landing page de alto rendimiento y orientada a la conversión, diseñada específicamente para la venta de maquinaria pesada e industrial. Presenta una estética **"Dark Industrial Premium"**, combinando una interfaz inmersiva con especificaciones técnicas detalladas.

## Características Principales

- **Arquitectura Mobile-First:** Diseñada priorizando dispositivos móviles para garantizar tiempos de carga ultra rápidos, escalando fluidamente a pantallas de escritorio.
- **Metodología BEM:** Código CSS escalable, modular y fácil de mantener utilizando la convención *Block Element Modifier* con nomenclatura en español (camelCase).
- **Semántica HTML5:** Uso estricto de etiquetas semánticas (`<article>`, `<section>`, `<figure>`, `<nav>`) para mejorar la accesibilidad y el SEO.
- **Galerías Interactivas (Bento Grid):** Uso de CSS Grid avanzado con propiedades `object-fit: cover` para un catálogo visual sin asimetrías.
- **Modal Dinámico en Vanilla JS:** Sistema de vista explosionada con carrusel de imágenes `crossfade`, navegación por teclado y transiciones aceleradas por hardware.
- **SEO Técnico Completo:** Integración nativa de etiquetas Meta, atributos `alt` y `title` descriptivos, `robots.txt` y `sitemap.xml`.

## Stack Tecnológico

- **Estructura:** HTML5
- **Estilos:** CSS3 Puro (Variables Nativas, Flexbox, Grid, Animaciones `@keyframes`)
- **Lógica:** Vanilla JavaScript (ES6+)
- **Tipografía & Iconos:** Google Fonts (Inter) y Material Symbols Outlined.

## Estructura del Proyecto

El proyecto respeta el principio de separación de responsabilidades (Separation of Concerns):

```text
📦 raiz-del-proyecto
 ┣ 📂 assets/              # Imágenes optimizadas en formato WebP
 ┣ 📜 index.html           # Estructura semántica y contenido
 ┣ 📜 estilos.css          # Reglas de diseño (Mobile-first + BEM)
 ┣ 📜 modal.js             # Lógica del visor de imágenes interactivo
 ┣ 📜 robots.txt           # Directivas para crawlers de motores de búsqueda
 ┗ 📜 sitemap.xml          # Mapa del sitio para indexación SEO
```

## Rendimiento y Optimización

1. **Aceleración por Hardware:** Las animaciones y efectos *hover* utilizan exclusivamente las propiedades `transform` y `opacity` para evitar *reflows* en el navegador y mantener 60 FPS estables.
2. **Carga de Imágenes:** Implementación de la etiqueta `<picture>` con formatos **WebP** para reducir drásticamente el peso de la página.
3. **Gestión del DOM:** El script `modal.js` registra los *Event Listeners* una única vez y almacena en memoria caché los nodos del DOM para maximizar la velocidad de respuesta.

## Instalación y Uso

Al ser un proyecto estático, no requiere dependencias de Node.js ni procesos de compilación complejos.

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/bombas-hidraulicas-landing.git](https://github.com/tu-usuario/bombas-hidraulicas-landing.git)
   ```
2. Abre el archivo `index.html` en tu navegador, o utiliza una extensión como *Live Server* en VS Code para recarga en vivo.

## Autor

**Felipe Ochoa**
*Desarrollador de Software & Arquitecto de Soluciones Profesionales*
- [LinkedIn](https://linkedin.com/in/felipeochoadev)
- [GitHub](https://github.com/Felipeochoadev)

---
*Diseñado y desarrollado con precisión técnica.*