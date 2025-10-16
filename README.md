# Site — Edemilson Camilo (Next.js + Tailwind)

Projeto pronto para deploy no Vercel com App Router.

## Como usar

1. **Instalar dependências**
   ```bash
   npm i
   # ou: pnpm i | yarn
   ```

2. **Rodar local**
   ```bash
   npm run dev
   # abrir http://localhost:3000
   ```

3. **Deploy no Vercel**
   - Crie um repositório no GitHub e suba estes arquivos.
   - No Vercel, clique *Add New Project* → importe o repositório.
   - Em *Settings → Domains*, adicione seu domínio e siga as instruções de DNS.
   - SSL é automático.

## Configurações opcionais
- **Analytics**: crie `app/analytics.tsx` e integre Google Analytics/Meta Pixel.
- **Formulário**: configure um endpoint (API Route) em `app/api/contato/route.ts` para envio a e‑mail/CRM (Mailgun, Resend, etc.).
- **Cores/Branding**: edite classes Tailwind no `app/page.tsx`.

---

Feito com Next.js 14 + Tailwind 3.