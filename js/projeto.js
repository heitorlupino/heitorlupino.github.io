// ==========================================
// PAGINA DE UM PROJETO
// pega o id que vem no link (projeto.html?id=chronomundi)
// e procura o projeto na lista do dados.js
// ==========================================

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const projeto = projetos.find(function (p) {
  return p.id === id;
});

const area = document.getElementById("projeto");

if (!projeto) {
  // se o id não existir mostra uma mensagem
  area.innerHTML = `
    <div class="not-found">
      <h1>Projeto não encontrado :(</h1>
      <p>Volte para a página inicial e escolha um projeto.</p>
    </div>
  `;
} else {
  document.title = projeto.titulo + " | Heitor Lupino";
  mostrarProjeto();
}


function mostrarProjeto() {
  // tecnologias
  let techs = "";
  projeto.tecnologias.forEach(function (tech) {
    techs += `<li>${tech}</li>`;
  });

  // status
  let badge = "";
  if (projeto.status !== "") {
    badge = `<span class="badge">${projeto.status}</span>`;
  }

  // botoes (github e site)
  let botoes = "";
  if (projeto.github !== "") {
    botoes += `<a href="${projeto.github}" target="_blank" class="btn btn-outline"><i class="fa-brands fa-github"></i> Ver código</a>`;
  }
  if (projeto.link !== "") {
    botoes += `<a href="${projeto.link}" target="_blank" class="btn btn-primary"><i class="fa-solid fa-arrow-up-right-from-square"></i> Ver projeto</a>`;
  }

  // paragrafos da descricao
  let descricao = "";
  projeto.descricao.forEach(function (paragrafo) {
    descricao += `<p>${paragrafo}</p>`;
  });

  // etapas de como foi feito
  let etapas = "";
  projeto.comoFoiFeito.forEach(function (etapa) {
    etapas += `<li>${etapa}</li>`;
  });

  area.innerHTML = `
    <div class="project-header">
      <p class="project-type">${projeto.tipo} ${badge}</p>
      <h1>${projeto.titulo}</h1>
      <ul class="tags">${techs}</ul>
      <div class="hero-buttons">${botoes}</div>
    </div>

    ${montarVideo()}

    <section class="project-section">
      <h2 class="section-title"><span class="green">#</span> Sobre o projeto</h2>
      ${descricao}
    </section>

    <section class="project-section">
      <h2 class="section-title"><span class="green">#</span> Como foi feito</h2>
      <ul class="steps">${etapas}</ul>
    </section>

    ${montarResultados()}

    ${montarGaleria()}
  `;

  ativarGaleria();
}


// video: aceita link do youtube ou arquivo .mp4
function montarVideo() {
  if (projeto.video === "") {
    return "";
  }

  let player = "";

  if (projeto.video.includes("linkedin.com/embed")) {
    // post do linkedin com o video
    return `
      <section class="project-section">
        <h2 class="section-title"><span class="green">#</span> Vídeo</h2>
        <div class="video-box linkedin-box">
          <iframe src="${projeto.video}" title="Vídeo do projeto no LinkedIn" allowfullscreen></iframe>
        </div>
      </section>
    `;
  }

  if (projeto.video.includes("youtube.com") || projeto.video.includes("youtu.be")) {
    // pega o codigo do video no link do youtube
    let codigo = "";
    if (projeto.video.includes("youtu.be/")) {
      codigo = projeto.video.split("youtu.be/")[1].split("?")[0];
    } else {
      codigo = new URL(projeto.video).searchParams.get("v");
    }
    player = `<iframe src="https://www.youtube.com/embed/${codigo}" title="Vídeo do projeto" allowfullscreen></iframe>`;
  } else {
    player = `<video src="${projeto.video}" controls></video>`;
  }

  return `
    <section class="project-section">
      <h2 class="section-title"><span class="green">#</span> Vídeo</h2>
      <div class="video-box">${player}</div>
    </section>
  `;
}


// resultados (só aparece se o projeto tiver)
function montarResultados() {
  if (!projeto.resultados || projeto.resultados.length === 0) {
    return "";
  }

  let itens = "";
  projeto.resultados.forEach(function (r) {
    itens += `<div class="result-card"><i class="fa-solid fa-circle-check"></i> ${r}</div>`;
  });

  return `
    <section class="project-section">
      <h2 class="section-title"><span class="green">#</span> Resultados</h2>
      <div class="results">${itens}</div>
    </section>
  `;
}


function montarGaleria() {
  // sem imagens a seção nem aparece
  if (projeto.imagens.length === 0) {
    return "";
  }

  let imgs = "";
  projeto.imagens.forEach(function (img) {
    imgs += `<img src="${img}" alt="${projeto.titulo}" class="gallery-img">`;
  });

  return `
    <section class="project-section">
      <h2 class="section-title"><span class="green">#</span> Imagens</h2>
      <div class="gallery">${imgs}</div>
    </section>
  `;
}


// clicar na imagem abre ela grande
function ativarGaleria() {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  document.querySelectorAll(".gallery-img").forEach(function (img) {
    img.addEventListener("click", function () {
      modalImg.src = img.src;
      modal.classList.add("show");
    });
  });

  document.getElementById("modal-close").addEventListener("click", function () {
    modal.classList.remove("show");
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
}


// menu no celular
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// ano do rodape
document.getElementById("ano").textContent = new Date().getFullYear();
