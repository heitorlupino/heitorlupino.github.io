// ==========================================
// DADOS DOS PROJETOS E CERTIFICADOS
// esse arquivo é usado pela página inicial e pela página de cada projeto
// ==========================================

// COMO ADICIONAR UM PROJETO:
// copia um bloco { } e muda as informações
// - id: nome curto sem espaço e sem acento (vai no link: projeto.html?id=...)
// - categoria: "dados", "jogos" ou "outros"
// - imagens: coloca as imagens na pasta assets/projetos/ID-DO-PROJETO/
//   e escreve o caminho aqui. ex: "assets/projetos/chronomundi/menu.png"
// - video: link do YouTube ou caminho de um .mp4 (se não tiver deixa "")

const projetos = [
  {
    id: "ia-generativa",
    titulo: "Aplicação com IA Generativa",
    tipo: "Projeto em grupo - Faculdade",
    categoria: "dados",
    status: "Em andamento",
    resumo: "Aplicação funcional usando IA generativa (LLM), desenvolvida em grupo na disciplina de IA Generativa.",
    descricao: [
      "Projeto prático da disciplina de IA Generativa, feito em um grupo de 6 pessoas. O objetivo é criar uma aplicação que funcione de verdade usando IA generativa para resolver um problema.",
      "Além da aplicação, o projeto tem um relatório detalhado, uma apresentação com demonstração ao vivo e um vídeo tutorial de cerca de 10 minutos ensinando a usar uma ferramenta de IA generativa."
    ],
    comoFoiFeito: [
      "Escolha do problema e definição do que a aplicação deveria fazer",
      "Desenvolvimento da aplicação usando um modelo de linguagem (LLM)",
      "Registro dos prompts, diagramas e do processo no relatório",
      "Gravação e edição do vídeo tutorial em grupo",
      "Apresentação oral com demonstração da aplicação"
    ],
    tecnologias: ["Python", "Pandas", "LLM", "Prompt Engineering"],
    github: "",
    link: "",
    imagens: [],
    video: ""
  },
  {
    id: "estudos-python",
    titulo: "Estudos de Python e Dados",
    tipo: "Estudo pessoal",
    categoria: "dados",
    status: "Em andamento",
    resumo: "Exercícios e mini projetos feitos durante o curso Python Impressionador: automações e análise de dados com Pandas.",
    descricao: [
      "Aqui ficam os exercícios e mini projetos que estou fazendo enquanto estudo Python pelo curso Python Impressionador, da Hashtag Treinamentos.",
      "Meu objetivo é ganhar base em Python para trabalhar com análise de dados e depois seguir para Machine Learning e IA."
    ],
    comoFoiFeito: [
      "Lógica de programação e fundamentos de Python",
      "Automação de tarefas e manipulação de planilhas",
      "Leitura, tratamento e análise de dados com Pandas",
      "Criação de gráficos para visualizar os dados"
    ],
    tecnologias: ["Python", "Pandas", "Jupyter"],
    github: "https://github.com/heitorlupino",
    link: "",
    imagens: [],
    video: ""
  },
  {
    id: "chronomundi",
    titulo: "ChronoMundi",
    tipo: "Projeto acadêmico - Realidade Virtual",
    categoria: "jogos",
    status: "",
    resumo: "Museu histórico em realidade virtual com três eras: Pré-História, Idade Média e Futuro.",
    descricao: [
      "ChronoMundi é uma experiência de museu em realidade virtual onde o jogador visita três eras da história: Pré-História, Idade Média e Futuro. Em cada era existem artefatos que o jogador pode ver de perto e ler uma descrição sobre eles.",
      "O projeto foi feito na Unity usando o XR Interaction Toolkit para as interações em VR."
    ],
    comoFoiFeito: [
      "Revisão do código do projeto inteiro para encontrar problemas",
      "Correção do menu de pausa, que não respondia aos cliques (faltava o EventSystem e o GraphicRaycaster)",
      "Ajuste das coroutines para usar tempo sem escala, assim elas continuam funcionando com o jogo pausado",
      "Criação de ferramentas no editor (XRSceneBuilder e ChronoMundiCompleteSetup) para automatizar a montagem das cenas",
      "Escrita dos textos descritivos dos artefatos das três eras",
      "Configuração de materiais PBR com texturas gratuitas no URP"
    ],
    tecnologias: ["Unity 2022.3", "C#", "XR Interaction Toolkit", "URP"],
    github: "https://github.com/heitorlupino/ChronoMundi",
    link: "",
    imagens: [],
    video: ""
  },
  {
    id: "protocolo-omega",
    titulo: "Protocolo Omega",
    tipo: "Projeto acadêmico - Jogo FPS",
    categoria: "jogos",
    status: "",
    resumo: "Jogo de tiro em primeira pessoa feito na Unreal Engine 5 usando Blueprints.",
    descricao: [
      "Protocolo Omega é um jogo de tiro em primeira pessoa (FPS) desenvolvido na Unreal Engine 5 como projeto da faculdade.",
      "Toda a lógica do jogo foi feita com Blueprints, o sistema visual de programação da Unreal."
    ],
    comoFoiFeito: [
      "Sistema de tiro e recarga das armas",
      "Sistema de vida e morte do jogador",
      "Troca de armas usando um enum (E_WeaponType)",
      "Inimigos com inteligência artificial usando Behavior Trees",
      "Armas separadas para primeira e terceira pessoa, mostrando só a certa em cada câmera",
      "Animation Blueprint com State Machine e estado de corrida (Run)"
    ],
    tecnologias: ["Unreal Engine 5", "Blueprints", "Behavior Tree", "Animation Blueprint"],
    github: "",
    link: "",
    imagens: [],
    video: ""
  },
  {
    id: "jogo-plataforma-2d",
    titulo: "Jogo de Plataforma 2D",
    tipo: "Trabalho individual - Faculdade",
    categoria: "jogos",
    status: "Em andamento",
    resumo: "Jogo de plataforma 2D feito individualmente para a disciplina de Desenvolvimento de Jogos Digitais.",
    descricao: [
      "Jogo de plataforma 2D que estou desenvolvendo sozinho como trabalho individual da disciplina de Desenvolvimento de Jogos Digitais.",
      "O jogo está sendo feito na Unity 6 e precisa cumprir todos os requisitos pedidos pelo professor."
    ],
    comoFoiFeito: [
      "Definição do gênero (plataforma 2D) e dos requisitos do trabalho",
      "Movimentação e pulo do personagem",
      "Montagem das fases",
      "Testes e ajustes"
    ],
    tecnologias: ["Unity 6", "C#"],
    github: "",
    link: "",
    imagens: [],
    video: ""
  },
  {
    id: "rede-codevale",
    titulo: "Projeto de Rede - Codevale",
    tipo: "Projeto em grupo - Redes",
    categoria: "outros",
    status: "",
    resumo: "Projeto de infraestrutura de rede para uma empresa fictícia, feito pela equipe Nexo Consultoria em Redes.",
    descricao: [
      "Projeto da disciplina de Redes e Sistemas Distribuídos. Nossa equipe, a Nexo Consultoria em Redes, fez o projeto de infraestrutura de rede da Codevale Tecnologia Ltda., uma empresa fictícia.",
      "Na mesma disciplina também fizemos uma campanha educativa nas redes sociais sobre segurança em redes, usando os dados do projeto."
    ],
    comoFoiFeito: [
      "Levantamento das necessidades da empresa",
      "Planejamento da infraestrutura de rede",
      "Documentação do projeto",
      "Campanha educativa com publicações sobre segurança em redes",
      "Apresentação do projeto para a turma"
    ],
    tecnologias: ["Redes", "Infraestrutura", "Segurança"],
    github: "",
    link: "",
    imagens: [],
    video: ""
  },
  {
    id: "projeto-social",
    titulo: "Projeto Social: Golpes Virtuais",
    tipo: "Projeto de extensão - Coordenador",
    categoria: "outros",
    status: "",
    resumo: "Ação no Clube da Terceira Idade de Barra Bonita ensinando idosos a reconhecer golpes virtuais.",
    descricao: [
      "Projeto social da faculdade sobre prevenção de golpes virtuais e segurança digital para idosos. Eu fui o coordenador do grupo.",
      "A ação aconteceu no Clube da Terceira Idade de Barra Bonita, no dia 28/10/2026, e teve mais de 30 idosos participando."
    ],
    comoFoiFeito: [
      "Contato com o Clube e carta de apresentação assinada pelo presidente",
      "Criação de uma cartilha ilustrada de 4 páginas com 5 golpes comuns: falso familiar, falso banco, link falso, falsa promoção e perfil falso",
      "Apresentação de 1 hora no Clube usando a TV do local",
      "Dinâmica \"Será golpe?\", onde os idosos acertaram todas as situações",
      "Entrega de 30 cartilhas impressas e relatório final do projeto"
    ],
    tecnologias: ["Segurança Digital", "Educação", "Liderança"],
    github: "",
    link: "",
    imagens: [],
    video: ""
  },
  {
    id: "drone-arduino",
    titulo: "Drone com Arduino",
    tipo: "Projeto acadêmico - Hardware",
    categoria: "outros",
    status: "",
    resumo: "Montagem de um mini drone com Arduino Nano, sensor MPU-6050 e firmware MultiWii.",
    descricao: [
      "Projeto da faculdade em que montamos um mini drone do zero usando Arduino.",
      "Toda a montagem foi documentada em um relatório com fotos de cada etapa."
    ],
    comoFoiFeito: [
      "Arduino Nano como controlador de voo",
      "Sensor MPU-6050 (giroscópio e acelerômetro) para estabilizar o drone",
      "Módulo Bluetooth HC-05 para comunicação",
      "Driver DRV8833 e motores coreless 8520",
      "Bateria LiPo de 750mAh",
      "Firmware MultiWii",
      "Relatório com 11 fotos da montagem em ordem"
    ],
    tecnologias: ["Arduino", "C++", "MultiWii", "Eletrônica"],
    github: "",
    link: "",
    imagens: [],
    video: ""
  }
];


// COMO ADICIONAR UM CERTIFICADO:
// coloca a imagem na pasta assets/certificados
// e escreve o caminho em "imagem" (se não tiver imagem ainda deixa "")
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
