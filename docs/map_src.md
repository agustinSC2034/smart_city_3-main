# Mapa de archivos

## Presentacion Smart City

- `src/data/presentation.ts`: concentra el contenido editable de la presentacion online: slides, textos, metricas, iconos y datos de mockups.
- `src/components/PresentationDeck.tsx`: renderiza la ruta `/presentacion` como deck 16:9 navegable, con controles, teclado, transiciones y mockups visuales CSS/SVG.
- `presentacion/index.html`: entrada estatica para publicar la presentacion como subruta directa en GitHub Pages o cualquier hosting estatico.

## Imagenes de plataforma

- `public/plataforma/`: capturas fuente usadas por Vite para reemplazar mockups de la landing: plataforma general, semaforos, alumbrado, camaras y residuos.
- `plataforma/`: copia publicable desde la raiz del sitio para que `index.html` + `app.js` funcionen en GitHub Pages sin servidor Vite.
