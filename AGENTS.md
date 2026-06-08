# AGENTS.md — Bela 2D Protocolo 3D

Este repositório é a landing page estática do **Protocolo 3D · Isabela Clerot**, publicada pelo GitHub Pages.

## Escopo

- URL atual do GitHub Pages: https://luca007.github.io/bela-2d-protocolo-3d/
- Fonte do Pages: branch `main`, pasta `/`.
- Arquivo principal: `index.html`.
- Imagens/recursos: `assets/` e `assets/remote/`.
- Não há build pipeline: a página é HTML/CSS/JS estático.

## Regras para alterações do Sascha / Hermes

1. Responder em português.
2. Antes de alterar, identificar se a solicitação é de:
   - copy/texto;
   - preço/CTA/links;
   - layout visual;
   - imagens/assets;
   - SEO/metadados;
   - publicação/rollback.
3. Alterações normais devem ficar restritas a `index.html`, `assets/`, `.nojekyll` e arquivos de documentação.
4. Não mexer em `.git/` nem substituir imagens sem confirmar qual asset deve ser trocado.
5. Antes de publicar no GitHub Pages, sempre rodar validação mínima:
   - `git status --short`
   - checagem de HTML/CSS/links relevantes, conforme a alteração;
   - se possível, servir localmente com `python3 -m http.server 8000` e testar a página.
6. Commits devem ser pequenos e descritivos, por exemplo:
   - `copy: ajustar CTA da oferta`
   - `style: refinar hero da página de vendas`
   - `fix: corrigir link do checkout`
7. Publicação acontece com `git push origin main`; pedir confirmação explícita antes de publicar mudanças que alterem a página ao vivo.

## Comandos úteis

```bash
cd /root/work/bela-2d-protocolo-3d
git status --short --branch
python3 -m http.server 8000
```

Depois de publicar, verificar:

```bash
gh api repos/Luca007/bela-2d-protocolo-3d/pages
```
