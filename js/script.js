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
// CODIGO DIGITANDO NO TERMINAL DO INICIO
// ==========================================
const linhasCodigo = [
  '<span class="purple">&gt;&gt;&gt;</span> from heitor import Estudante',
  '<span class="purple">&gt;&gt;&gt;</span> eu = Estudante()',
  '<span class="purple">&gt;&gt;&gt;</span> eu.curso',
  '<span class="green">\'Ciência da Computação - UNISAGRADO\'</span>',
  '<span class="purple">&gt;&gt;&gt;</span> eu.estudando',
  '[<span class="green">\'Python\'</span>, <span class="green">\'Pandas\'</span>, <span class="green">\'SQL\'</span>, <span class="green">\'IA Generativa\'</span>]',
  '<span class="purple">&gt;&gt;&gt;</span> eu.procurando_estagio()',
  '<span class="blue">True</span>  <span class="text-light"># bora conversar!</span>'
];

const heroCode = document.getElementById("hero-code");
let linhaAtual = 0;

function mostrarLinha() {
  if (linhaAtual < linhasCodigo.length) {
    heroCode.innerHTML += linhasCodigo[linhaAtual] + "\n";
    linhaAtual++;
    setTimeout(mostrarLinha, 450);
  }
}

setTimeout(mostrarLinha, 1800); // espera o nome terminar de digitar


// ==========================================
// NUMEROS DO INICIO (contando ate o valor)
// ==========================================
function contar(id, valorFinal) {
  const el = document.getElementById(id);
  let n = 0;
  const intervalo = setInterval(function () {
    n++;
    el.textContent = n;
    if (n >= valorFinal) {
      clearInterval(intervalo);
    }
  }, 120);
}

const totalJogos = projetos.filter(function (p) {
  return p.categoria === "jogos";
}).length;

contar("stat-projetos", projetos.length);
contar("stat-jogos", totalJogos);
contar("stat-certs", certificados.length);


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
