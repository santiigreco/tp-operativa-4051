# Trabajo Práctico 1 de Investigación Operativa I4051 - UTN

Este proyecto es una aplicación web interactiva desarrollada para la materia **Investigación Operativa** de la Universidad Tecnológica Nacional (UTN).

El objetivo de esta plataforma es aplicar, simular y explorar visualmente los diferentes modelos matemáticos y algoritmos de optimización vistos durante la cursada.

## 👨‍🎓 Integrantes

- Santiago Greco
- Leonardo Diaz
- Leandro Pérez Endl
- Ivan Zymerman

## 📚 Temas a desarrollar

1. **Procesos de Markov:** Análisis de sistemas estocásticos y transiciones de estado a lo largo del tiempo.
2. **Simulación:** Modelado computacional para predecir y entender el comportamiento de sistemas complejos.
3. **Filas de Espera (Teoría de Colas):** Análisis para optimizar el flujo y reducir tiempos de espera en sistemas de servicio.
4. **Gestión de Proyectos (PERT - CPM):** Planificación y control de proyectos mediante análisis de caminos críticos y estimación de tiempos.

## 🚀 Tecnologías utilizadas

- **Vite + React:** Para un entorno de desarrollo rápido y una interfaz de usuario dinámica.
- **CSS Vanilla:** Estilos modernos personalizados, aprovechando *Glassmorphism*, gradientes y micro-animaciones.
- **Netlify:** Plataforma para el despliegue automático y continuo.

## ⚙️ Cómo ejecutar localmente

1. Instalar las dependencias del proyecto:

   ```bash
   npm install
   ```
2. Ejecutar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Luego, abre en tu navegador la dirección que figura en consola (usualmente `http://localhost:5173/`).

## 📦 Despliegue en Netlify

El proyecto está preparado para ser desplegado sin problemas en Netlify.
Para una correcta configuración manual, utiliza los siguientes valores en los **Build settings**:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

> **Nota:** El archivo `public/_redirects` ya se encuentra configurado para que el enrutamiento interno de React funcione correctamente en producción sin generar errores `404`.

test2 wifi utn
