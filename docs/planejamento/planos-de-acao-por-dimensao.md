# Planos de ação por dimensão

Planos derivados da auditoria Playwright (11/08/2026). Cada dimensão tem objetivo, ações priorizadas (P0/P1/P2) e critério de pronto.

---

## 1. SEO

**Objetivo:** aparecer em buscas locais e ter preview correto ao compartilhar.

| Prioridade | Ação                                                                             |
| ---------- | -------------------------------------------------------------------------------- |
| P0         | Meta Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)  |
| P0         | Twitter Card (`summary_large_image`)                                             |
| P0         | JSON-LD `Restaurant` / `LocalBusiness` (nome, telefone, endereço, horário, menu) |
| P0         | `link rel="canonical"` absoluto (URL de produção)                                |
| P0         | Title com cidade/bairro + proposta (`Pizzaria Top                                | Delivery em [bairro]`) |
| P1         | Description com keyword local + CTA (“peça no WhatsApp”)                         |
| P1         | Texto de seção Sobre/Contato com bairro e área de entrega                        |
| P2         | `robots.txt` + `sitemap.xml` no GitHub Pages                                     |
| P2         | Alt texts revisados com termos naturais (sem keyword stuffing)                   |

**Pronto quando:** compartilhar o link mostra imagem + título corretos; Rich Results Test valida o schema.

---

## 2. Usabilidade

**Objetivo:** montar e enviar o pedido sem dúvida em ≤ 3 passos mentais.

| Prioridade | Ação                                                              |
| ---------- | ----------------------------------------------------------------- |
| P0         | Substituir telefone, endereço e redes placeholder por dados reais |
| P0         | CTA WhatsApp sempre visível no mobile (sticky ou header)          |
| P1         | Seletor de tamanho (Broto / Média / Grande) antes de “Adicionar”  |
| P1         | Opção de borda recheada no item                                   |
| P1         | Carrinho com `localStorage` (não perder no reload)                |
| P1         | Mensagem WhatsApp incluir tamanho, borda e cupom se aplicável     |
| P2         | Empty states claros (filtro sem itens; carrinho vazio com CTA)    |
| P2         | Confirmação pós-envio (“pedido aberto no WhatsApp”)               |

**Pronto quando:** usuário de teste completa pedido no mobile sem perguntar “e agora?”.

---

## 3. Responsividade

**Objetivo:** experiência estável em 360–1440px sem overflow nem toques impossíveis.

| Prioridade | Ação                                                                   |
| ---------- | ---------------------------------------------------------------------- |
| P0         | Documentar URL canônica local: sempre `/site/` com barra final         |
| P1         | Breakpoint intermediário (~1024px) para grid do cardápio (2–3 colunas) |
| P1         | Alvos de toque ≥ 44px (filtros, +/− do carrinho, menu)                 |
| P1         | Promo-bar: truncar/empilhar texto longo no mobile                      |
| P2         | Testar 320 / 390 / 768 / 1024 / 1440 (Playwright screenshots)          |
| P2         | Hero `min-height` menor em mobile se CTAs ficarem abaixo da dobra      |

**Pronto quando:** nenhum scroll horizontal; menu e carrinho usáveis só com o polegar.

---

## 4. Layout

**Objetivo:** primeiro viewport = uma composição; cada seção = um job.

| Prioridade | Ação                                                                          |
| ---------- | ----------------------------------------------------------------------------- |
| P0         | Reduzir duplicação de marca no hero (header já carrega a marca)               |
| P1         | Hero enxuto: marca ou H1 (não os dois competindo) + 1 subtítulo + 1 grupo CTA |
| P1         | Manter info-strip **fora** do primeiro viewport no mobile                     |
| P1         | Um CTA primário por bloco (evitar 3 “Montar pedido” iguais)                   |
| P2         | Rítmica vertical: espaçamento consistente entre seções                        |
| P2         | Promo cards: menos densidade; 1 destaque visual por vez                       |

**Pronto quando:** screenshot do 1º viewport passa no “brand test” (marca clara sem depender só da nav).

---

## 5. Identidade visual

**Objetivo:** marca reconhecível e consistente (tomate / queijo / creme / manjericão).

| Prioridade | Ação                                                               |
| ---------- | ------------------------------------------------------------------ |
| P0         | Usar só tokens CSS (`--color-*`); evitar hex soltos novos          |
| P1         | Fotos próprias alinhadas à paleta (quente, comida real)            |
| P1         | Garantir `logo-icon` / `logo-icon-light` em todos os fundos        |
| P1         | Favicon + OG image com o símbolo Top                               |
| P2         | Guia rápido de “pode / não pode” no `docs/identidade/`             |
| P2         | Diferenciar do look genérico creme+terracota com foto e copy local |

**Pronto quando:** header, hero, carrinho e footer usam o mesmo sistema sem improvisos.

---

## 6. Conceitos (estratégia de marca / produto)

**Objetivo:** uma ideia central clara — _sabor que sobe ao topo_ + delivery artesanal.

| Prioridade | Ação                                                                             |
| ---------- | -------------------------------------------------------------------------------- |
| P0         | Fixar proposta de valor em 1 frase no hero (fermentação / forno / 45 min)        |
| P1         | Narrativa única: artesanal **e** rápido (não “gourmet lento” vs “barato rápido”) |
| P1         | Promoções amarradas ao conceito (Terça Top, Combo Família, fidelidade)           |
| P2         | Página/seção de área de entrega e horário como prova de operação real            |
| P2         | Diferencial vs iFood: “peça direto — mesmo sabor, canal próprio”                 |

**Pronto quando:** qualquer visitante resume a marca em uma frase coerente.

---

## 7. Estratégias de desenvolvimento

**Objetivo:** evoluir o MVP estático sem dívida que bloqueie.

| Prioridade | Ação                                                                  |
| ---------- | --------------------------------------------------------------------- |
| P0         | Manter regra: editar `src/typescript`, build → `site/js` — feito      |
| P0         | Não editar `site/js/` à mão — documentado                             |
| P1         | ESLint + Prettier; script `npm run check` — feito                     |
| P1         | Extrair cardápio para `src/typescript/data/menu.ts` — feito           |
| P2         | Self-host fontes críticas / subset — feito (`site/assets/fonts`)      |
| P2         | Checklist pré-deploy — feito (`docs/organizacao/checklist-deploy.md`) |
| Futuro     | Backend (Convex etc.) só quando WhatsApp não escalar                  |

**Pronto quando:** `npm run build && npm run serve` reproduz o site em máquina limpa.

---

## 8. Estrutura e formato de texto

**Objetivo:** hierarquia clara, copy curta, escaneável.

| Prioridade | Ação                                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------- |
| P0         | Manter 1× `h1`; seções com `h2`; cards com `h3`                                                                     |
| P0         | Corrigir ordem: evitar bloco de `h3` (info-strip) antes do primeiro `h2` — usar `h2` visualmente menor ou `p` forte |
| P1         | Eyebrow + título + 1 frase de apoio (padrão já usado — padronizar em todas as seções)                               |
| P1         | Labels de UI em português amigável (já: Clássicas/Especiais/Doces)                                                  |
| P1         | Preços sempre `R$ XX,XX` com padrão `pt-BR`                                                                         |
| P2         | Cortar frases > ~140 caracteres no hero e promo-bar                                                                 |
| P2         | Microcopy do carrinho: “Frete grátis acima de R$ 80” próximo ao total                                               |

**Pronto quando:** headings passam em auditoria de outline sem saltos estranhos.

---

## 9. Fontes e tipografia

**Objetivo:** hierarquia expressiva e legível (Cormorant / Nunito / Bebas).

| Prioridade | Ação                                                               |
| ---------- | ------------------------------------------------------------------ |
| P0         | Manter trio atual; não adicionar 4ª família                        |
| P1         | Escala tipográfica em tokens (`--fs-hero`, `--fs-h2`, `--fs-body`) |
| P1         | H1 mobile ≤ ~2rem–2.4rem (evitar 68px esmagando a dobra)           |
| P1         | `font-display: swap` com fontes self-host — feito                  |
| P2         | Line-height: display ~1.1–1.2; corpo ≥ 1.5                         |
| P2         | Bebas só em promo/números — não em parágrafos longos               |
| P2         | Testar contraste texto branco no hero overlay (WCAG AA)            |

**Pronto quando:** tipografia mobile não empurra CTAs para fora da primeira tela sem necessidade.

---

## 10. UX Design

**Objetivo:** fluxo mental: descobrir → escolher → adicionar → confirmar → WhatsApp.

| Prioridade | Ação                                                                   |
| ---------- | ---------------------------------------------------------------------- |
| P0         | Feedback imediato (toast) ao adicionar — já existe; manter consistente |
| P1         | Indicar item no carrinho a partir do card (estado “no pedido”)         |
| P1         | Filtros com `aria-selected` + foco visível (já parcial)                |
| P1         | Fechar menu/carrinho com `Escape`                                      |
| P2         | Trilha “Como pedir” alinhada ao fluxo real do site                     |
| P2         | Cupom TOPTERCA sugerido no drawer na terça                             |

**Pronto quando:** tarefa “pedir 1 doce média” ≤ 60s em teste moderado.

---

## 11. UI Design

**Objetivo:** componentes consistentes (botões, cards, drawer, filtros).

| Prioridade | Ação                                                                   |
| ---------- | ---------------------------------------------------------------------- |
| P0         | Estados de botão: default / hover / disabled / focus-visible           |
| P1         | Filtros como tabs visuais consistentes (active = tomate)               |
| P1         | Drawer: backdrop + foco preso (focus trap) leve                        |
| P1         | Cards do menu: imagem + título + preço + CTA alinhados na mesma altura |
| P2         | Reduzir “cardização” decorativa onde não há interação                  |
| P2         | Ícones SVG com `currentColor` para herdar tokens                       |

**Pronto quando:** todos os CTAs primários compartilham o mesmo componente visual.

---

## Pacotes de execução sugeridos

| Pacote         | Dimensões                                           | Esforço  |
| -------------- | --------------------------------------------------- | -------- |
| **Lançamento** | SEO + Usabilidade (dados reais) + tipografia mobile | 1–2 dias |
| **Conversão**  | UX + UI + Usabilidade (tamanhos/borda/carrinho)     | 3–5 dias |
| **Marca**      | Layout + Identidade + Conceitos + fontes            | 1 sprint |
| **Engenharia** | Estratégia de dev + SEO técnico (sitemap)           | contínuo |

---

## Ordem recomendada

1. SEO + dados reais (confiança)
2. UX/UI do pedido (tamanhos, carrinho, a11y)
3. Layout/hero + tipografia mobile
4. Identidade com fotos próprias
5. Hardening de desenvolvimento
