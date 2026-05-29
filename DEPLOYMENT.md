# Bela 2D — Protocolo 3D GitHub Pages

## Páginas principais

- `index.html`: hub dos materiais do Desafio Jejum Glicêmico 2D.
- `protocolo3d.html`: landing page canônica do Protocolo 3D para compartilhar.
- `Protocolo 3D.html`: cópia preservada com o nome original vindo do ZIP.

## O que foi preparado

- Imagens externas da landing Protocolo 3D foram salvas em `assets/remote/` para reduzir dependência do domínio original e melhorar previsibilidade no GitHub Pages.
- `index.html` ganhou um card destacado apontando para `protocolo3d.html`.
- O botão flutuante que antes apontava para o placeholder vazio `https://wa.me/` agora leva para a seção interna de inscrição (`#inscricao`) até existir um número/checkout definitivo.
- O projeto continua 100% estático: basta servir a raiz do repositório.

## Deploy no GitHub Pages

O repositório está pronto para GitHub Pages, mas **o Pages está desabilitado** para que Luca publique manualmente depois de revisar.

Configuração recomendada quando for publicar:

- Source: `Deploy from a branch`
- Branch: `main`
- Pasta: `/` (root)

URLs esperadas depois da ativação manual:

```text
https://luca007.github.io/bela-2d-protocolo-3d/
https://luca007.github.io/bela-2d-protocolo-3d/protocolo3d.html
```

Repositório oficial:

```text
https://github.com/Luca007/bela-2d-protocolo-3d
```

## Verificação local

```bash
python3 -m http.server 8080
# abrir http://127.0.0.1:8080/protocolo3d.html
```

Critérios de pronto:

- `protocolo3d.html` abre com HTTP 200.
- Console do navegador sem erros/warnings relevantes.
- Assets locais em `assets/` carregam com HTTP 200.
- Repositório sem segredos detectados pelos scans básicos.
