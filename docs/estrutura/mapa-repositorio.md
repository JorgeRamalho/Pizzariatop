# Mapa do repositório

## Estrutura alvo (pós-organização)

```
Projeto-PizzariaTop/                 ← raiz do Git / GitHub Pages
├── index.html                       ← redirect → site/
├── package.json                     ← scripts npm (build, watch, serve)
├── package-lock.json
├── tsconfig.json                    ← src/typescript → site/js
├── README.md                        ← visão geral do produto
├── .gitignore
│
├── docs/                            ← documentação profissional
│   ├── README.md
│   ├── auditoria/
│   ├── estrutura/
│   ├── identidade/
│   ├── organizacao/
│   ├── planejamento/
│   └── pesquisas/
│
├── site/                            ← artefatos publicados (estático)
│   ├── index.html                   ← página principal
│   ├── assets/brand/                ← SVG de marca
│   ├── css/style.css                ← design system
│   └── js/main.js                   ← JS compilado (não editar à mão)
│
└── src/
    └── typescript/
        └── main.ts                  ← código-fonte (editar aqui)
```

## Responsabilidade por pasta

| Pasta   | Papel                                 | Editável?                            |
| ------- | ------------------------------------- | ------------------------------------ |
| `site/` | Entrega estática (HTML/CSS/JS/assets) | HTML/CSS/assets sim; `js/` via build |
| `src/`  | Fonte TypeScript                      | Sim                                  |
| `docs/` | Documentação e auditoria              | Sim                                  |
| raiz    | Config, redirect, README              | Sim                                  |

## URLs locais

| Servidor              | URL recomendada                                    |
| --------------------- | -------------------------------------------------- |
| Live Server / `serve` | `http://127.0.0.1:<porta>/site/` (com barra final) |
| Redirect raiz         | `http://127.0.0.1:<porta>/` → `site/index.html`    |
| Produção              | https://jorgeramalho.github.io/Pizzariatop/        |

> **Atenção:** abrir `/site` sem barra final pode quebrar caminhos relativos (`css/`, `assets/`, `js/`) em alguns servidores estáticos.

## Migração (antes → depois)

| Antes             | Depois            |
| ----------------- | ----------------- |
| `html/index.html` | `site/index.html` |
| `css/`            | `site/css/`       |
| `js/`             | `site/js/`        |
| `assets/`         | `site/assets/`    |
| `typescript/`     | `src/typescript/` |
