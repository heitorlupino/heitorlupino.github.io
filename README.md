# Portfolio - Heitor Lupino

Meu portfolio pessoal, com informações sobre mim, projetos, formação e certificados.

🔗 **Acesse:** https://heitorlupino.github.io

## Tecnologias

- HTML
- CSS
- JavaScript

## Como adicionar coisas novas

Todos os projetos e certificados ficam no arquivo `js/dados.js`.

**Projeto novo:** adicionar um item na lista `projetos`. Cada projeto ganha uma página própria (`projeto.html?id=...`).

**Imagens e vídeo de um projeto:**
1. Colocar as imagens na pasta `assets/projetos/ID-DO-PROJETO/`
2. No `js/dados.js`, escrever os caminhos em `imagens` (ex: `["assets/projetos/chronomundi/menu.png"]`)
3. Para vídeo, colocar o link do YouTube em `video` (ou o caminho de um arquivo .mp4)

**Certificado novo:**
1. Colocar a imagem do certificado na pasta `assets/certificados/`
2. Adicionar um item na lista `certificados` no `js/dados.js`, com o caminho da imagem (ex: `"assets/certificados/python.png"`)

## Rodar no computador

É só abrir o arquivo `index.html` no navegador.
