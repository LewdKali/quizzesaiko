module.exports = {
  id: 'winx',
  title: 'Qual fada Winx é a sua cara?',
  subtitle: 'Bloom, Stella, Flora, Musa, Tecna ou Aisha',
  cover: {
    emoji: '✨',
    gradient: 'linear-gradient(135deg, #60a5fa, #f472b6, #fbbf24)',
    image: '/img/characters/winx-bloom.png'
  },
  tags: ['Winx', 'Personalidade'],
  type: 'personality',
  results: {
    bloom: {
      name: 'Bloom',
      emoji: '🔥',
      color: '#f87171',
      image: '/img/characters/winx-bloom.png',
      blurb: 'Poderosa, determinada e com um destino maior que a Terra. Você descobre forças escondidas quando as amigas precisam — fogo do dragão incluso.'
    },
    stella: {
      name: 'Stella',
      emoji: '☀️',
      color: '#fbbf24',
      image: '/img/characters/winx-stella.svg',
      blurb: 'Fashion, solar e rainha do brilho. Você ama um look novo, um elogio e ser o sol do grupo — literalmente.'
    },
    flora: {
      name: 'Flora',
      emoji: '🌸',
      color: '#86efac',
      image: '/img/characters/winx-flora.svg',
      blurb: 'Gentil, paciente e conectada à natureza. Você cuida das plantas, das amigas e do clima emocional do grupo.'
    },
    musa: {
      name: 'Musa',
      emoji: '🎵',
      color: '#c084fc',
      image: '/img/characters/winx-musa.svg',
      blurb: 'Ritmo, vibe e sinceridade. Música é seu idioma; emoção também. Você sente tudo em stereo.'
    },
    tecna: {
      name: 'Tecna',
      emoji: '💠',
      color: '#67e8f9',
      image: '/img/characters/winx-tecna.svg',
      blurb: 'Lógica, gadgets e eficiência. Você resolve o bug, hackeia o problema e ainda explica o porquê — com carinho tech.'
    },
    aisha: {
      name: 'Aisha (Layla)',
      emoji: '🌊',
      color: '#34d399',
      image: '/img/characters/winx-aisha.svg',
      blurb: 'Atleta, independente e fluida como a água. Você dança, compete e não deixa ninguém te prender.'
    }
  },
  questions: [
    {
      text: 'Seu poder sonhado:',
      options: [
        { label: 'Chamas do dragão', scores: { bloom: 2 } },
        { label: 'Luz do sol / moda mágica', scores: { stella: 2 } },
        { label: 'Plantas e cura', scores: { flora: 2 } },
        { label: 'Ondas sonoras', scores: { musa: 2 } },
        { label: 'Tecnologia / hologramas', scores: { tecna: 2 } },
        { label: 'Morphix / água', scores: { aisha: 2 } }
      ]
    },
    {
      text: 'Seu rolê ideal:',
      options: [
        { label: 'Aventura pra salvar alguém', scores: { bloom: 2 } },
        { label: 'Shopping + photoshoot', scores: { stella: 2 } },
        { label: 'Jardim / picnic', scores: { flora: 2 } },
        { label: 'Show / karaoke', scores: { musa: 2 } },
        { label: 'LAN house / museu de ciência', scores: { tecna: 2 } },
        { label: 'Esporte / dança', scores: { aisha: 2 } }
      ]
    },
    {
      text: 'No grupo você é:',
      options: [
        { label: 'A protagonista sem querer', scores: { bloom: 2 } },
        { label: 'A stylist oficial', scores: { stella: 2 } },
        { label: 'A paz e o conselho', scores: { flora: 2 } },
        { label: 'A playlist e o mood', scores: { musa: 2 } },
        { label: 'A que resolve o técnico', scores: { tecna: 2 } },
        { label: 'A energia e a coragem física', scores: { aisha: 2 } }
      ]
    },
    {
      text: 'Cor Winx:',
      options: [
        { label: 'Azul / laranja fogo', scores: { bloom: 2 } },
        { label: 'Amarelo / laranja', scores: { stella: 2 } },
        { label: 'Rosa / verde', scores: { flora: 2 } },
        { label: 'Vermelho / lilás', scores: { musa: 2 } },
        { label: 'Roxo / ciano', scores: { tecna: 2 } },
        { label: 'Verde água / ciano', scores: { aisha: 2 } }
      ]
    },
    {
      text: 'Frase sua:',
      options: [
        { label: '“Eu vou descobrir quem eu sou.”', scores: { bloom: 2 } },
        { label: '“Esse look tá um sol.”', scores: { stella: 2 } },
        { label: '“As plantas também sentem.”', scores: { flora: 2 } },
        { label: '“Sobe o volume.”', scores: { musa: 2 } },
        { label: '“Isso tem solução lógica.”', scores: { tecna: 2 } },
        { label: '“Eu danço minha própria batalha.”', scores: { aisha: 2 } }
      ]
    },
    {
      text: 'Seu lugar favorito em Alfea seria…',
      options: [
        { label: 'A biblioteca de histórias perdidas', scores: { bloom: 2 } },
        { label: 'O camarim / espelho mágico', scores: { stella: 2 } },
        { label: 'A estufa de plantas', scores: { flora: 2 } },
        { label: 'A sala de música', scores: { musa: 2 } },
        { label: 'O lab de tecnologia', scores: { tecna: 2 } },
        { label: 'A arena / pista de dança', scores: { aisha: 2 } }
      ]
    },
    {
      text: 'Como você enfrenta um vilão?',
      options: [
        { label: 'Com poder emocional intenso', scores: { bloom: 2 } },
        { label: 'Com luz e presença cênica', scores: { stella: 2 } },
        { label: 'Com calma e natureza', scores: { flora: 2 } },
        { label: 'Com ritmo e ondas sonoras', scores: { musa: 2 } },
        { label: 'Com análise e gadgets', scores: { tecna: 2 } },
        { label: 'Com movimento e Morphix', scores: { aisha: 2 } }
      ]
    },
    {
      text: 'Seu presente ideal:',
      options: [
        { label: 'Algo ligado à sua origem / família', scores: { bloom: 2 } },
        { label: 'Roupa ou acessório fashion', scores: { stella: 2 } },
        { label: 'Flor rara / kit de jardinagem', scores: { flora: 2 } },
        { label: 'Fone top / ingresso de show', scores: { musa: 2 } },
        { label: 'Gadget novo', scores: { tecna: 2 } },
        { label: 'Tênis / aula de dança', scores: { aisha: 2 } }
      ]
    },
    {
      text: 'Nas amizades você é a que…',
      options: [
        { label: 'Une todo mundo na missão', scores: { bloom: 2 } },
        { label: 'Levanta o astral com estilo', scores: { stella: 2 } },
        { label: 'Acolhe quando alguém tá mal', scores: { flora: 2 } },
        { label: 'Entende as emoções pela vibe', scores: { musa: 2 } },
        { label: 'Resolve o “como fazer”', scores: { tecna: 2 } },
        { label: 'Puxa pra ação e movimento', scores: { aisha: 2 } }
      ]
    }
  ]
};
