import type { NextConfig } from "next";

// Nome do repositório no GitHub — o site publicado fica em
// https://<utilizador>.github.io/<repo>/ , por isso precisa deste "basePath".
// Se um dia usares um domínio próprio, muda REPO para "" (string vazia).
const REPO = "olinda";

// A variável GITHUB_PAGES é definida no workflow de publicação.
// Em desenvolvimento (npm run dev) fica sem basePath, para o site abrir em "/".
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export", // gera um site estático na pasta "out/"
  reactStrictMode: true,
  trailingSlash: true, // gera .../pagina/index.html (funciona melhor no GitHub Pages)
  images: { unoptimized: true }, // necessário no export estático
  basePath: isPages ? `/${REPO}` : undefined,
};

export default nextConfig;
