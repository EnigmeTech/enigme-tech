# enigme — Landing Page (React + TypeScript + Vite + MUI)

Landing page moderna para a empresa **enigme** (soluções tecnológicas), construída com **React + TypeScript** e **MUI**,
usando as cores e tipografia definidas no manual da marca (azuis #0C01B7, #0B4CFE, #6EA3F3, #B9D5FD; tipografia Montserrat).

## Requisitos

- Node.js >= 18
- npm, pnpm ou yarn

## Rodar localmente

```bash
# dentro da pasta do projeto
npm install
npm run dev
# abra http://localhost:5173
```

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy sugerido

- **Vercel** (importar o repositório, framework Vite, Node 18/20).
- **Netlify** (build `npm run build`, directory `dist`).

## Estrutura

- `src/theme.ts`: tema MUI com paleta da marca.
- `src/components/*`: componentes da landing (Navbar, Hero, Formulário de Contato, Studio, CTA, Footer).
- `public/favicon.svg`: ícone baseado na identidade.

> Observação: o formulário de contato é apenas ilustrativo; conecte com seu endpoint para envio real.
