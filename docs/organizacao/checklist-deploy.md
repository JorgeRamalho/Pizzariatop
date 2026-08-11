# Checklist pré-deploy

Use antes de publicar no GitHub Pages.

## Build e qualidade

- [ ] `npm install`
- [ ] `npm run check` (typecheck + lint + prettier)
- [ ] `npm run build`
- [ ] Abrir `http://localhost:3000/site/` e validar cardápio / carrinho / WhatsApp

## Conteúdo

- [ ] Telefone WhatsApp real em `src/typescript/data/menu.ts` (`WHATSAPP_NUMBER`)
- [ ] Telefone e endereço reais no HTML (`site/index.html`)
- [ ] Links Instagram / iFood válidos
- [ ] Cupom e preços atualizados

## SEO técnico

- [ ] `robots.txt` e `sitemap.xml` na raiz do repositório
- [ ] Canonical / Open Graph apontando para a URL de produção (quando implementados)
- [ ] Favicon carregando em `/site/`

## Publicação

- [ ] Commit apenas de fontes + `site/` gerado necessário
- [ ] Push para `main`
- [ ] Conferir https://jorgeramalho.github.io/Pizzariatop/
- [ ] Não usar o domínio `pizzariatop.netifly.app`

## Regra de ouro

Editar TypeScript em `src/typescript/`. **Não** editar `site/js/` à mão — é saída do `tsc`.
