# Pizzaria Top — Delivery

Site de delivery da **Pizzaria Top** com identidade visual italiana contemporânea.

## Estrutura de pastas

```
Projeto-PizzariaTop/
├── assets/brand/       # Logo, logomarca e favicon (SVG)
├── html/
│   └── index.html      # Página principal
├── css/
│   └── style.css       # Estilos e design system
├── js/
│   └── main.js         # JavaScript compilado (gerado pelo TypeScript)
├── typescript/
│   └── main.ts         # Código-fonte TypeScript
├── tsconfig.json
└── package.json
```

## Identidade visual

**Slogan:** *Sabor que sobe ao topo*

| Arquivo | Uso |
|---------|-----|
| `logo-icon.svg` | Símbolo (fatia + pico “Top”) — header, hero, carrinho |
| `logo-icon-light.svg` | Versão para fundo escuro (footer) |
| `logomarca.svg` | Lockup exportável (símbolo + nome + slogan) |
| `favicon.svg` | Ícone do navegador |

| Elemento | Escolha |
|----------|---------|
| **Tomate** | `#c41e3a` — energia, apetite, marca |
| **Queijo** | `#f4a261` / `#ffb703` — calor e destaque |
| **Creme** | `#fff8f0` — fundo acolhedor |
| **Manjericão** | `#2d6a4f` — frescor e confiança |
| **Títulos** | Cormorant Garamond |
| **Corpo** | Nunito Sans |
| **Destaques** | Bebas Neue |

### Fluxo de informação no site

1. Faixa promocional (cupom **TOPTERCA**)
2. Hero com logomarca e proposta de valor
3. Boxes informativos (entrega, forno, avaliação, frete)
4. Cardápio + showcase artesanal + banner Combo Família
5. Cards promocionais (Terça Top, fidelidade, novidade)
6. Como pedir → CTA WhatsApp → Sobre → Footer

## Como rodar

1. Instale dependências e compile o TypeScript:

```bash
npm install
npm run build
```

2. Abra `html/index.html` no navegador (Live Server no VS Code/Cursor recomendado).

3. Ao editar `typescript/main.ts`, rode `npm run build` ou `npm run watch`.

## Funcionalidades

- Cardápio com filtros (clássicas, especiais, doces)
- Carrinho lateral com total
- Pedido via WhatsApp
- Layout responsivo e menu mobile
