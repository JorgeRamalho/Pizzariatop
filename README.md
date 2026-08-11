# Pizzaria Top — Delivery

Site de delivery da **Pizzaria Top** com identidade visual italiana contemporânea.

**Slogan:** _Sabor que sobe ao topo_

## Site online

**URL:** https://jorgeramalho.github.io/Pizzariatop/

> **Atenção:** não use o domínio `pizzariatop.netifly.app` (erro de digitação de Netlify). Esse domínio é estacionado e redireciona para sites de cassino/anúncios.

## Estrutura de pastas

```
Projeto-PizzariaTop/
├── index.html              # Redirect → site/ (GitHub Pages)
├── site/                   # Entrega estática
│   ├── index.html          # Página principal
│   ├── assets/brand/       # Logo, logomarca, favicon (SVG)
│   ├── css/style.css       # Design system
│   └── js/main.js          # JS compilado (gerado pelo TypeScript)
├── src/typescript/         # Código-fonte TypeScript
├── docs/                   # Documentação e auditoria profissional
├── package.json
└── tsconfig.json
```

Documentação completa: [`docs/README.md`](./docs/README.md)

## Como rodar

```bash
npm install
npm run build
npm run serve
```

Abra **`http://localhost:3000/site/`** (barra final recomendada).

Com Live Server, use a URL `.../site/` — não `.../site` sem barra.

Ao editar `src/typescript/`, rode `npm run build` ou `npm run watch`.

### Qualidade (pacote Engenharia)

```bash
npm run check       # typecheck + ESLint + Prettier
npm run fonts:sync  # atualiza woff2 self-host a partir do Fontsource
npm run lint:fix
npm run format
```

Checklist de publicação: [`docs/organizacao/checklist-deploy.md`](./docs/organizacao/checklist-deploy.md)

## Identidade (resumo)

| Elemento   | Escolha               |
| ---------- | --------------------- |
| Tomate     | `#c41e3a`             |
| Queijo     | `#f4a261` / `#ffb703` |
| Creme      | `#fff8f0`             |
| Manjericão | `#2d6a4f`             |
| Títulos    | Cormorant Garamond    |
| Corpo      | Nunito Sans           |
| Destaques  | Bebas Neue            |

Detalhes: [`docs/identidade/brand-guidelines.md`](./docs/identidade/brand-guidelines.md)

## Funcionalidades

- Cardápio com filtros (clássicas, especiais, doces)
- Carrinho lateral com total
- Pedido via WhatsApp
- Layout responsivo e menu mobile

## Auditoria

Relatório Playwright e scores: [`docs/auditoria/relatorio-playwright.md`](./docs/auditoria/relatorio-playwright.md)  
Roadmap: [`docs/planejamento/roadmap.md`](./docs/planejamento/roadmap.md)

## Autor

**Jorge R. Barbosa**  
LinkedIn: https://www.linkedin.com/in/jorge-r-barbosa-aabb0417b/  
GitHub: https://github.com/JorgeRamalho  
Contato: 41 99143-4153
