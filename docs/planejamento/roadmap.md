# Roadmap priorizado

## P0 — Confiança e conversão (1–2 dias)

- [ ] Substituir telefone, endereço e links de Instagram/iFood por dados reais
- [ ] Garantir URL canônica com `/site/` ou mover `index.html` da página para a raiz do Pages
- [ ] Adicionar Open Graph + Twitter Card + JSON-LD `Restaurant`
- [ ] Labels de categoria legíveis (`Clássicas`, não `classicas`)

## P1 — UX do pedido (3–5 dias)

- [ ] Seletor de tamanho (Broto / Média / Grande) no card ou drawer
- [ ] Opção de borda recheada no item
- [ ] Persistência do carrinho (`localStorage`)
- [ ] Skip link + foco visível + `prefers-reduced-motion`

## P2 — Visual e conteúdo (1 sprint)

- [ ] Fotos próprias (hero + 9 sabores); reduzir Unsplash
- [ ] Simplificar 1º viewport: marca hero-level, 1 headline, 1 frase, 1 grupo de CTA
- [ ] Breakpoint intermediário (~1024px) para grid do cardápio
- [ ] Normalizar HTML (remover linhas em branco duplicadas)

## P3 — Engenharia (contínuo)

- [x] ESLint + Prettier
- [x] Script `npm run check` (typecheck + lint + format)
- [x] Cardápio em `src/typescript/data/menu.ts` (ES modules)
- [x] Sitemap.xml + robots.txt para GitHub Pages
- [x] Checklist pré-deploy em `docs/organizacao/checklist-deploy.md`
- [x] Self-host fontes (woff2 em `site/assets/fonts` + `css/fonts.css`)

## Fora de escopo imediato

- Backend/pedido online com pagamento (Convex ou similar) — só quando WhatsApp deixar de escalar
- App nativo
- Multi-idioma
