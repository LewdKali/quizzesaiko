module.exports = {
  id: 'sailor-moon',
  title: 'Qual Sailor Scout você seria?',
  subtitle: 'Lua, Marte, Mercúrio, Júpiter ou Vênus?',
  cover: {
    emoji: '🌙',
    gradient: 'linear-gradient(135deg, #ff8fab, #a78bfa)',
    image: '/img/characters/sailor-moon.png'
  },
  tags: ['Sailor Moon', 'Personalidade'],
  type: 'personality',
  results: {
    moon: {
      name: 'Sailor Moon',
      emoji: '🌙',
      color: '#ff8fab',
      image: '/img/characters/sailor-moon.png',
      blurb: 'Chorona? Às vezes. Corajosa quando importa? Sempre. Você protege quem ama com tudo — e nunca desiste, mesmo tremendo de medo.'
    },
    mercury: {
      name: 'Sailor Mercúrio',
      emoji: '💧',
      color: '#7dd3fc',
      image: '/img/characters/sailor-mercury.svg',
      blurb: 'Inteligente, analítica e a cérebro do time. Você pesquisa, planeja e salva o grupo com estratégia (e um computador mental).'
    },
    mars: {
      name: 'Sailor Marte',
      emoji: '🔥',
      color: '#fb7185',
      image: '/img/characters/sailor-mars.svg',
      blurb: 'Intensa, intuitiva e com personalidade de fogo. Você sente as vibes, fala o que pensa e protege os seus com paixão.'
    },
    jupiter: {
      name: 'Sailor Júpiter',
      emoji: '🍃',
      color: '#4ade80',
      image: '/img/characters/sailor-jupiter.svg',
      blurb: 'Forte, leal e com um lado doméstico surpreendente. Você cuida do grupo, cozinha o lanche e ainda derruba o vilão no caminho.'
    },
    venus: {
      name: 'Sailor Vênus',
      emoji: '🧡',
      color: '#fb923c',
      image: '/img/characters/sailor-venus.svg',
      blurb: 'Carismática, fashion e líder nato. Você ama romance, estilo e ser o centro — mas também carrega o time nas costas quando precisa.'
    }
  },
  questions: [
    {
      text: 'Seu elemento favorito:',
      options: [
        { label: 'Luz / amor', scores: { moon: 2 } },
        { label: 'Água / gelo', scores: { mercury: 2 } },
        { label: 'Fogo', scores: { mars: 2 } },
        { label: 'Trovão / natureza', scores: { jupiter: 2 } },
        { label: 'Amor / corrente dourada', scores: { venus: 2 } }
      ]
    },
    {
      text: 'Em crise, você…',
      options: [
        { label: 'Chora, depois salva todo mundo', scores: { moon: 2 } },
        { label: 'Analisa dados e acha a solução', scores: { mercury: 2 } },
        { label: 'Sente o perigo e partiu pro ataque', scores: { mars: 2 } },
        { label: 'Protege as amigas com força', scores: { jupiter: 2 } },
        { label: 'Assume o comando e motiva o time', scores: { venus: 2 } }
      ]
    },
    {
      text: 'Seu hobby secreto:',
      options: [
        { label: 'Games e dormir até tarde', scores: { moon: 2 } },
        { label: 'Estudar / ler', scores: { mercury: 2 } },
        { label: 'Meditar / espiritualidade', scores: { mars: 2 } },
        { label: 'Cozinhar / jardinagem', scores: { jupiter: 2 } },
        { label: 'Moda e crushs', scores: { venus: 2 } }
      ]
    },
    {
      text: 'Cor que mais te representa:',
      options: [
        { label: 'Rosa / vermelho e branco', scores: { moon: 2 } },
        { label: 'Azul claro', scores: { mercury: 2 } },
        { label: 'Vermelho / vinho', scores: { mars: 2 } },
        { label: 'Verde', scores: { jupiter: 2 } },
        { label: 'Laranja / dourado', scores: { venus: 2 } }
      ]
    },
    {
      text: 'Amigas dizem que você é…',
      options: [
        { label: 'O coração do grupo', scores: { moon: 2 } },
        { label: 'A nerd querida', scores: { mercury: 2 } },
        { label: 'A intensa', scores: { mars: 2 } },
        { label: 'A mãe do grupo', scores: { jupiter: 2 } },
        { label: 'A rainha do carisma', scores: { venus: 2 } }
      ]
    },
    {
      text: 'Frase sua:',
      options: [
        { label: '“Em nome da Lua…”', scores: { moon: 2 } },
        { label: '“Deixa comigo, eu calculo.”', scores: { mercury: 2 } },
        { label: '“Eu já sabia que tinha algo errado.”', scores: { mars: 2 } },
        { label: '“Ninguém mexe com minhas amigas.”', scores: { jupiter: 2 } },
        { label: '“Beleza também é poder.”', scores: { venus: 2 } }
      ]
    },
    {
      text: 'Seu lanche depois da escola:',
      options: [
        { label: 'Doce + game', scores: { moon: 2 } },
        { label: 'Chá e livro', scores: { mercury: 2 } },
        { label: 'Algo picante / intenso', scores: { mars: 2 } },
        { label: 'Comida caseira', scores: { jupiter: 2 } },
        { label: 'Café fashion com as amigas', scores: { venus: 2 } }
      ]
    },
    {
      text: 'Em um crush, você…',
      options: [
        { label: 'Idealiza e se atrapalha', scores: { moon: 2 } },
        { label: 'Observa em silêncio', scores: { mercury: 2 } },
        { label: 'Sente forte e rápido', scores: { mars: 2 } },
        { label: 'Cuida e protege', scores: { jupiter: 2 } },
        { label: 'Flerta com confiança', scores: { venus: 2 } }
      ]
    },
    {
      text: 'Seu acessório mágico seria…',
      options: [
        { label: 'Tiara da lua', scores: { moon: 2 } },
        { label: 'Mini computador', scores: { mercury: 2 } },
        { label: 'Ofuda / fogo sagrado', scores: { mars: 2 } },
        { label: 'Folhas / trovão', scores: { jupiter: 2 } },
        { label: 'Corrente do amor', scores: { venus: 2 } }
      ]
    },
    {
      text: 'No grupo de amigas você salva o dia…',
      options: [
        { label: 'Com coragem no último segundo', scores: { moon: 2 } },
        { label: 'Com informação certeira', scores: { mercury: 2 } },
        { label: 'Com intuição afiada', scores: { mars: 2 } },
        { label: 'Com força e lealdade', scores: { jupiter: 2 } },
        { label: 'Com liderança e estilo', scores: { venus: 2 } }
      ]
    }
  ]
};
