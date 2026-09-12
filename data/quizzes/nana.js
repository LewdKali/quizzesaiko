module.exports = {
  id: 'nana',
  title: 'Qual Nana você é?',
  subtitle: 'Osaki, Hachi, Reira ou Junko?',
  cover: {
    emoji: '🎸',
    gradient: 'linear-gradient(135deg, #111827, #f9a8d4, #ef4444)',
    image: '/img/characters/nana-osaki.jpg'
  },
  tags: ['Nana', 'Anime', 'Personalidade'],
  type: 'personality',
  results: {
    osaki: {
      name: 'Nana Ōsaki',
      emoji: '🎸',
      color: '#ef4444',
      image: '/img/characters/nana-osaki.jpg',
      blurb: 'Rock, independência e um coração blindado (por fora). Você luta pelo sonho com unha e dente — e ama profundo, mesmo quando finge que não.'
    },
    hachi: {
      name: 'Nana “Hachi” Komatsu',
      emoji: '🍓',
      color: '#f9a8d4',
      image: '/img/characters/nana-hachi.jpg',
      blurb: 'Romântica, impulsiva e cheia de sonhos de final feliz. Você sente demais, erra, ri, chora — e ainda assim atrai as pessoas certas pro seu caos fofo.'
    },
    reira: {
      name: 'Reira Serizawa',
      emoji: '🎤',
      color: '#c4b5fd',
      image: '/img/characters/nana-reira.jpg',
      blurb: 'Voz de ouro, imagem impecável e um mundo interno frágil. Você brilha no palco… e às vezes se perde tentando ser o que esperam de você.'
    },
    junko: {
      name: 'Junko Saotome',
      emoji: '☕',
      color: '#fbbf24',
      image: '/img/characters/nana-junko.jpg',
      blurb: 'Direta, sarcástica e o senso de realidade do grupo. Você fala a verdade sem filtro — e no fundo só quer que as amigas não se destroem.'
    }
  },
  questions: [
    {
      text: 'Seu plano de vida ideal:',
      options: [
        { label: 'Fazer sucesso com a própria arte', scores: { osaki: 2 } },
        { label: 'Amor, casamento e um lar fofo', scores: { hachi: 2 } },
        { label: 'Brilhar como ídolo / estrela', scores: { reira: 2 } },
        { label: 'Estabilidade e zero drama (quase)', scores: { junko: 2 } }
      ]
    },
    {
      text: 'Seu look do dia a dia:',
      options: [
        { label: 'Preto, jaqueta, vibe rock', scores: { osaki: 2 } },
        { label: 'Rosa, fofo, acessórios', scores: { hachi: 2 } },
        { label: 'Elegante, glam, palco', scores: { reira: 2 } },
        { label: 'Casual chic, prático', scores: { junko: 2 } }
      ]
    },
    {
      text: 'Em um relacionamento difícil você…',
      options: [
        { label: 'Se fecha, mas não larga o sonho', scores: { osaki: 2 } },
        { label: 'Perdoa fácil e idealiza', scores: { hachi: 2 } },
        { label: 'Se apega e teme ficar sozinha', scores: { reira: 2 } },
        { label: 'Corta o papo e põe o pé no chão', scores: { junko: 2 } }
      ]
    },
    {
      text: 'No apartamento 707 você seria…',
      options: [
        { label: 'A roomie rockeira de poucas palavras', scores: { osaki: 2 } },
        { label: 'A que decora e faz jantar', scores: { hachi: 2 } },
        { label: 'A visita famosa um pouco perdida', scores: { reira: 2 } },
        { label: 'A amiga que aparece pra dar bronca', scores: { junko: 2 } }
      ]
    },
    {
      text: 'Música pra você é…',
      options: [
        { label: 'Identidade e liberdade', scores: { osaki: 2 } },
        { label: 'Trilha do romance', scores: { hachi: 2 } },
        { label: 'Palco, fama e pressão', scores: { reira: 2 } },
        { label: 'Background enquanto a vida acontece', scores: { junko: 2 } }
      ]
    },
    {
      text: 'Amigas descrevem você como…',
      options: [
        { label: 'A forte / cool', scores: { osaki: 2 } },
        { label: 'A sonhadora', scores: { hachi: 2 } },
        { label: 'A estrela sensível', scores: { reira: 2 } },
        { label: 'A realista / ácida', scores: { junko: 2 } }
      ]
    },
    {
      text: 'Seu maior medo:',
      options: [
        { label: 'Depender demais de alguém', scores: { osaki: 2 } },
        { label: 'Ficar sozinha / sem amor', scores: { hachi: 2 } },
        { label: 'Não corresponder às expectativas', scores: { reira: 2 } },
        { label: 'Ver amigas se sabotarem', scores: { junko: 2 } }
      ]
    },
    {
      text: 'No rolê noturno:',
      options: [
        { label: 'Barzinho / show / cerveja', scores: { osaki: 2 } },
        { label: 'Encontro fofo / shopping', scores: { hachi: 2 } },
        { label: 'Camarim e after party', scores: { reira: 2 } },
        { label: 'Café e conversa sincera', scores: { junko: 2 } }
      ]
    },
    {
      text: 'Frase sua:',
      options: [
        { label: '“Eu faço do meu jeito.”', scores: { osaki: 2 } },
        { label: '“Quero um final feliz…”', scores: { hachi: 2 } },
        { label: '“Será que eu mereço isso?”', scores: { reira: 2 } },
        { label: '“Acorda pra vida.”', scores: { junko: 2 } }
      ]
    },
    {
      text: 'Seu presente ideal:',
      options: [
        { label: 'Guitarra / ingresso de show', scores: { osaki: 2 } },
        { label: 'Morango, pelúcia, carta de amor', scores: { hachi: 2 } },
        { label: 'Microfone / algo de diva', scores: { reira: 2 } },
        { label: 'Livro / café especial', scores: { junko: 2 } }
      ]
    }
  ]
};
