# KROMA | Moda retro curada

Landing interactiva de una sola pantalla (1920x1080, sin barras de scroll) para una tienda y curaduría digital de moda retro. Las secciones se deslizan de lado a lado con botones.

## Contenido
- `index.html`: estructura de la página
- `styles.css`: estilos retro (paleta, ventanas tipo Paint, carruseles, ruleta 3D)
- `script.js`: navegación lateral, carruseles, selector de década, bolsa, formulario y ruleta
- `images/`: fotos de las 9 piezas, del servicio de curaduría y de la ruleta retro

## Cómo correrlo en VS Code
1. Abre la carpeta con **File > Open Folder**.
2. Instala la extensión **Live Server** (Ritwick Dey).
3. Clic derecho en `index.html` y elige **Open with Live Server**.

Alternativa sin extensión: en la terminal, `python -m http.server 5500` y abre http://localhost:5500

Las fuentes (Fraunces, Plus Jakarta Sans y Silkscreen) se cargan desde Google Fonts, así que se necesita conexión a internet.

## Subirlo a GitHub
```bash
git init
git add .
git commit -m "feat: landing KROMA"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/kroma.git
git push -u origin main
```
Con GitHub CLI: `gh repo create kroma --public --source=. --push`

## Publicarlo gratis con GitHub Pages
En el repositorio: **Settings > Pages > Deploy from a branch > main / (root)**.

## Pendientes
- Cambiar precios, textos y canales de contacto de ejemplo.
- Reemplazar las imágenes por fotos reales de los productos.
- Conectar el formulario a un servicio de envío.
