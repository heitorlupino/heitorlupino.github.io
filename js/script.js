// ==========================================
// DADOS DOS PROJETOS
// pra adicionar um projeto novo é so copiar
// um bloco { } e mudar as informacoes
// categoria: "dados", "jogos" ou "outros"
// ==========================================
const projetos = [
  {
    titulo: "Aplicação com IA Generativa",
    tipo: "Projeto em grupo - Faculdade",
    categoria: "dados",
    descricao: "Aplicação funcional usando IA generativa (LLM) desenvolvida em grupo na disciplina de IA Generativa, com relatório, apresentação e vídeo tutorial sobre uma ferramenta de IA.",
    tecnologias: ["Python", "Pandas", "LLM", "Prompt Engineering"],
    github: "",
    link: "",
    status: "Em andamento"
  },
  {
    titulo: "Estudos de Python e Dados",
    tipo: "Estudo pessoal",
    categoria: "dados",
    descricao: "Exercícios e mini projetos feitos durante o curso Python Impressionador: automações, manipulação de planilhas e análise de dados com Pandas.",
    tecnologias: ["Python", "Pandas", "Jupyter"],
    github: "https://github.com/heitorlupino",
    link: "",
    status: "Em andamento"
  },
  {
    titulo: "ChronoMundi",
    tipo: "Projeto acadêmico - Realidade Virtual",
    categoria: "jogos",
    descricao: "Museu histórico em realidade virtual com três eras (Pré-História, Idade Média e Futuro). Trabalhei no menu de pausa, nas interações em VR, nos textos dos artefatos e em ferramentas para automatizar a montagem das cenas no editor.",
    tecnologias: ["Unity", "C#", "XR Interaction Toolkit", "URP"],
    github: "https://github.com/heitorlupino/ChronoMundi",
    link: "",
    status: ""
  },
  {
    titulo: "Protocolo Omega",
    tipo: "Projeto acadêmico - Jogo FPS",
    categoria: "jogos",
    descricao: "Jogo de tiro em primeira pessoa feito na Unreal Engine 5 usando Blueprints: sistema de tiro e recarga, vida e morte, troca de armas, inimigos com Behavior Tree e animações do personagem.",
    tecnologias: ["Unreal Engine 5", "Blueprints", "Behavior Tree"],
    github: "",
    link: "",
    status: ""
  },
  {
    titulo: "Jogo de Plataforma 2D",
    tipo: "Trabalho individual - Faculdade",
    categoria: "jogos",
    descricao: "Jogo de plataforma 2D desenvolvido individualmente para a disciplina de Desenvolvimento de Jogos Digitais.",
    tecnologias: ["Unity 6", "C#"],
    github: "",
    link: "",
    status: "Em andamento"
  },
  {
    titulo: "Projeto de Rede - Codevale",
    tipo: "Projeto em grupo - Redes",
    categoria: "outros",
    descricao: "Projeto de infraestrutura de rede para uma empresa fictícia (Codevale Tecnologia), feito pela equipe Nexo Consultoria em Redes na disciplina de Redes e Sistemas Distribuídos.",
    tecnologias: ["Redes", "Infraestrutura", "Segurança"],
    github: "",
    link: "",
    status: ""
  },
  {
    titulo: "Projeto Social: Golpes Virtuais",
    tipo: "Projeto de extensão - Coordenador",
    categoria: "outros",
    descricao: "Coordenei o grupo em uma ação no Clube da Terceira Idade de Barra Bonita ensinando idosos a reconhecer golpes virtuais (falso banco, link falso, perfil falso...). Fizemos uma cartilha ilustrada e uma dinâmica \"Será golpe?\" com mais de 30 participantes.",
    tecnologias: ["Segurança Digital", "Educação", "Liderança"],
    github: "",
    link: "",
    status: ""
  },
  {
    titulo: "Drone com Arduino",
    tipo: "Projeto acadêmico - Hardware",
    categoria: "outros",
    descricao: "Montagem de um mini drone com Arduino Nano, giroscópio/acelerômetro MPU-6050, módulo Bluetooth HC-05 e firmware MultiWii, com relatório documentando todas as etapas da montagem.",
    tecnologias: ["Arduino", "C++", "MultiWii", "Eletrônica"],
    github: "",
    link: "",
    status: ""
  }
];

// ==========================================
// DADOS DOS CERTIFICADOS
// pra adicionar: coloca a imagem do certificado
// na pasta assets/certificados e escreve o caminho em "imagem"
// (se nao tiver imagem ainda deixa "")
// ==========================================
const certificados = [
  {
    nome: "Python Impressionador",
    instituicao: "Hashtag Treinamentos",
    data: "Em andamento",
    imagem: ""
  },
  {
    nome: "Construa seu primeiro app com IA",
    instituicao: "DIO - Santander",
    data: "Em andamento",
    imagem: ""
  }
];


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

    // links do github e do site (so aparece se tiver)
    let links = "";
    if (projeto.github !== "") {
      links += `<a href="${projeto.github}" target="_blank" title="Ver código"><i class="fa-brands fa-github"></i></a>`;
    }
    if (projeto.link !== "") {
      links += `<a href="${projeto.link}" target="_blank" title="Ver projeto"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>`;
    }

    let badge = "";
    if (projeto.status !== "") {
      badge = `<span class="badge">${projeto.status}</span>`;
    }

    let techs = "";
    projeto.tecnologias.forEach(function (tech) {
      techs += `<span>${tech}</span>`;
    });

    projectsGrid.innerHTML += `
      <div class="project-card">
        <div class="project-top">
          <i class="fa-regular fa-folder-open"></i>
          <div class="project-links">${badge} ${links}</div>
        </div>
        <h3>${projeto.titulo}</h3>
        <p class="project-type">${projeto.tipo}</p>
        <p>${projeto.descricao}</p>
        <div class="project-tech">${techs}</div>
      </div>
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
