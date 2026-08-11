# Arquitetura de pastas

## Princípio

Raiz enxuta: apenas entrada do site, configuração e documentação de alto nível. Código-fonte, site publicado e docs detalhadas ficam em pastas dedicadas.

## Mapa

```
Projeto-PizzariaTop/
├── index.html              # Entrada (redireciona para site/) — GitHub Pages
├── package.json            # Scripts e dependências
├── package-lock.json
├── tsconfig.json           # Compilação TypeScript
├── .gitignore
├── README.md               # Visão geral + como rodar
│
├── docs/                   # Planejamento, pesquisas e documentação
│   ├── README.md
│   ├── planejamento/
│   ├── pesquisas/
│   ├── estrutura/
│   ├── organizacao/
│   └── identidade/
│
├── src/                    # Código-fonte (não servir direto)
│   └── typescript/
│       └── main.ts
│
└── site/                   # Conteúdo público do site
    ├── index.html
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js         # Gerado por `npm run build`
    └── assets/
        └── brand/          # Logo, logomarca, favicon
```

## Fluxo de build

```
src/typescript/main.ts  →  (tsc)  →  site/js/main.js
```

| Config    | Valor              |
| --------- | ------------------ |
| `rootDir` | `./src/typescript` |
| `outDir`  | `./site/js`        |

## Responsabilidade por pasta

| Pasta   | Serve no browser?          | Editar no dia a dia?                     |
| ------- | -------------------------- | ---------------------------------------- |
| `site/` | Sim                        | HTML, CSS, assets                        |
| `src/`  | Não                        | TypeScript                               |
| `docs/` | Não                        | Planejamento e docs                      |
| Raiz    | Só `index.html` de entrada | Config (`package.json`, `tsconfig.json`) |

## URLs

- Local: `http://localhost:3000` → redireciona para `/site/index.html`
- Produção (GitHub Pages): `https://jorgeramalho.github.io/Pizzariatop/` → mesmo fluxo via `index.html` raiz
