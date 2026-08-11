# Relatório de auditoria — Playwright

**Data:** 11/08/2026  
**URL auditada (original):** `http://127.0.0.1:5502/html/index.html`  
**URL revalidada (pós-reorg):** `http://127.0.0.1:5503/site/`  
**Ferramenta:** Playwright MCP (navigate, snapshot, evaluate, screenshot, resize, interactions)

## Scorecard (0–10)

| Dimensão          | Nota | Síntese                                                            |
| ----------------- | ---- | ------------------------------------------------------------------ |
| SEO               | 4.5  | Title/description ok; sem OG, Twitter, JSON-LD, canonical absoluto |
| Usabilidade       | 7.5  | Fluxo cardápio → carrinho → WhatsApp funciona                      |
| Responsividade    | 7.0  | Mobile ok, sem overflow; um único breakpoint (768px)               |
| Layout            | 6.5  | Hero denso; marca duplicada; muitos cards competindo               |
| Identidade visual | 7.5  | Sistema de marca claro; risco de look “template creme+tomate”      |
| Tipografia        | 8.0  | Cormorant / Nunito / Bebas bem hierarquizados                      |
| UX                | 7.0  | Boa jornada; labels `classicas` crus; sem tamanho no pedido        |
| UI Design         | 7.0  | Design tokens sólidos; foco/teclado pouco explícito                |
| Estratégia de dev | 6.0  | Static+TS adequado ao MVP; deps CDN; sem lint/test                 |
| Estrutura/docs    | 7.5  | Reorg `site/` + `src/` + `docs/` (esta pasta)                      |

**Média ponderada aproximada:** **6.9 / 10** (bom MVP visual; gaps em SEO e dados reais).

## Evidências Playwright

### SEO / head

- `lang="pt-BR"` ✓
- `<title>` e `meta description` ✓
- `theme-color` ✓
- `og:*`, `twitter:*`, JSON-LD ✗
- `link rel="canonical"` absoluto ✗
- 1× `h1` ✓

### Acessibilidade

- Landmarks: `header`, `nav`, `main`, `footer` ✓
- Botões com `aria-label` (menu, carrinho, fechar) ✓
- Imagens de conteúdo com `alt` ✓
- Logos decorativos com `alt=""` ✓
- Skip link ✗
- `prefers-reduced-motion` ✗
- Hierarquia: vários `h3` (info-strip) antes do primeiro `h2` ⚠

### Interações validadas

| Ação                            | Resultado                                       |
| ------------------------------- | ----------------------------------------------- |
| Filtro “Doces”                  | 3 cards (Chocolate, Romeu e Julieta, Prestígio) |
| Adicionar ao carrinho           | Contador + toast                                |
| Abrir drawer                    | `aria-hidden=false`, WhatsApp habilitado        |
| Menu mobile                     | Toggle `aria-expanded`                          |
| Overflow horizontal (390–768px) | Não detectado                                   |

### Console

- Zero erros de JS na URL com trailing slash `/site/`
- 404 de assets ao abrir `/site` **sem** barra final (caminhos relativos)

### Conteúdo / confiança

- Telefone `+5511999999999` placeholder
- Endereço “Rua das Pizzas, 100” placeholder
- Instagram / iFood com `href="#"`
- 15 imagens Unsplash (dependência externa)
- Labels de categoria em inglês técnico (`classicas`, `doces`)

## Achados por severidade

### Alta

1. SEO social incompleto (compartilhamento sem preview)
2. Dados de contato fictícios prejudicam conversão e confiança
3. Fragilidade de path sem trailing slash após reorg

### Média

4. Hero com marca + tag + H1 + subtítulo + 2 CTAs (orçamento alto)
5. Categorias exibidas sem label amigável
6. Sem seleção de tamanho (Broto/Média/Grande) no carrinho
7. Sem `prefers-reduced-motion` / skip-link

### Baixa

8. HTML com linhas em branco excessivas (manutenção)
9. Um único `@media (max-width: 768px)`
10. Redes sociais mortas

## Composição visual (observação)

- Promo-bar vermelha + header sticky + hero full-bleed com overlay escuro/vermelho
- Tipografia display ~68px desktop
- Info-strip com 4 diferenciais logo após o hero
- Cardápio: showcase 3 fotos → banner combo → filtros → grid 9 pizzas → promo cards
- Fechamento: passos → CTA WhatsApp → sobre → footer escuro

Ver canvas interativo no workspace Cursor para scorecard visual.
