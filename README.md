# Portfólio — Arthur Guilherme Gomes da Silva

Portfólio pessoal adaptado a partir do projeto `Deep6890/deep-s_portfolio`, preservando sua direção visual minimalista, a navegação em páginas, as animações, o tema claro/escuro e os cartões de projetos.

## Conteúdo

- Perfil profissional e currículo em PDF.
- Projetos pessoais com status de desenvolvimento.
- Competências técnicas e administrativas.
- Experiência profissional em almoxarifado, logística e rotinas administrativas.
- Formação e cursos informados no currículo.
- Calendário público de contribuições do GitHub.

## Executar localmente

Requisitos: Node.js 20.19+ ou 22.12+ e npm.

```bash
npm ci
npm run dev
```

Abra a URL apresentada pelo Vite (normalmente `http://localhost:5173`).

Para validar a versão de produção:

```bash
npm run build
npm run preview
```

## Onde personalizar as informações

- `src/data/centralData.js`: nome, e-mail, links e textos da página inicial.
- `src/data/projectsData.js`: descrições, tecnologias, links e status dos projetos.
- `src/data/skillsData.js`: competências e ferramentas.
- `src/data/achievementsData.js`: formação e cursos.
- `src/pages/Experience.jsx`: experiências profissionais.

## Atualizar status dos projetos

No arquivo `src/data/projectsData.js`, altere o campo `status` de cada projeto, por exemplo, para `Em desenvolvimento`, `Em evolução` ou `Concluído` quando isso refletir o estado real. Só marque um projeto como concluído depois que estiver pronto para ser apresentado dessa forma.

## Publicação

O projeto pode ser importado no Vercel como um projeto Vite, usando `npm run build` e diretório de saída `dist`.

Para GitHub Pages, o `vite.config.js` usa `/meu-portfolio/` por padrão quando `GITHUB_PAGES=true`. Se o repositório tiver outro nome, defina `GITHUB_PAGES_BASE` com o caminho correspondente. Exemplo: `GITHUB_PAGES_BASE=/portfolio/`.

O pacote entregue não contém o diretório `.git` do repositório de origem. Configure seu próprio repositório remoto antes de publicar.

## Nota sobre a base visual

Este projeto é uma adaptação pessoal. Confira e cumpra os termos da licença do projeto original antes de redistribuir o código.
