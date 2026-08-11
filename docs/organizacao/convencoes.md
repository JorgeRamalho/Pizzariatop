# Convenções de organização

## Princípios

1. **Separar fonte de entrega** — `src/` é editável; `site/js/` é gerado.
2. **Publicável = `site/`** — HTML, CSS, assets e JS compilado juntos.
3. **Docs fora do runtime** — `docs/` não é servido como produto.
4. **Um ponto de entrada** — `index.html` na raiz só redireciona.

## Nomenclatura

| Tipo        | Padrão                    | Exemplo               |
| ----------- | ------------------------- | --------------------- |
| Pastas      | kebab/lowercase semântico | `site/assets/brand`   |
| Classes CSS | BEM                       | `.menu-card__title`   |
| IDs         | camelCase funcional       | `menuGrid`, `btnCart` |
| Tokens CSS  | `--color-*`, `--font-*`   | `--color-tomate`      |
| Docs        | kebab-case `.md`          | `brand-guidelines.md` |

## Fluxo de desenvolvimento

```bash
npm install
npm run watch          # compila TS → site/js
npm run serve          # http://localhost:3000 → abrir /site/
npm run check          # typecheck + lint + prettier
```

Ou Live Server na pasta do projeto → URL `.../site/`.

## Organização do TypeScript

| Arquivo                       | Papel                       |
| ----------------------------- | --------------------------- |
| `src/typescript/main.ts`      | UI, carrinho, eventos       |
| `src/typescript/data/menu.ts` | Cardápio + WhatsApp         |
| `site/js/**`                  | Saída do `tsc` (ES modules) |

O HTML carrega `site/js/main.js` com `type="module"`.

## O que não fazer

- Editar `site/js/` diretamente (será sobrescrito pelo `tsc`)
- Colocar página principal na raiz misturada com docs
- Referenciar assets com caminhos absolutos de outro projeto em `Projetos/`

## Scripts npm

| Script                    | Função                           |
| ------------------------- | -------------------------------- |
| `build`                   | `tsc` uma vez                    |
| `watch`                   | `tsc --watch`                    |
| `serve`                   | servidor estático na porta 3000  |
| `lint` / `lint:fix`       | ESLint                           |
| `format` / `format:check` | Prettier                         |
| `typecheck`               | `tsc --noEmit`                   |
| `fonts:sync`              | Fontsource → `site/assets/fonts` |
| `check`                   | typecheck + lint + format:check  |

## Deploy

Ver [checklist-deploy.md](./checklist-deploy.md). SEO técnico: `robots.txt` e `sitemap.xml` na raiz.
