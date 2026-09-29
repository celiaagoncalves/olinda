# Olinda — Cerâmica pintada à mão

Site institucional da **Olinda**: montra de peças de cerâmica pintadas à mão e
personalizadas, com pedido de orçamento. Bilingue (Português / Inglês).

Feito com **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS v4** e
**framer-motion**. Site **estático**, publicado no **GitHub Pages**.

---

## Como correr o site no computador

Precisas de ter o [Node.js](https://nodejs.org) instalado (versão 18.18 ou superior).

```bash
npm install      # só na primeira vez (instala tudo)
npm run dev      # arranca o site em modo de desenvolvimento
```

Depois abre **http://localhost:3000** no navegador. O site abre em português;
o inglês está em **/en**.

Outros comandos:

- `npm run build` — gera a versão estática do site na pasta `out/`.

---

## Identidade visual

- **Cores** (definidas em [`src/app/globals.css`](src/app/globals.css)):
  creme, rosa velho, verde água e terracota.
- **Tipografia**: Fraunces (títulos) + Inter (texto), carregadas automaticamente.
- **Logo**: componente [`src/components/Logo.tsx`](src/components/Logo.tsx) e
  versões em SVG em [`public/logo.svg`](public/logo.svg) e o ícone/favicon em
  [`src/app/icon.svg`](src/app/icon.svg).

---

## Como editar o conteúdo (sem programar)

### Textos (PT e EN)
Todo o texto do site está em dois ficheiros:

- Português → [`src/i18n/dictionaries/pt.json`](src/i18n/dictionaries/pt.json)
- Inglês → [`src/i18n/dictionaries/en.json`](src/i18n/dictionaries/en.json)

Basta alterar o texto entre aspas. **Importante:** os dois ficheiros têm de ter
a mesma estrutura (as mesmas "etiquetas"), só muda o texto traduzido.

### Contactos e redes sociais
Email, telefone, WhatsApp, Instagram e localização estão em
[`src/lib/site.ts`](src/lib/site.ts). Muda ali os valores reais.

### Peças da galeria
As peças de exemplo estão em [`src/data/pieces.ts`](src/data/pieces.ts).
Cada peça tem nome e descrição (PT/EN) e uma categoria.

### Fotografias das peças
Por agora cada peça mostra uma **ilustração** nas cores da marca (placeholder).
Para usar fotos reais:

1. Coloca a imagem na pasta [`public/`](public) (ex.: `public/pieces/caneca-flor.jpg`).
2. Em [`src/data/pieces.ts`](src/data/pieces.ts) preenche o campo `image` dessa
   peça: `image: "/pieces/caneca-flor.jpg"`.

Feito isso, a foto aparece automaticamente em vez da ilustração.

---

## Como funcionam os pedidos de orçamento

O site é **estático** (sem servidor), por isso o formulário de contacto **abre o
programa de email do visitante já preenchido** com o pedido — é só carregar em
enviar. Funciona no telemóvel e no computador, sem precisar de contas nem
configuração. Os pedidos chegam ao email definido em
[`src/lib/site.ts`](src/lib/site.ts) (campo `email`).

A página de contacto tem também os **contactos diretos** (email, WhatsApp e
Instagram) — muda esses valores em [`src/lib/site.ts`](src/lib/site.ts).

---

## Publicar no GitHub Pages

O site publica-se **sozinho** a cada alteração, através do GitHub Actions.
Configuração inicial (só uma vez):

1. Envia o código para o GitHub (branch `main`).
2. No GitHub, vai a **Settings → Pages**.
3. Em **Build and deployment → Source**, escolhe **GitHub Actions**.

Pronto. A partir daí, cada vez que fizeres commit para a `main`, o site é
reconstruído e publicado automaticamente. O endereço será:

```
https://<o-teu-utilizador>.github.io/olinda/
```

> **Nota sobre o endereço:** o site fica dentro de `/olinda/` porque é esse o
> nome do repositório. Isso está tratado no [`next.config.ts`](next.config.ts)
> (campo `REPO`). Se um dia usares um **domínio próprio**, muda `REPO` para uma
> string vazia (`""`).

A publicação automática está definida em
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

---

## Estrutura do projeto

```
src/
  app/
    [locale]/            páginas (início, sobre, peças, personalizar, contacto)
    page.tsx             redireciona a raiz para o idioma por defeito (pt)
    icon.svg             favicon
    globals.css          cores, tipografia e estilos base
  components/            peças reutilizáveis (Header, Footer, cartões, secções…)
  data/                  categorias e peças da galeria
  i18n/                  idiomas e textos (dicionários PT/EN)
  lib/                   navegação e dados da marca (contactos)
public/                  logo, .nojekyll e (futuras) fotografias
.github/workflows/       publicação automática no GitHub Pages
```
