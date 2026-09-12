module.exports = {
  id: 'totally-spies',
  title: 'Qual Totally Spies você é?',
  subtitle: 'Sam, Clover ou Alex?',
  cover: {
    emoji: '🕵️‍♀️',
    gradient: 'linear-gradient(135deg, #22c55e, #eab308, #ef4444)',
    image: '/img/characters/spies-trio.png'
  },
  tags: ['Totally Spies', 'Personalidade'],
  type: 'personality',
  results: {
    sam: {
      name: 'Sam',
      emoji: '💚',
      color: '#22c55e',
      image: '/img/characters/spies-sam.svg',
      blurb: 'Ruiva, estratégica e a cérebro da WOOHP. Você lê o briefing, desarma a bomba e ainda lembra o nome do vilão.'
    },
    clover: {
      name: 'Clover',
      emoji: '💛',
      color: '#eab308',
      image: '/img/characters/spies-clover.svg',
      blurb: 'Loira, fashion e rainha dos gadgets rosa. Missão? Sim. Shopping depois? Obrigatório. Você salva o mundo com estilo.'
    },
    alex: {
      name: 'Alex',
      emoji: '❤️',
      color: '#ef4444',
      image: '/img/characters/spies-alex.svg',
      blurb: 'Esportiva, leal e com um coração gigante (e um pouco desastrada). Você parte pra ação e abraça as amigas no fim.'
    }
  },
  questions: [
    {
      text: 'Cor do catsuit:',
      options: [
        { label: 'Verde', scores: { sam: 2 } },
        { label: 'Amarelo', scores: { clover: 2 } },
        { label: 'Vermelho', scores: { alex: 2 } }
      ]
    },
    {
      text: 'Na missão você…',
      options: [
        { label: 'Analisa pistas e lidera o plano', scores: { sam: 2 } },
        { label: 'Usa o gadget mais fashion', scores: { clover: 2 } },
        { label: 'Corre, luta e improvisa', scores: { alex: 2 } }
      ]
    },
    {
      text: 'Depois da escola:',
      options: [
        { label: 'Estudar / biblioteca', scores: { sam: 2 } },
        { label: 'Shopping no mall', scores: { clover: 2 } },
        { label: 'Esporte / treino', scores: { alex: 2 } }
      ]
    },
    {
      text: 'Seu ponto fraco fofo:',
      options: [
        { label: 'Ser perfeccionista demais', scores: { sam: 2 } },
        { label: 'Parar a missão por um sapato', scores: { clover: 2 } },
        { label: 'Tropeçar no momento decisivo', scores: { alex: 2 } }
      ]
    },
    {
      text: 'Amigas te chamam de:',
      options: [
        { label: 'A chefe / cérebro', scores: { sam: 2 } },
        { label: 'A fashionista', scores: { clover: 2 } },
        { label: 'A atleta / coração', scores: { alex: 2 } }
      ]
    },
    {
      text: 'Gadget dos sonhos:',
      options: [
        { label: 'Compad de análise', scores: { sam: 2 } },
        { label: 'Batom laser / bolsa de gadgets', scores: { clover: 2 } },
        { label: 'Tênis turbo / skate jet', scores: { alex: 2 } }
      ]
    },
    {
      text: 'Seu vilão dos sonhos pra derrotar:',
      options: [
        { label: 'Um gênio do crime com plano complexo', scores: { sam: 2 } },
        { label: 'Uma rival fashion do mal', scores: { clover: 2 } },
        { label: 'Um monstro gigante pra correr atrás', scores: { alex: 2 } }
      ]
    },
    {
      text: 'No mall Beverly Hills você…',
      options: [
        { label: 'Repara em pistas suspeitas', scores: { sam: 2 } },
        { label: 'Já está na vitrine', scores: { clover: 2 } },
        { label: 'Pega o milkshake e corre', scores: { alex: 2 } }
      ]
    },
    {
      text: 'Como você reage ao Jerry da WOOHP?',
      options: [
        { label: 'Presta atenção no briefing todinho', scores: { sam: 2 } },
        { label: 'Pergunta se o uniforme combina', scores: { clover: 2 } },
        { label: 'Já quer saltar do avião', scores: { alex: 2 } }
      ]
    },
    {
      text: 'Sua vibe de espiã:',
      options: [
        { label: 'Cérebro da operação', scores: { sam: 2 } },
        { label: 'Estilo e distração', scores: { clover: 2 } },
        { label: 'Ação e coração', scores: { alex: 2 } }
      ]
    }
  ]
};
