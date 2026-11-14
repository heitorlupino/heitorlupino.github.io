// ==========================================
// TEMA CLARO / ESCURO
// esse arquivo é carregado no <head> pra pagina ja abrir
// com o tema certo (sem piscar o tema escuro antes)
// ==========================================

function lerTemaSalvo() {
  // o localStorage pode dar erro em alguns navegadores, por isso o try
  try {
    return localStorage.getItem("tema");
  } catch (e) {
    return null;
  }
}

function salvarTema(tema) {
  try {
    localStorage.setItem("tema", tema);
  } catch (e) {
    // se nao der pra salvar, tudo bem, so nao lembra na proxima vez
  }
}

function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);

  // troca o icone do botao (sol no escuro, lua no claro)
  const icone = document.getElementById("theme-icon");
  if (icone) {
    if (tema === "light") {
      icone.className = "fa-solid fa-moon";
    } else {
      icone.className = "fa-solid fa-sun";
    }
  }
}

// aplica o tema salvo assim que o arquivo carrega
aplicarTema(lerTemaSalvo() || "dark");

// quando a pagina terminar de carregar, liga o botao
document.addEventListener("DOMContentLoaded", function () {
  aplicarTema(lerTemaSalvo() || "dark");

  const botao = document.getElementById("theme-btn");
  if (!botao) {
    return;
  }

  botao.addEventListener("click", function () {
    const atual = document.documentElement.getAttribute("data-theme");
    let novo = "light";
    if (atual === "light") {
      novo = "dark";
    }
    aplicarTema(novo);
    salvarTema(novo);
  });
});
