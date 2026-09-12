module.exports = {
  id: 'ppg-vilao',
  title: 'Qual vilão(ã) das Superpoderosas é a sua vibe?',
  subtitle: 'Caos estiloso — só pra se divertir',
  cover: {
    emoji: '😈',
    gradient: 'linear-gradient(135deg, #6b2d5c, #c084fc)',
    image: '/img/characters/ppg-mojo.png'
  },
  tags: ['Meninas Superpoderosas', 'Personalidade'],
  type: 'personality',
  results: {
    mojo: {
      name: 'Macaco Louco',
      emoji: '🐵',
      color: '#c084fc',
      image: '/img/characters/ppg-mojo.png',
      blurb: 'Cérebro grande, planos elaborados e um ego à prova de Elemento X. Você adora montar estratégias… mesmo quando o universo (ou as meninas) desmonta tudo.'
    },
    him: {
      name: 'Ele (Him)',
      emoji: '👠',
      color: '#ff5a9e',
      image: '/img/characters/ppg-him.png',
      blurb: 'Misterioso, dramático e com um humor psicológico. Você intimida sem precisar gritar — presença pura. Rosa, salto e caos emocional? Combinação perfeita.'
    },
    princess: {
      name: 'Princesa Mais',
      emoji: '👑',
      color: '#ffd166',
      image: '/img/characters/ppg-princess.png',
      blurb: 'Quer o holofote, o status e o protagonismo. Se o mundo não te dá o papel principal, você compra o cenário inteiro. Mimada? Talvez. Icônica? Com certeza.'
    },
    fuzzy: {
      name: 'Peludinho (Fuzzy Lumpkins)',
      emoji: '🧶',
      color: '#ff9f6b',
      image: '/img/characters/ppg-fuzzy.png',
      blurb: 'Territorial, temperamental e dona do seu espaço. Não mexam nas suas coisas, na sua rotina nem no seu sofá. Paz = ninguém te incomodando.'
    }
  },
  questions: [
    {
      text: 'Seu tipo de vingança favorito:',
      options: [
        { label: 'Plano genial em 12 etapas', scores: { mojo: 2 } },
        { label: 'Mexer com a cabeça da pessoa', scores: { him: 2 } },
        { label: 'Gastar dinheiro até ganhar', scores: { princess: 2 } },
        { label: 'Gritar “SUMIÇO!” e expulsar', scores: { fuzzy: 2 } }
      ]
    },
    {
      text: 'Seu look de vilã:',
      options: [
        { label: 'Capa, lab e vibe cientista', scores: { mojo: 2 } },
        { label: 'Rosa, renda e mistério', scores: { him: 2 } },
        { label: 'Ouro, rosa choque, diamantes', scores: { princess: 2 } },
        { label: 'Conforto peludo e zero filtro', scores: { fuzzy: 2 } }
      ]
    },
    {
      text: 'O que mais te irrita:',
      options: [
        { label: 'Ser subestimada intelectualmente', scores: { mojo: 2 } },
        { label: 'Falsidade e hipocrisia', scores: { him: 2 } },
        { label: 'Não ser o centro das atenções', scores: { princess: 2 } },
        { label: 'Gente invadindo seu espaço', scores: { fuzzy: 2 } }
      ]
    },
    {
      text: 'No grupo de amigas você é:',
      options: [
        { label: 'A que planeja o golpe do século', scores: { mojo: 2 } },
        { label: 'A que lê o ambiente e provoca', scores: { him: 2 } },
        { label: 'A que escolhe o restaurante caro', scores: { princess: 2 } },
        { label: 'A que quer quietude em casa', scores: { fuzzy: 2 } }
      ]
    },
    {
      text: 'Frase que mais combina com você:',
      options: [
        { label: '“Eu poderia ter sido uma delas…”', scores: { mojo: 2 } },
        { label: '“Que delícia… o medo.”', scores: { him: 2 } },
        { label: '“Dinheiro resolve.”', scores: { princess: 2 } },
        { label: '“Sai da minha propriedade!”', scores: { fuzzy: 2 } }
      ]
    },
    {
      text: 'Seu antro do mal seria…',
      options: [
        { label: 'Laboratório high-tech no vulcão', scores: { mojo: 2 } },
        { label: 'Mansão rosa surreal', scores: { him: 2 } },
        { label: 'Cobertura cheia de brinquedos caros', scores: { princess: 2 } },
        { label: 'Cabana no mato, longe de todos', scores: { fuzzy: 2 } }
      ]
    }
  ]
};
