# Never Unpack — sitio web

Sitio estático para la comunidad **Never Unpack**: equipo, continentes (enlaces al blog) y bloques informativos. Construido con **Next.js** (App Router, export estático), **Tailwind CSS v4** y **Framer Motion**.

## Requisitos

- Node.js 20+

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Producción

```bash
npm run build
```

La salida queda en `out/` (adecuado para cualquier hosting de archivos estáticos).

## Contenido principal

- `src/data/team.ts` — retratos y bios del equipo (hero carrusel).
- `src/data/projects.ts` — tarjetas por continente y URLs al blog.
- `src/data/site.ts` — navegación, estadísticas y textos compartidos.

## Licencia

Uso interno / Never Unpack. Ajusta según tu organización.
