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
    id: "bot-automacao-python",
    titulo: "Bot de Automação com Python",
    tipo: "Jornada Python - Hashtag Treinamentos",
    categoria: "dados",
    status: "",
    resumo: "Bot que faz o cadastro automático de produtos em um sistema, lendo os dados de um arquivo CSV.",
    descricao: [
      "Projeto feito na Jornada Python da Hashtag Treinamentos, com o professor Lira. A ideia foi usar Python para automatizar uma tarefa repetitiva: cadastrar vários produtos em um sistema web.",
      "O bot abre o navegador, entra na página de login, preenche as credenciais e depois cadastra cada produto usando os dados de uma planilha CSV, tudo sozinho. No vídeo dá pra ver o projeto funcionando."
    ],
    comoFoiFeito: [
      "Uso do PyAutoGUI para controlar o mouse e o teclado",
      "Abertura do navegador e login automático no sistema",
      "Leitura da base de produtos (CSV) com Pandas",
      "Loop que percorre cada linha da tabela e preenche o formulário de cadastro",
      "Testes e ajustes nos tempos de espera entre as ações"
    ],
    tecnologias: ["Python", "PyAutoGUI", "Pandas", "Automação"],
    github: "",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7482454699271643136/",
    imagens: [],
    video: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7482454699271643136"
  },
  {
    id: "cadastro-pessoas-python",
    titulo: "Cadastro de Pessoas em Python",
    tipo: "Exercício - Faculdade",
    categoria: "dados",
    status: "",
    resumo: "Programa que coleta dados de várias pessoas, guarda em uma lista de dicionários e calcula a média de idade.",
    descricao: [
      "Exercício que fiz nos estudos de Ciência da Computação para praticar listas e dicionários em Python.",
      "O programa pede nome, sexo e idade de várias pessoas até o usuário querer parar. No final ele mostra quantas pessoas foram cadastradas, a média de idade e a lista de quem está acima da média."
    ],
    comoFoiFeito: [
      "Cada pessoa é guardada em um dicionário, e todos os dicionários ficam em uma lista",
      "Loop while para cadastrar até o usuário digitar N",
      "Validação das respostas (sexo só M ou F, continuar só S ou N)",
      "Cálculo da média de idade",
      "Exibição das pessoas que estão acima da média"
    ],
    tecnologias: ["Python", "Listas", "Dicionários"],
    github: "",
    link: "",
    imagens: [
      "assets/projetos/python-cadastro/imagem1.jpg",
      "assets/projetos/python-cadastro/imagem2.jpg",
      "assets/projetos/python-cadastro/imagem3.jpg",
      "assets/projetos/python-cadastro/imagem4.jpg",
      "assets/projetos/python-cadastro/imagem5.jpg"
    ],
    video: ""
  },
  {
    id: "jornada-do-bem",
    titulo: "Jornada do Bem",
    tipo: "Jogo mobile - Publicado na Play Store",
    categoria: "jogos",
    status: "",
    resumo: "Jogo educativo para Android com três minijogos sobre empatia e solidariedade, feito em Flutter.",
    descricao: [
      "Jornada do Bem é um jogo para celular criado para inspirar atitudes de empatia, generosidade e solidariedade, principalmente em crianças e jovens. Ele foi publicado na Play Store.",
      "Desenvolvemos o jogo em equipe de março a junho, com orientação dos professores Elvio Gilberto da Silva e Luis Filipe Grael Tinós."
    ],
    comoFoiFeito: [
      "Design das telas e personagens no Figma",
      "Desenvolvimento do jogo em Flutter / Dart",
      "Minijogo 1: montar uma cesta básica escolhendo os alimentos certos",
      "Minijogo 2: separar as roupas boas para doação, tirando as rasgadas ou sujas",
      "Minijogo 3: limpar o parque recolhendo o lixo",
      "Publicação do jogo na Google Play Store"
    ],
    tecnologias: ["Flutter", "Dart", "Figma", "Android"],
    github: "",
    link: "https://lnkd.in/e-Ud9_GD",
    imagens: [
      "assets/projetos/jornada-do-bem/imagem1.jpg",
      "assets/projetos/jornada-do-bem/imagem2.jpg",
      "assets/projetos/jornada-do-bem/imagem3.jpg",
      "assets/projetos/jornada-do-bem/imagem4.jpg",
      "assets/projetos/jornada-do-bem/imagem5.jpg"
    ],
    video: ""
  },
  {
    id: "reciclei",
    titulo: "Reciclei!",
    tipo: "Projeto de extensão - Fábrica de Software",
    categoria: "jogos",
    status: "",
    resumo: "Jogo educacional para computador que ensina o descarte correto do lixo de um jeito divertido.",
    descricao: [
      "Reciclei! é um jogo educacional para computador feito no Projeto de Extensão Fábrica de Software do UNISAGRADO. O objetivo é ensinar o descarte correto de resíduos de forma divertida e desafiadora.",
      "O jogo foi desenvolvido em equipe com tutoria do professor Luis Filipe Grael Tinós e orientação do professor Elvio Gilberto da Silva. No vídeo aparece um pouco da gameplay."
    ],
    comoFoiFeito: [
      "Definição do tema (descarte correto de resíduos) e das regras do jogo",
      "Criação das telas de menu, tutorial e créditos",
      "Desenvolvimento da mecânica de separar cada resíduo na lixeira certa",
      "Testes e apresentação do jogo no projeto de extensão"
    ],
    tecnologias: ["Jogo educacional", "Serious Games", "Trabalho em equipe"],
    github: "",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7214701438134857729/",
    imagens: [],
    video: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7214701438134857729"
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
    titulo: "A Aventura de Pip: Vale dos Slimes",
    tipo: "Jogo de plataforma 2D - Trabalho individual",
    categoria: "jogos",
    status: "",
    resumo: "Jogo de plataforma 2D em pixel art feito na Unity: atravesse o vale, junte moedas, pule nos slimes e chegue na bandeira.",
    descricao: [
      "A Aventura de Pip: Vale dos Slimes é um jogo de plataforma 2D que fiz sozinho como trabalho individual da disciplina de Desenvolvimento de Jogos Digitais, na Unity 6.",
      "O jogador controla o Pip e precisa atravessar o vale juntando moedas, desviando de espinhos e buracos e pulando em cima dos slimes até chegar na bandeira dourada no fim da fase. O jogo tem menu, pausa, tela de game over, tela de vitória e salva o recorde de pontos.",
      "Controles: A/D ou setas para andar, Espaço ou W para pular (segurando pula mais alto), ESC para pausar, R para recomeçar e M para voltar ao menu. Também funciona com controle."
    ],
    comoFoiFeito: [
      "Movimento do jogador com física (Rigidbody2D), aceleração e desaceleração",
      "Pulo com altura variável, coyote time e jump buffer para o controle ficar mais justo",
      "Animações por estados (parado, correndo, pulando, caindo) e efeito de squash & stretch",
      "Slimes que patrulham as plataformas: pular em cima derrota o inimigo, encostar tira uma vida",
      "Moedas, corações de vida extra, espinhos, checkpoint e bandeira de vitória",
      "GameManager com máquina de estados (Menu, Jogando, Pausado, Game Over e Vitória), pontos, vidas, tempo e recorde salvo com PlayerPrefs",
      "HUD com corações, moedas, pontos e tempo, usando fontes pixel art (Press Start 2P e VT323)",
      "Câmera que segue o jogador suavemente, com limites da fase e tremida ao levar dano",
      "Fundo com efeito parallax (montanhas, colinas e nuvens)",
      "Música chiptune e efeitos sonoros 8-bit gerados por código, sem arquivos de áudio",
      "Script de editor que monta a fase inteira a partir de um mapa em texto, escolhendo os blocos de grama e terra automaticamente"
    ],
    tecnologias: ["Unity 6", "C#", "Física 2D", "Pixel Art"],
    github: "",
    link: "",
    imagens: [
      "assets/projetos/jogo-plataforma-2d/imagem1.png",
      "assets/projetos/jogo-plataforma-2d/imagem2.png",
      "assets/projetos/jogo-plataforma-2d/imagem3.png",
      "assets/projetos/jogo-plataforma-2d/mapa-fase1.png",
      "assets/projetos/jogo-plataforma-2d/sprites.png"
    ],
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
    id: "campanha-lgpd",
    titulo: "Campanha sobre a LGPD",
    tipo: "Projeto em grupo - Banco de Dados",
    categoria: "outros",
    status: "",
    resumo: "Série de posts explicando a Lei Geral de Proteção de Dados de forma simples para usuários comuns.",
    descricao: [
      "Na disciplina de Princípios de Banco de Dados, meu grupo estudou a LGPD (Lei Geral de Proteção de Dados) e como as empresas devem cuidar das informações pessoais nos seus sistemas.",
      "Depois criamos uma série de posts para o LinkedIn explicando a lei de um jeito simples: o que ela é, quais são os direitos de quem tem seus dados guardados e por que isso importa."
    ],
    comoFoiFeito: [
      "Estudo da LGPD e de como ela se aplica aos bancos de dados das empresas",
      "Pesquisa sobre medidas de proteção: consentimento, controle de acesso, criptografia e anonimização",
      "Criação dos cards com linguagem simples, pensando em quem não é da área",
      "Publicação da campanha no LinkedIn"
    ],
    tecnologias: ["LGPD", "Banco de Dados", "Segurança da Informação"],
    github: "",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7391891091102334976/",
    imagens: [
      "assets/projetos/lgpd/imagem1.jpg",
      "assets/projetos/lgpd/imagem2.jpg",
      "assets/projetos/lgpd/imagem3.jpg",
      "assets/projetos/lgpd/imagem4.jpg",
      "assets/projetos/lgpd/imagem5.jpg"
    ],
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
  }
];


// COMO ADICIONAR UM CERTIFICADO:
// coloca a imagem na pasta assets/certificados
// e escreve o caminho em "imagem" (se não tiver imagem ainda deixa "")
const certificados = [
  {
    nome: "Fundamentos da IA Moderna: Machine Learning, LLMs, IA Generativa e Agentes",
    instituicao: "DIO - Bradesco",
    data: "Concluído em 28/06/2026 - 2 horas",
    imagem: "assets/certificados/fundamentos-ia-moderna.jpg"
  },
  {
    nome: "Bootcamp Bradesco - GenAI, Dados & Cibersegurança",
    instituicao: "DIO - Bradesco",
    data: "Em andamento",
    imagem: ""
  },
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
  },
  {
    nome: "Formação Front-end - HTML, CSS, JavaScript, React e TypeScript",
    instituicao: "Matheus Battisti",
    data: "Em andamento",
    imagem: ""
  }
];
