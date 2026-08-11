# Identidade visual e design system

**Slogan:** _Sabor que sobe ao topo_

## Arquivos de marca

| Arquivo               | Caminho              | Uso                                                   |
| --------------------- | -------------------- | ----------------------------------------------------- |
| `logo-icon.svg`       | `site/assets/brand/` | Símbolo (fatia + pico “Top”) — header, hero, carrinho |
| `logo-icon-light.svg` | `site/assets/brand/` | Versão para fundo escuro (footer)                     |
| `logomarca.svg`       | `site/assets/brand/` | Lockup exportável (símbolo + nome + slogan)           |
| `favicon.svg`         | `site/assets/brand/` | Ícone do navegador                                    |

## Paleta

| Elemento   | Cor                   | Papel                   |
| ---------- | --------------------- | ----------------------- |
| Tomate     | `#c41e3a`             | Energia, apetite, marca |
| Queijo     | `#f4a261` / `#ffb703` | Calor e destaque        |
| Creme      | `#fff8f0`             | Fundo acolhedor         |
| Manjericão | `#2d6a4f`             | Frescor e confiança     |

## Tipografia

| Uso       | Família            |
| --------- | ------------------ |
| Títulos   | Cormorant Garamond |
| Corpo     | Nunito Sans        |
| Destaques | Bebas Neue         |

Arquivos locais: `site/css/fonts.css` + `site/assets/fonts/*.woff2` (sem CDN).

## Fluxo de informação no site

1. Faixa promocional (cupom **TOPTERCA**)
2. Hero com logomarca e proposta de valor
3. Boxes informativos (entrega, forno, avaliação, frete)
4. Cardápio + showcase artesanal + banner Combo Família
5. Cards promocionais (Terça Top, fidelidade, novidade)
6. Como pedir → CTA WhatsApp → Sobre → Footer

## Tokens no CSS

Os tokens e componentes vivem em `site/css/style.css`. Qualquer mudança de cor/tipo deve ser refletida aqui e neste documento.
