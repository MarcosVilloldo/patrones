## Instalación

1. Instala las dependencias:
```bash
npm install
```

## Uso

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en la URL que aparece en la terminal (`http://localhost:5173`)

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run cy:open` - Abre la interfaz de Cypress
- `npm run cy:run` - Ejecuta Cypress en modo headless
- `npm run test:e2e` - Inicia Vite y corre E2E en headless
- `npm run test:e2e:open` - Inicia Vite y abre la UI de Cypress

## Pruebas E2E

1. Instala dependencias (incluye devDependencies):
```bash
npm install
```

2. Ejecuta los tests E2E en modo interactivo:
```bash
npm run test:e2e:open
```

3. O en modo headless (CI):
```bash
npm run test:e2e
```

## Estructura del proyecto

```
.
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js
│   └── support/
│       └── e2e.js
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   └── Login.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── cypress.config.js
├── index.html
├── vite.config.js
└── package.json
```
