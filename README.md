# Blast-Off Burgers — Restaurant Page (Webpack Template)

A small “restaurant homepage” built for **The Odin Project** to practice **DOM-only rendering** with a **Webpack** toolchain.  
I later refactored the repo into a **starter template** so you (or future me) can quickly spin up similar projects.

---

## Highlights
- **DOM-driven UI**: All page content (Home / Menu / Contact) is generated via JavaScript modules.
- **Tabbed nav**: Buttons switch “views” by clearing `#content` and mounting the selected module.
- **Webpack setup**: Bundles JS, injects HTML, handles CSS, and supports local images.
- **Dev server**: Live reload with source maps for a smooth DX.
- **Deployable**: GitHub Pages workflow included (deploys `dist/` to `gh-pages`).

---

## Tech Stack
- **JavaScript (ES Modules)**
- **Webpack 5**, **webpack-dev-server**
- **html-webpack-plugin**
- **css-loader** + **style-loader**
- *(Optional)* **html-loader** and **asset modules** for images
