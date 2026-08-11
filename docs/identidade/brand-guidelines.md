# Brand guidelines — Pizzaria Top

**Slogan:** _Sabor que sobe ao topo_

## Conceito

Identidade italiana contemporânea com energia de delivery: tomate (apetite), queijo/ouro (calor), creme (aconchego), manjericão (frescor). A marca deve dominar o primeiro viewport — nome + símbolo + slogan antes do headline promocional.

## Ativos (SVG)

| Arquivo                                 | Uso                              |
| --------------------------------------- | -------------------------------- |
| `site/assets/brand/logo-icon.svg`       | Símbolo (header, hero, carrinho) |
| `site/assets/brand/logo-icon-light.svg` | Versão clara (footer escuro)     |
| `site/assets/brand/logomarca.svg`       | Lockup completo exportável       |
| `site/assets/brand/favicon.svg`         | Favicon                          |

## Cores

| Token                   | Hex       | Papel             |
| ----------------------- | --------- | ----------------- |
| `--color-tomate`        | `#c41e3a` | Primária / CTA    |
| `--color-tomate-dark`   | `#9a1830` | Hover             |
| `--color-queijo`        | `#f4a261` | Calor secundário  |
| `--color-queijo-bright` | `#ffb703` | Destaque          |
| `--color-creme`         | `#fff8f0` | Fundo             |
| `--color-manjericao`    | `#2d6a4f` | Confiança / toast |
| `--color-carvao`        | `#1a1a1a` | Texto             |

## Tipografia

| Papel        | Família            | Observação       |
| ------------ | ------------------ | ---------------- |
| Display / H1 | Cormorant Garamond | Serif expressiva |
| Corpo        | Nunito Sans        | Legibilidade UI  |
| Accent       | Bebas Neue         | Promo / números  |

**Self-host:** `.woff2` em `site/assets/fonts/` + `site/css/fonts.css` (latin/latin-ext, OFL). Sem Google Fonts CDN. Atualizar: `npm run fonts:sync`.

## Tom de voz

- Direto, apetitoso, brasileiro com toque italiano
- CTAs claros: “Ver cardápio”, “Adicionar”, “Enviar pelo WhatsApp”
- Evitar jargão técnico no front

## Nota de diferenciação

A combinação creme + terracotta + serif é comum em layouts genéricos. A diferenciação deve vir do **símbolo Top**, fotografia real da operação e copy local (bairro, horário, WhatsApp real) — não só da paleta.
