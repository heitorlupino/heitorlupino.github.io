// os dados dos projetos e certificados ficam no arquivo js/dados.js


// ==========================================
// MOSTRAR PROJETOS NA TELA
// ==========================================
const projectsGrid = document.getElementById("projects-grid");

function mostrarProjetos(filtro) {
  projectsGrid.innerHTML = "";

  projetos.forEach(function (projeto) {
    if (filtro !== "todos" && projeto.categoria !== filtro) {
      return;
    }

    let badge = "";
    if (projeto.status !== "") {
      badge = `<span class="badge">${projeto.status}</span>`;
    }

    let techs = "";
    projeto.tecnologias.forEach(function (tech) {
      techs += `<span>${tech}</span>`;
    });

    // o card inteiro é um link pra página do projeto
    projectsGrid.innerHTML += `
      <a href="projeto.html?id=${projeto.id}" class="project-card">
        <div class="project-top">
          <i class="fa-regular fa-folder-open"></i>
          ${badge}
        </div>
        <h3>${projeto.titulo}</h3>
        <p class="project-type">${projeto.tipo}</p>
        <p>${projeto.resumo}</p>
        <div class="project-tech">${techs}</div>
        <span class="project-more">Ver detalhes <i class="fa-solid fa-arrow-right"></i></span>
      </a>
    `;
  });
}

mostrarProjetos("todos");

// botoes de filtro
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    filterBtns.forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");
    mostrarProjetos(btn.dataset.filter);
  });
});


// ==========================================
// MOSTRAR CERTIFICADOS NA TELA
// ==========================================
const certsGrid = document.getElementById("certs-grid");

certificados.forEach(function (cert, index) {
  let botao = "";
  if (cert.imagem !== "") {
    botao = `<button class="cert-btn" onclick="abrirCertificado(${index})">Ver certificado</button>`;
  }

  certsGrid.innerHTML += `
    <div class="cert-card">
      <i class="fa-solid fa-award"></i>
      <h3>${cert.nome}</h3>
      <span class="cert-inst">${cert.instituicao}</span>
      <span class="cert-info">${cert.data}</span>
      ${botao}
    </div>
  `;
});

// modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

function abrirCertificado(index) {
  modalImg.src = certificados[index].imagem;
  modal.classList.add("show");
}

document.getElementById("modal-close").addEventListener("click", function () {
  modal.classList.remove("show");
});

// fechar clicando fora da imagem
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});


// ==========================================
// EFEITO DE DIGITAR O NOME
// ==========================================
const texto = "Heitor Lupino";
const typing = document.getElementById("typing");
let i = 0;

function digitar() {
  if (i < texto.length) {
    typing.textContent += texto.charAt(i);
    i++;
    setTimeout(digitar, 120);
  }
}

digitar();


// ==========================================
// MENU NO CELULAR
// ==========================================
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// fecha o menu quando clica em um link
document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});


// ==========================================
// ANIMACAO QUANDO ROLA A PAGINA
// ==========================================
const elementos = document.querySelectorAll(".section-title, .skill-box, .timeline-item, .cert-card, .contact-card, .about");

elementos.forEach(function (el) {
  el.classList.add("hidden");
});

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

elementos.forEach(function (el) {
  observer.observe(el);
});


// ano do rodape
document.getElementById("ano").textContent = new Date().getFullYear();
