# Plano de pesquisas

Objetivo: embasar decisões de produto, SEO local e UX do delivery com evidências, não só preferência visual.

## Hipóteses a validar

| ID  | Hipótese                                                                 | Método                               | Status              |
| --- | ------------------------------------------------------------------------ | ------------------------------------ | ------------------- |
| H1  | Usuário decide pedir em &lt; 60s se CTA + preço estiverem acima da dobra | Teste de 5 segundos + heat/scroll    | Pendente            |
| H2  | WhatsApp como checkout reduz abandono vs formulário longo                | Benchmark delivery BR                | Em análise          |
| H3  | Fotos reais da cozinha convertem mais que Unsplash                       | A/B ou pesquisa qualitativa          | Pendente            |
| H4  | Cupom na promo-bar aumenta pedidos na terça                              | Contagem de uso `TOPTERCA`           | Pendente            |
| H5  | Filtros de categoria aceleram escolha no mobile                          | Task success (Playwright + usuários) | Parcial (filtro OK) |

## Frentes de pesquisa

### 1. Mercado / concorrência

- Cardápios delivery (iFood, sites próprios de pizzarias locais)
- Padrões de CTA (ligação vs WhatsApp vs carrinho)
- Posicionamento “artesanal + rápido”

### 2. SEO local

- Keywords: “pizza delivery [bairro]”, “pizzaria [cidade]”
- Google Business Profile vs landing
- Schema `Restaurant` / `Menu` / `LocalBusiness`

### 3. Usabilidade

- Tempo até “Adicionar”
- Clareza de tamanhos (hoje só “/ média” no card)
- Persistência do carrinho (hoje some no reload)

### 4. Performance / mídia

- Peso de 15+ imagens Unsplash
- Self-host vs CDN
- `loading="lazy"` já presente; LCP do hero ainda externo

## Fontes consultadas nesta auditoria

- Varredura Playwright em `http://127.0.0.1:5502/html/index.html` (estrutura antiga) e revalidação em `/site/`
- Código-fonte HTML/CSS/TS do repositório
- README e identidade documentada
- Mapa de pastas em `Fron_End/Projetos`

## Próximas pesquisas (prioridade)

1. Substituir telefone/endereço placeholder por dados reais
2. Inventário de keywords locais + meta OG
3. Sessão de usabilidade mobile (menu + carrinho + WhatsApp)
4. Catálogo fotográfico próprio (mínimo 9 pizzas + 1 hero)
