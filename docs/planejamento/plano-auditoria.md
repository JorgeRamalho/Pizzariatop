# Plano de auditoria

## Escopo

Auditoria completa do site delivery **Pizzaria Top**, cobrindo:

1. Organização do repositório e pastas externas
2. Documentação profissional
3. Varredura Playwright (SEO, UX/UI, responsividade, tipografia, layout)
4. Estratégia de desenvolvimento e próximos passos

## Critérios avaliados

| Critério       | Pergunta-chave                             |
| -------------- | ------------------------------------------ |
| SEO            | Indexável? Compartilhável? Local Business? |
| Usabilidade    | O pedido é óbvio em 3 passos?              |
| Responsividade | Mobile-first real ou só “cabe”?            |
| Layout         | Uma composição clara no 1º viewport?       |
| Identidade     | A marca sobrevive sem a nav?               |
| Tipografia     | Hierarquia legível e expressiva?           |
| UX             | Fluxo mental do usuário até o WhatsApp?    |
| UI             | Tokens, estados, feedback consistentes?    |
| Dev            | Build, pastas e manutenção sustentáveis?   |

## Método

1. Mapear disco + Git + estrutura de arquivos
2. Ler HTML/CSS/TS e README
3. Playwright: desktop 1920, tablet 768, mobile 390
4. Scripts de avaliação (meta, headings, a11y, imagens, overflow)
5. Interações: filtro, carrinho, menu, toast
6. Consolidar scores + roadmap + docs

## Entregáveis

- [x] Reorganização `site/` + `src/` + `docs/`
- [x] Relatório Playwright
- [x] Brand guidelines
- [x] Mapa de pastas externas
- [x] Roadmap priorizado
- [x] Canvas de auditoria no Cursor
