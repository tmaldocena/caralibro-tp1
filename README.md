# TP1 Frontend - Caralibro (Archive 2010)

## Descripción del Proyecto
Este proyecto es una plataforma social retro inspirada en la estética de Facebook de principios de la década de 2010. Forma parte del Trabajo Práctico 1 de la materia Frontend, centrado en la estructura de archivos, diseño adaptable e interactividad básica.

El sitio permite explorar la portada del equipo (estilo News Feed), la bitácora de desarrollo (estilo Notas) y los perfiles individuales de los integrantes.

## Estructura de Archivos
- `/index.html`: Portada principal y muro de noticias.
- `/bitacora.html`: Registro de decisiones y progreso del proyecto.
- `/perfil-template.html`: Plantilla base para los integrantes del grupo.
- `/css/main.css`: Estilos globales y variables de diseño.
- `/css/responsive.css`: Implementación de breakpoints (400px, 900px, 1200px).
- `/js/core.js`: Lógica global del sitio.
- `/js/interactions.js`: Funciones interactivas específicas.
- `/img/`: Carpeta para imágenes y assets.
- `/design/`: Capturas de pantalla del diseño original en Figma.

## Interactividad con JavaScript
Se han implementado las siguientes funciones para cumplir con los requerimientos mínimos:

### Global (core.js)
1.  **Simulación de Búsqueda**: Captura la tecla 'Enter' en la barra de búsqueda superior y muestra una alerta con la consulta.
2.  **Placeholder Dinámico**: El texto de ayuda de la barra de búsqueda cambia cada 4 segundos entre diferentes sugerencias.

### Portada (interactions.js)
3.  **Sistema de Like**: El botón "Me gusta" del post principal cambia de estado (texto y color) y actualiza el contador de likes dinámicamente.
4.  **Actualización de Estado**: El botón "Publicar" valida si hay texto en el área de estado y muestra una confirmación.

### Perfil (interactions.js)
5.  **Solicitud de Amistad**: El botón "+ Añadir amigo" cambia a "✓ Solicitud enviada" y modifica su color al hacer clic.
6.  **Efecto Hover en Habilidades**: Las etiquetas de habilidades cambian su color de fondo al pasar el puntero, mejorando la respuesta visual.

### Bitácora (interactions.js)
7.  **Simulación de Nueva Nota**: El botón "Escribir una nota" solicita un título mediante un prompt y confirma la acción.

## Guía para Integrantes
Para crear tu página individual:
1.  Duplica el archivo `perfil-template.html`.
2.  Renómbralo como `nombre-apellido.html`.
3.  Modifica los datos personales (Nombre, Edad, Ubicación, Habilidades, Películas, Música) en el HTML.
4.  Asegúrate de actualizar el link en el widget "Personas que quizá conozcas" de `index.html` para que apunte a tu nueva página.

---
**Curso:** Frontend - TP1  
**Equipo:** The Alpha Project Team  
**Año:** 2024
