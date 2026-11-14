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
const filterBtns = document.querySelectorAll(".proj-filter");

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

function mostrarCertificados(filtro) {
  certsGrid.innerHTML = "";

  certificados.forEach(function (cert, index) {
    // "Em andamento" é um filtro especial (não é categoria)
    if (filtro === "andamento" && cert.data !== "Em andamento") {
      return;
    }
    if (filtro !== "todos" && filtro !== "andamento" && cert.categoria !== filtro) {
      return;
    }

    let foto = "";
    let botao = "";
    if (cert.imagem !== "") {
      foto = `<img src="${cert.imagem}" alt="${cert.nome}" class="cert-thumb" onclick="abrirCertificado(${index})">`;
      botao = `<button class="cert-btn" onclick="abrirCertificado(${index})">Ver certificado</button>`;
    } else {
      foto = `<div class="cert-thumb cert-thumb-vazio"><i class="fa-solid fa-award"></i></div>`;
    }

    certsGrid.innerHTML += `
      <div class="cert-card">
        ${foto}
        <h3>${cert.nome}</h3>
        <span class="cert-inst">${cert.instituicao}</span>
        <span class="cert-info">${cert.data}</span>
        ${botao}
      </div>
    `;
  });
}

mostrarCertificados("todos");

// botoes de filtro dos certificados
const certFilterBtns = document.querySelectorAll(".cert-filter");

certFilterBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    certFilterBtns.forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");
    mostrarCertificados(btn.dataset.filter);
  });
});

// modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalPdf = document.getElementById("modal-pdf");

function abrirCertificado(index) {
  modalImg.src = certificados[index].imagem;

  // botao de abrir o PDF original (so se tiver)
  if (certificados[index].pdf !== "") {
    modalPdf.href = certificados[index].pdf;
    modalPdf.style.display = "inline-flex";
  } else {
    modalPdf.style.display = "none";
  }

  modal.classList.add("show");
}

document.getElementById("modal-close").addEventListener("click", function () {
  modal.classList.remove("show");
});

// fechar com a tecla ESC
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal.classList.remove("show");
  }
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
// conta só os certificados que já tem imagem (concluídos)
const totalCerts = certificados.filter(function (c) {
  return c.imagem !== "";
}).length;
contar("stat-certs", totalCerts);


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
const elementos = document.querySelectorAll(".section-title, .skill-box, .exp-card, .timeline-item, .contact-card, .about");

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


// ==========================================
// REPOSITORIOS DO GITHUB (usando a API publica)
// ==========================================
const reposGrid = document.getElementById("repos-grid");

// repositorios que nao quero mostrar
const reposEscondidos = ["heitorlupino", "heitorlupino.github.io"];

// descricao pros repositorios que estao sem descricao no github
const descricoesExtras = {
  "Estudos-Python": "Exercícios e materiais do curso Python Impressionador, organizados por módulos.",
  "ChronoMundi": "Museu virtual em VR feito na Unity, com três eras da história para explorar.",
  "ExAulaVictor_RAG": "Exercícios de RAG em Python feitos em aula: embeddings, busca e LLM.",
  "DriveSpot": "Sistema web de gerenciamento de veículos em Python, Flask e MySQL.",
  "Missao-Solidaria": "Código do jogo Jornada do Bem, feito em Flutter e publicado na Play Store.",
  "Exercicios_aula_Tecnologias_Programa-o_Integrada": "Exercícios da disciplina de Tecnologias de Programação Integrada.",
  "curso-git-fdevs": "Exercícios do curso de Git e GitHub.",
  "Loja-Virtual": "Projeto de e-commerce feito nos estudos de front-end.",
  "html-css-js-ts-react": "Exercícios e projetos do curso de Front-end (HTML, CSS, JS, TS e React).",
  "projeto-android": "Site sobre o Android feito no curso de HTML5 e CSS3 do Curso em Vídeo.",
  "projeto-cordel": "Site de cordel feito no curso de HTML5 e CSS3 do Curso em Vídeo.",
  "html-css": "Exercícios de HTML e CSS."
};

// cor de cada linguagem (as mesmas que o github usa)
const coresLinguagem = {
  "Python": "#3572A5",
  "JavaScript": "#f1e05a",
  "TypeScript": "#3178c6",
  "Java": "#b07219",
  "C#": "#178600",
  "HTML": "#e34c26",
  "CSS": "#563d7c",
  "Dart": "#00B4AB",
  "ShaderLab": "#222c37",
  "Jupyter Notebook": "#DA5B0B"
};

async function carregarRepositorios() {
  try {
    const resposta = await fetch("https://api.github.com/users/heitorlupino/repos?sort=pushed&per_page=30");

    if (!resposta.ok) {
      throw new Error("Erro " + resposta.status);
    }

    const repos = await resposta.json();

    // tira os forks e os escondidos e pega so os 6 primeiros
    const lista = repos.filter(function (r) {
      return !r.fork && !reposEscondidos.includes(r.name);
    }).slice(0, 6);

    reposGrid.innerHTML = "";

    lista.forEach(function (repo) {
      let descricao = repo.description;
      if (!descricao) {
        descricao = descricoesExtras[repo.name] || "Sem descrição.";
      }

      let linguagem = "";
      if (repo.language) {
        const cor = coresLinguagem[repo.language] || "#8b949e";
        linguagem = `<span><span class="lang-dot" style="background-color: ${cor}"></span>${repo.language}</span>`;
      }

      // data no formato dd/mm/aaaa
      const data = new Date(repo.pushed_at).toLocaleDateString("pt-BR");

      reposGrid.innerHTML += `
        <a href="${repo.html_url}" target="_blank" class="repo-card">
          <div class="repo-top">
            <i class="fa-regular fa-folder"></i>
            <h3>${repo.name}</h3>
          </div>
          <p>${descricao}</p>
          <div class="repo-info">
            ${linguagem}
            <span><i class="fa-regular fa-star"></i> ${repo.stargazers_count}</span>
            <span><i class="fa-regular fa-clock"></i> ${data}</span>
          </div>
        </a>
      `;
    });
  } catch (erro) {
    // se der erro (sem internet ou limite da API) mostra um aviso
    console.log("Erro ao carregar repositórios:", erro);
    reposGrid.innerHTML = `
      <p class="empty">Não foi possível carregar os repositórios agora.
      <a href="https://github.com/heitorlupino" target="_blank" class="green">Veja direto no GitHub</a>.</p>
    `;
  }
}

carregarRepositorios();


// ano do rodape
document.getElementById("ano").textContent = new Date().getFullYear();
