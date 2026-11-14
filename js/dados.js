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
    tipo: "Projeto em grupo - Disciplina de IA Generativa",
    categoria: "dados",
    status: "Em andamento",
    resumo: "Aplicação funcional com um modelo de linguagem (LLM), feita em grupo de 6 pessoas, com relatório, apresentação e vídeo tutorial.",
    descricao: [
      "Projeto prático da disciplina de IA Generativa, feito em um grupo de 6 pessoas. O desafio é escolher um problema real e criar uma aplicação que funcione de verdade usando IA generativa para resolvê-lo.",
      "Por que esse projeto é importante pra mim? Ele junta as duas coisas que mais estou estudando agora: Python para dados e modelos de linguagem. Além de programar, o grupo precisa explicar como a IA foi usada em cada etapa, mostrando os prompts, os diagramas e uma visão crítica sobre os resultados.",
      "A entrega tem duas partes: a aplicação com código-fonte, relatório e apresentação com demonstração ao vivo, e um vídeo tutorial de cerca de 10 minutos ensinando a usar uma ferramenta de IA generativa."
    ],
    comoFoiFeito: [
      "Escolha do problema e definição do que a aplicação precisa resolver",
      "Desenvolvimento em Python usando um modelo de linguagem (LLM)",
      "Registro dos prompts, diagramas e decisões no relatório, com visão crítica sobre o uso da IA",
      "Gravação e edição do vídeo tutorial em grupo",
      "Apresentação oral com demonstração da aplicação funcionando"
    ],
    resultados: [
      "Entrega prevista para 19/11/2026",
      "Trabalho em equipe de 6 pessoas com divisão de tarefas",
      "Prática real com LLMs, prompts e Python"
    ],
    tecnologias: ["Python", "LLM", "Prompt Engineering"],
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
    resumo: "Bot que faz login em um sistema e cadastra produtos sozinho, lendo os dados de uma base em CSV.",
    descricao: [
      "Projeto feito na Jornada Python da Hashtag Treinamentos, com o professor João Paulo Rodrigues de Lira. A ideia foi usar Python para automatizar uma tarefa repetitiva e chata: cadastrar dezenas de produtos, um por um, em um sistema web.",
      "Por que automatizar? Em muitas empresas, alguém passa horas copiando dados de uma planilha para um sistema. Com algumas linhas de Python, o computador faz esse trabalho sozinho, sem erro de digitação e muito mais rápido.",
      "O bot abre o navegador, entra na página de login, preenche as credenciais e depois percorre toda a base de produtos cadastrando cada item. No vídeo dá pra ver o projeto funcionando do começo ao fim."
    ],
    comoFoiFeito: [
      "Uso do PyAutoGUI para controlar o mouse e o teclado",
      "Abertura do navegador e login automático no sistema",
      "Leitura da base de produtos (arquivo CSV) com Pandas",
      "Loop que percorre cada linha da tabela e preenche todos os campos do formulário",
      "Pausas entre as ações para o sistema ter tempo de carregar",
      "Testes e ajustes até o cadastro rodar do início ao fim sem intervenção"
    ],
    resultados: [
      "Todos os produtos da base cadastrados automaticamente",
      "Primeiro contato prático com automação de processos (RPA)",
      "Projeto publicado no LinkedIn com vídeo do bot funcionando"
    ],
    tecnologias: ["Python", "PyAutoGUI", "Pandas", "Automação"],
    github: "",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7482454699271643136/",
    imagens: [],
    video: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7482454699271643136"
  },
  {
    id: "rag-python",
    titulo: "Assistente com RAG em Python",
    tipo: "Aula prática - Prof. Victor",
    categoria: "dados",
    status: "",
    resumo: "Sequência de 6 exercícios feitos em sala de aula com o professor Victor, montando passo a passo um assistente que responde com base em documentos.",
    descricao: [
      "RAG (Retrieval-Augmented Generation) é a técnica usada para fazer um modelo de linguagem responder com base em documentos específicos, em vez de inventar respostas. Esses exercícios foram desenvolvidos em sala de aula pelo professor Victor, e a turma acompanhou a construção da técnica uma etapa por vez.",
      "Por que isso é útil? Empresas têm regulamentos, manuais e políticas que um chatbot comum não conhece. Com RAG, o assistente busca o trecho certo do documento e usa esse trecho para responder. Para testar, foi usado o regulamento interno de RH de uma empresa fictícia.",
      "No último exercício, as etapas se juntam em um assistente completo: ele lê o documento, divide em partes, transforma em vetores, encontra o trecho mais parecido com a pergunta e manda para o LLM gerar a resposta."
    ],
    comoFoiFeito: [
      "Exercício 1: leitura de texto de arquivos TXT e PDF (pypdf)",
      "Exercício 2: divisão do texto em pedaços menores (chunks)",
      "Exercício 3: geração de embeddings com Sentence Transformers (modelo all-MiniLM-L6-v2)",
      "Exercício 4: busca do trecho mais relevante usando similaridade de cosseno com NumPy",
      "Exercício 5: envio da pergunta e do contexto para um LLM pela API da Groq",
      "Exercício 6: assistente completo, da ingestão do documento até a resposta",
      "Chave da API guardada em arquivo .env com python-dotenv"
    ],
    resultados: [
      "Assistente que responde perguntas sobre o regulamento usando só o conteúdo do documento",
      "Contato prático com embeddings, busca vetorial e LLMs em sala de aula"
    ],
    tecnologias: ["Python", "RAG", "Embeddings", "NumPy", "Groq / LLM"],
    github: "https://github.com/heitorlupino/ExAulaVictor_RAG",
    link: "",
    imagens: [],
    video: ""
  },
  {
    id: "drivespot",
    titulo: "DriveSpot",
    tipo: "Projeto em grupo - Aplicações Digitais",
    categoria: "dados",
    status: "",
    resumo: "Sistema web para gerenciar veículos, marcas e categorias, com login, filtros e relatórios, feito em Python, Flask e MySQL.",
    descricao: [
      "DriveSpot é uma aplicação web para cadastrar e organizar informações de veículos, desenvolvida em grupo para a disciplina Aplicações Digitais: Planejamento e Produção.",
      "O objetivo foi juntar programação, banco de dados relacional e boas práticas em um sistema completo: o usuário cria uma conta, faz login e consegue cadastrar, editar, buscar e remover veículos, além de gerar relatórios sobre a frota.",
      "O projeto foi organizado em camadas: as rotas da interface web ficam separadas dos serviços com as regras de negócio e dos repositórios que conversam com o banco de dados."
    ],
    comoFoiFeito: [
      "Modelagem do banco de dados MySQL com tabelas de usuários, veículos, marcas e categorias",
      "Repositórios em Python para cada tabela, com todas as operações de CRUD",
      "Camada de serviços com as regras de cadastro, busca, edição e relatório",
      "Interface web com Flask: telas de cadastro, login, tela inicial, editar, remover e relatório",
      "Login obrigatório para as telas do sistema e upload da foto de cada veículo",
      "Filtros por marca, categoria, ano e preço, e relatório com quantidade por categoria e preço médio",
      "Validações e tratamento de erros nas entradas do usuário",
      "Configurações do banco em arquivo .env"
    ],
    resultados: [
      "Sistema web funcionando com CRUD completo",
      "Mais de 20 veículos cadastrados para teste, com fotos",
      "Código separado em camadas (rotas, serviços e banco de dados)"
    ],
    tecnologias: ["Python", "Flask", "MySQL", "SQL", "HTML / CSS"],
    github: "https://github.com/heitorlupino/DriveSpot",
    link: "",
    imagens: [],
    video: ""
  },
  {
    id: "cadastro-pessoas-python",
    titulo: "Cadastro de Pessoas em Python",
    tipo: "Exercício - Estudos de Python",
    categoria: "dados",
    status: "",
    resumo: "Programa que coleta dados de várias pessoas, guarda em uma lista de dicionários e calcula a média de idade.",
    descricao: [
      "Exercício que fiz nos meus estudos de Python para praticar listas e dicionários, que são a base para trabalhar com dados depois em bibliotecas como o Pandas.",
      "O programa pergunta nome, sexo e idade de várias pessoas até o usuário decidir parar. No final ele mostra quantas pessoas foram cadastradas, a média de idade, as mulheres cadastradas e a lista de quem está acima da média.",
      "Esse e outros exercícios estão no meu repositório Estudos-Python, organizado pelos módulos do curso Python Impressionador (lógica, variáveis, condições, strings, listas, for e while)."
    ],
    comoFoiFeito: [
      "Cada pessoa é guardada em um dicionário, e todos os dicionários ficam em uma lista",
      "Loop while para continuar cadastrando até o usuário digitar N",
      "Validação das respostas (sexo só M ou F, continuar só S ou N)",
      "Uso de .copy() para não perder os dados ao limpar o dicionário",
      "Cálculo da média de idade e filtro de quem está acima dela",
      "Saída formatada com f-strings"
    ],
    resultados: [
      "Programa funcionando com validação de todas as entradas",
      "Base de listas e dicionários para seguir em análise de dados"
    ],
    tecnologias: ["Python", "Listas", "Dicionários", "Lógica"],
    github: "https://github.com/heitorlupino/Estudos-Python",
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
    resumo: "Jogo educativo para Android com três minijogos sobre empatia e solidariedade, feito em Flutter e publicado na Play Store.",
    descricao: [
      "Jornada do Bem é um jogo para celular criado para inspirar atitudes de empatia, generosidade e solidariedade, principalmente em crianças e jovens. O jogador acompanha uma pequena história e depois cumpre missões que representam ações solidárias do dia a dia.",
      "Por que um jogo? Falar de solidariedade para crianças pode ficar chato rápido. Transformando cada ação em um desafio, com pontuação e fases, a mensagem chega de um jeito divertido. Trabalhar com um tema social também fez o grupo pensar além do código: projetar com empatia e comunicar com propósito.",
      "O jogo foi desenvolvido em equipe de março a junho, com orientação do professor Elvio Gilberto da Silva e colaboração do professor Luis Filipe Grael Tinós, e foi publicado na Google Play Store."
    ],
    comoFoiFeito: [
      "Design das telas, personagens e história no Figma",
      "Desenvolvimento em Flutter / Dart, com as telas organizadas em componentes",
      "Minijogo 1 - Coleta de Alimentos: escolher os alimentos certos para montar a cesta básica",
      "Minijogo 2 - Separação de Roupas: tirar as roupas rasgadas ou sujas antes da doação, com 3 fases de dificuldade crescente (mais roupas, menos erros permitidos e objetos mais rápidos)",
      "Minijogo 3 - Coleta de Lixo: recolher os resíduos e deixar o parque limpo",
      "Telas de história, \"como jogar\" e créditos",
      "Sistema de pontuação e feedback de acordo com o desempenho",
      "Gerenciamento de estado com setState e uso de imagens e sons locais",
      "Publicação na Google Play Store"
    ],
    resultados: [
      "Jogo publicado na Google Play Store",
      "3 minijogos completos, um deles com 3 fases",
      "Projeto em equipe de 5 pessoas do início ao lançamento"
    ],
    tecnologias: ["Flutter", "Dart", "Figma", "Android"],
    github: "https://github.com/heitorlupino/Missao-Solidaria",
    link: "https://play.google.com/store/apps/details?id=br.edu.unisagrado.jornadadobem",
    imagens: [
      "assets/projetos/jornada-do-bem/imagem1.jpg",
      "assets/projetos/jornada-do-bem/imagem2.jpg",
      "assets/projetos/jornada-do-bem/imagem3.jpg",
      "assets/projetos/jornada-do-bem/imagem4.jpg",
      "assets/projetos/jornada-do-bem/imagem5.jpg",
      "assets/projetos/jornada-do-bem/como-jogar1.jpg",
      "assets/projetos/jornada-do-bem/como-jogar2.jpg",
      "assets/projetos/jornada-do-bem/como-jogar3.jpg"
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
      "Reciclei! é um jogo educacional para computador feito no Projeto de Extensão Fábrica de Software: Desenvolvimento de Websites, Aplicativos e Jogos, do UNISAGRADO. O objetivo é ensinar o descarte correto de resíduos de forma divertida e desafiadora.",
      "Por que esse tema? Muita gente ainda tem dúvida sobre em qual lixeira colocar cada tipo de resíduo. Um jogo sério (serious game) permite treinar isso jogando, recebendo resposta na hora quando acerta ou erra.",
      "O jogo foi desenvolvido em equipe com tutoria do professor Luis Filipe Grael Tinós e orientação do professor Elvio Gilberto da Silva. No vídeo aparece um pouco da gameplay."
    ],
    comoFoiFeito: [
      "Definição do tema (descarte correto de resíduos) e das regras do jogo",
      "Criação das telas de menu, tutorial e créditos",
      "Mecânica de separar cada resíduo na lixeira da cor certa",
      "Testes com o grupo e com os professores",
      "Apresentação do jogo no projeto de extensão"
    ],
    resultados: [
      "Jogo completo e jogável apresentado na Fábrica de Software",
      "Feito na Fábrica de Software de 2024 (35 horas, com certificado)"
    ],
    tecnologias: ["Serious Games", "Game Design", "Trabalho em equipe"],
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
    resumo: "Museu interativo em realidade virtual: o jogador viaja pela Pré-História, Idade Média e Futuro e explora artefatos com narração.",
    descricao: [
      "ChronoMundi é um museu virtual imersivo feito na Unity. A partir de um hub central, o jogador entra em portais que levam a três eras: Pré-História, Idade Média e Futuro Tecnológico. Em cada era existem artefatos que podem ser examinados, com painel de informações e narração.",
      "Por que um museu em VR? Ver um artefato de perto, em um ambiente da época, ensina muito mais do que ler sobre ele. O projeto funciona tanto em VR (com óculos compatíveis) quanto no computador, com teclado e mouse.",
      "Para avançar, o jogador precisa explorar todos os artefatos da era. Quando completa, uma saída brilhante é liberada e ele volta ao hub para escolher a próxima viagem."
    ],
    comoFoiFeito: [
      "5 cenas: menu, hub do museu e uma cena para cada era",
      "Portais no hub que levam aos ambientes temáticos",
      "Interação com artefatos (tecla E) abrindo um painel com título e descrição, que fecha com F ou sozinho depois de um tempo",
      "Sistema de narração com áudio e legendas",
      "Sistema de progresso que libera a saída quando todos os artefatos da era são explorados",
      "Suporte a VR com XR Interaction Toolkit e também a teclado e mouse",
      "Ferramentas no editor para montar as cenas, criar os prefabs e validar o projeto automaticamente",
      "Correção do menu de pausa e ajuste das animações para funcionarem com o jogo pausado",
      "Textos dos artefatos das três eras e materiais PBR no URP"
    ],
    resultados: [
      "3 eras completas para explorar, cada uma com seus artefatos",
      "Funciona em VR e no computador",
      "Ferramentas de editor que montam as cenas em poucos cliques"
    ],
    tecnologias: ["Unity", "C#", "XR Interaction Toolkit", "TextMeshPro", "URP"],
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
    resumo: "Jogo de tiro em primeira pessoa feito na Unreal Engine 5, com armas, inimigos com IA e animações, tudo em Blueprints.",
    descricao: [
      "Protocolo Omega é um jogo de tiro em primeira pessoa (FPS) desenvolvido na Unreal Engine 5 como projeto da faculdade. Toda a lógica foi feita com Blueprints, o sistema de programação visual da Unreal.",
      "Por que esse projeto? Foi meu primeiro contato sério com a Unreal Engine, depois de já ter trabalhado com Unity. Um FPS envolve muitos sistemas conversando entre si (armas, vida, inimigos e animação), o que é ótimo para aprender a organizar um jogo maior.",
      "Um dos maiores desafios foi a animação do personagem: usamos um esqueleto militar personalizado e foi preciso resolver problemas de locomoção, posição das armas e câmera."
    ],
    comoFoiFeito: [
      "Sistema de tiro e recarga das armas",
      "Sistema de vida e morte do jogador",
      "Troca de armas usando um enum (E_WeaponType)",
      "Inimigos com inteligência artificial usando Behavior Trees",
      "Modelos de arma separados para primeira e terceira pessoa, mostrando só o certo em cada câmera",
      "Correção da arma que aparecia na cabeça do personagem (socket errado no esqueleto)",
      "Animation Blueprint com State Machine e estado de corrida (Run)",
      "Guia em Blueprints documentando os sistemas para o grupo"
    ],
    resultados: [
      "FPS jogável com armas, inimigos com IA e animações",
      "Experiência com Blueprints, Behavior Trees e Animation Blueprints"
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
      "Por que fazer tudo do zero? Em vez de usar um pacote pronto, quis entender como cada parte de um jogo de plataforma funciona: física do pulo, colisões, câmera, interface e até o som, que é gerado por código.",
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
    resultados: [
      "Fase completa com 28 moedas, 7 slimes, checkpoint e bandeira final",
      "Jogo com menu, pausa, game over, vitória e recorde salvo",
      "Funciona com teclado e com controle"
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
    id: "campanha-lgpd",
    titulo: "Campanha sobre a LGPD",
    tipo: "Projeto em grupo - Princípios de Banco de Dados",
    categoria: "outros",
    status: "",
    resumo: "Série de posts explicando a Lei Geral de Proteção de Dados de forma simples, para usuários comuns e para empresas.",
    descricao: [
      "Na disciplina de Princípios de Banco de Dados, meu grupo estudou a LGPD (Lei Geral de Proteção de Dados) e como as empresas devem cuidar das informações pessoais guardadas nos seus sistemas e processos.",
      "Por que esse tema? Quem trabalha com banco de dados lida o tempo todo com dados de pessoas. Percebemos que a maioria dos usuários não sabe para onde vão seus dados quando preenche um formulário, e que muitas empresas tratam a LGPD só como obrigação, e não como parte da cultura.",
      "Criamos então duas séries de posts para o LinkedIn: uma para usuários comuns, explicando seus direitos, e outra para empresas, mostrando as medidas técnicas e administrativas que a lei exige."
    ],
    comoFoiFeito: [
      "Estudo da LGPD e de como ela se aplica aos bancos de dados das empresas",
      "Pesquisa sobre medidas de proteção: consentimento, controle de acesso, registro de operações, criptografia e anonimização",
      "Série para usuários: o que é a LGPD, quais são os seus direitos e por que isso importa",
      "Série para empresas: políticas de privacidade, treinamento da equipe e monitoramento",
      "Criação dos cards com linguagem simples e visual padronizado",
      "Publicação das duas campanhas no LinkedIn"
    ],
    resultados: [
      "2 campanhas publicadas no LinkedIn",
      "Conteúdo técnico traduzido para quem não é da área"
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
    resumo: "Oficina no Clube da Terceira Idade de Barra Bonita ensinando idosos a reconhecer e evitar golpes pelo celular.",
    descricao: [
      "Projeto social da disciplina Sociologia da Responsabilidade Social, sobre prevenção de golpes virtuais e segurança digital para pessoas idosas. Fui o coordenador do grupo de 4 alunos de Ciência da Computação e fiz o primeiro contato com o Clube da Terceira Idade de Barra Bonita - SP.",
      "Por que esse tema? Na pesquisa que fizemos, 82% dos idosos de São Paulo já receberam tentativa de golpe pela internet e 68% acham quase impossível se proteger. Em 2025 o Brasil teve mais de 346 mil estelionatos por meio eletrônico, e o golpe do falso parente no WhatsApp foi o mais relatado aos bancos em 2024, com cerca de 153 mil casos.",
      "A ação aconteceu em 28/10/2026, das 8h30 às 9h30. Usamos uma apresentação com letra grande, cores de alto contraste e exemplos de mensagens falsas, um vídeo de campanha oficial da Febraban e a cartilha \"Fique Esperto!\", que cada participante levou para casa. O projeto está ligado às ODS 4 (Educação de Qualidade) e 10 (Redução das Desigualdades) da ONU."
    ],
    comoFoiFeito: [
      "Escolha do tema, do público e do local, e contato com o presidente do Clube por e-mail",
      "Pesquisa em fontes oficiais (CETIC.br, Fórum Brasileiro de Segurança Pública, Febraban, Ministério dos Direitos Humanos)",
      "Carta de apresentação assinada pelo presidente do Clube e pela professora",
      "Apresentação de 15 slides: regra de ouro \"Pare, Desconfie, Confirme\", 6 sinais de golpe e os 5 golpes mais comuns (falso funcionário do banco, falso parente no WhatsApp, falsa venda, link falso e cartão com motoboy)",
      "Slides de \"Nunca e Sempre\", dicas para proteger o celular e o que fazer se cair em um golpe (banco, B.O., Disque 100)",
      "Dinâmica \"Será golpe?\" com três situações simuladas, em que os idosos levantavam a mão para dizer se era golpe",
      "Cartilha ilustrada \"Fique Esperto!\" de 4 páginas, com letra ampliada",
      "Cuidados com a LGPD: nenhuma senha ou dado pessoal foi pedido e as simulações usaram só celulares do grupo com dados fictícios",
      "Relatório final em formato de artigo científico (ABNT)"
    ],
    resultados: [
      "Mais de 30 idosos participaram (a previsão era de 15 a 20)",
      "30 cartilhas impressas entregues",
      "Os participantes acertaram as 3 situações da dinâmica \"Será golpe?\"",
      "Os idosos pediram para o grupo voltar ao Clube com novas atividades"
    ],
    tecnologias: ["Segurança Digital", "Engenharia Social", "Comunicação", "Liderança"],
    github: "",
    link: "",
    imagens: [
      "assets/projetos/projeto-social/slide1.jpg",
      "assets/projetos/projeto-social/slide2.jpg",
      "assets/projetos/projeto-social/slide3.jpg",
      "assets/projetos/projeto-social/slide4.jpg",
      "assets/projetos/projeto-social/slide5.jpg",
      "assets/projetos/projeto-social/slide6.jpg",
      "assets/projetos/projeto-social/slide7.jpg",
      "assets/projetos/projeto-social/slide8.jpg",
      "assets/projetos/projeto-social/slide9.jpg",
      "assets/projetos/projeto-social/slide10.jpg",
      "assets/projetos/projeto-social/slide11.jpg",
      "assets/projetos/projeto-social/slide12.jpg"
    ],
    video: ""
  }
];


// COMO ADICIONAR UM CERTIFICADO:
// categoria: "faculdade", "extensao" ou "cursos"
// coloca a imagem (e o PDF, se tiver) na pasta assets/certificados
// e escreve o caminho em "imagem" e "pdf" (se não tiver ainda deixa "")
const certificados = [
  {
    nome: "Fundamentos da IA Moderna: Machine Learning, LLMs, IA Generativa e Agentes",
    categoria: "cursos",
    instituicao: "DIO - Bradesco",
    data: "Junho de 2026 - 2 horas",
    imagem: "assets/certificados/fundamentos-ia-moderna.jpg",
    pdf: ""
  },
  {
    nome: "V Semana das Engenharias",
    categoria: "faculdade",
    instituicao: "UNISAGRADO",
    data: "Abril de 2026 - 3 horas",
    imagem: "assets/certificados/semana-engenharias-2026.jpg",
    pdf: "assets/certificados/semana-engenharias-2026.pdf"
  },
  {
    nome: "VII SITec - Semana de Inovação e Tecnologia (inclui minicurso de automação com LLM, RPA e OCR)",
    categoria: "faculdade",
    instituicao: "UNISAGRADO",
    data: "Novembro de 2025 - 9 horas",
    imagem: "assets/certificados/sitec-2025.jpg",
    pdf: "assets/certificados/sitec-2025.pdf"
  },
  {
    nome: "Projeto de Extensão Fábrica de Software: Websites, Aplicativos e Jogos",
    categoria: "extensao",
    instituicao: "UNISAGRADO",
    data: "1º semestre de 2025 - 150 horas",
    imagem: "assets/certificados/fabrica-software-2025.jpg",
    pdf: "assets/certificados/fabrica-software-2025.pdf"
  },
  {
    nome: "React na Prática - Construindo uma Tela do Zero",
    categoria: "faculdade",
    instituicao: "UNISAGRADO",
    data: "Maio de 2025 - 8 horas",
    imagem: "assets/certificados/react-na-pratica-2025.jpg",
    pdf: "assets/certificados/react-na-pratica-2025.pdf"
  },
  {
    nome: "VI SITec - Semana de Inovação e Tecnologia (inclui minicurso de chat com WebSocket, Node.js e Angular)",
    categoria: "faculdade",
    instituicao: "UNISAGRADO",
    data: "Novembro de 2024 - 7 horas",
    imagem: "assets/certificados/sitec-2024.jpg",
    pdf: "assets/certificados/sitec-2024.pdf"
  },
  {
    nome: "XIII Encontro e III Mostra de Extensão",
    categoria: "extensao",
    instituicao: "UNISAGRADO",
    data: "Outubro de 2024 - 1 hora",
    imagem: "assets/certificados/mostra-extensao-2024.jpg",
    pdf: "assets/certificados/mostra-extensao-2024.pdf"
  },
  {
    nome: "Introdução ao Figma",
    categoria: "faculdade",
    instituicao: "UNISAGRADO",
    data: "Setembro de 2024 - 8 horas",
    imagem: "assets/certificados/introducao-figma-2024.jpg",
    pdf: "assets/certificados/introducao-figma-2024.pdf"
  },
  {
    nome: "Projeto de Extensão Fábrica de Software: Websites, Aplicativos e Jogos",
    categoria: "extensao",
    instituicao: "UNISAGRADO",
    data: "1º semestre de 2024 - 35 horas",
    imagem: "assets/certificados/fabrica-software-2024.jpg",
    pdf: "assets/certificados/fabrica-software-2024.pdf"
  },
  {
    nome: "Introdução à Unity: produzindo um jogo do zero",
    categoria: "faculdade",
    instituicao: "UNISAGRADO",
    data: "Abril de 2024 - 4 horas",
    imagem: "assets/certificados/introducao-unity-2024.jpg",
    pdf: "assets/certificados/introducao-unity-2024.pdf"
  },
  {
    nome: "Bootcamp Bradesco - GenAI, Dados & Cibersegurança",
    categoria: "cursos",
    instituicao: "DIO - Bradesco",
    data: "Em andamento",
    imagem: "",
    pdf: ""
  },
  {
    nome: "Python Impressionador",
    categoria: "cursos",
    instituicao: "Hashtag Treinamentos",
    data: "Em andamento",
    imagem: "",
    pdf: ""
  },
  {
    nome: "Construa seu primeiro app com IA",
    categoria: "cursos",
    instituicao: "DIO - Santander",
    data: "Em andamento",
    imagem: "",
    pdf: ""
  },
  {
    nome: "Formação Front-end - HTML, CSS, JavaScript, React e TypeScript",
    categoria: "cursos",
    instituicao: "Matheus Battisti",
    data: "Em andamento",
    imagem: "",
    pdf: ""
  }
];
