# SEO & Config Pack — Edemilson Camilo

Arquivos prontos para Next.js (App Router). Domínio configurado para **https://edemilsoncamilo.com.br**.

## Conteúdo
- `next.config.js` — configuração limpa (sem experimental)
- `app/robots.ts` — gera `/robots.txt` (permite indexação e aponta para o sitemap)
- `app/sitemap.ts` — gera `/sitemap.xml` (rotas principais âncora)
- `public/favicon.ico` — ícone do site (monograma EC)
- *Instrução bônus*: metadados SEO para adicionar no `app/layout.tsx`

## Como aplicar
1. Baixe o zip e extraia na raíz do seu projeto (aceite substituir arquivos).
2. Faça commit e deploy na Vercel (Redeploy com **Clear build cache**).

## Metadados SEO (adicione no seu `app/layout.tsx`)
```ts
export const metadata = {
  title: "Edemilson Camilo | Consórcio Inteligente e Investimentos Patrimoniais",
  description:
    "Assessoria especializada em consórcios e estratégias patrimoniais. Edemilson Camilo ajuda empresários e famílias a construir riqueza com segurança, sem juros e com previsibilidade.",
  metadataBase: new URL("https://edemilsoncamilo.com.br"),
  openGraph: {
    title: "Edemilson Camilo | Estratégia em Consórcios e Investimentos",
    description:
      "Transforme o consórcio em uma ferramenta de crescimento patrimonial. Acesse estratégias de crédito e investimento com segurança.",
    url: "https://edemilsoncamilo.com.br",
    siteName: "Edemilson Camilo",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edemilson Camilo | Consórcio Inteligente",
    description:
      "Consórcio como investimento inteligente — com previsibilidade, sem juros e com acompanhamento especializado.",
  },
};
```
