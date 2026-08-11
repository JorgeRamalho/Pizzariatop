# Mapeamento de pastas externas à raiz

Este documento posiciona o **Projeto-PizzariaTop** no ecossistema local do desenvolvedor e nos destinos de publicação.

## Hierarquia no disco

```
J:\area de trabalho\
└── Fron_End\
    ├── Arquivos\                    ← material auxiliar (fora dos projetos Git)
    └── Projetos\                    ← portfólio de projetos front-end
        ├── Projeto-PizzariaTop\     ← este repositório (raiz Git)
        ├── Projeto-PadocaCafe\
        ├── Projeto-Myfood\
        ├── Projeto-PetShop\
        ├── Projeto-Vivaimobiliaria\
        └── … (demais Projetos-*)
```

## Classificação das pastas externas

| Local                             | Relação com Pizzaria Top                           | Ação recomendada                                 |
| --------------------------------- | -------------------------------------------------- | ------------------------------------------------ |
| `Fron_End/Projetos/`              | Irmãos de portfólio (mesmo padrão de nomenclatura) | Manter isolados; não misturar assets             |
| `Fron_End/Arquivos/`              | Arquivos soltos / referências                      | Não versionar dentro deste repo                  |
| GitHub `JorgeRamalho/Pizzariatop` | Remoto oficial                                     | `origin`                                         |
| GitHub Pages                      | Hosting de `site/` via redirect na raiz            | URL canônica do README                           |
| Domínio `pizzariatop.netifly.app` | **Inválido** (typo Netlify)                        | Não usar — risco de phishing/ads                 |
| Unsplash CDN                      | Imagens de conteúdo (runtime)                      | Dependência externa; planejar hospedagem própria |
| Google Fonts                      | ~~Tipografia runtime~~                             | Removido — fontes em `site/assets/fonts/`        |

## Projetos irmãos relevantes (food / delivery)

Úteis como referência de padrões do próprio portfólio:

- `Projeto-PadocaCafe` — food service local
- `Projeto-Myfood` — food / delivery
- `Projeto-PetShop` — e-commerce leve (carrinho / catálogo)

Não há dependência de código entre eles. Cada pasta é um repositório (ou projeto) independente.

## Fronteiras do repositório

O Git deste projeto **não deve** incluir:

- pastas irmãs em `Projetos/`
- conteúdo de `Fron_End/Arquivos/`
- `node_modules/` (já no `.gitignore`)
- credenciais, `.env` ou chaves de API

Tudo o que for marca, página e docs do delivery fica **dentro** de `Projeto-PizzariaTop/`.
