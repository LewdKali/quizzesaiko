module.exports = {
  id: 'ppg-quem-sou-eu',
  title: 'Qual Menina Superpoderosa você é?',
  subtitle: 'Descobre se você é Florzinha, Lindinha ou Docinho',
  cover: {
    emoji: '💪',
    gradient: 'linear-gradient(135deg, #ff7eb3, #7ec8ff, #7dffb3)',
    image: '/img/characters/ppg-trio.png'
  },
  tags: ['Meninas Superpoderosas', 'Personalidade'],
  type: 'personality',
  results: {
    blossom: {
      name: 'Florzinha',
      emoji: '🌸',
      color: '#ff7eb3',
      image: '/img/characters/ppg-blossom.png',
      blurb: 'Líder nato, inteligente e com um laço rosa icônico. Você organiza o grupo, tem ideias brilhantes e sempre tenta fazer a coisa certa — mesmo quando o mundo (ou as irmãs) bagunça o plano.'
    },
    bubbles: {
      name: 'Lindinha',
      emoji: '💙',
      color: '#7ec8ff',
      image: '/img/characters/ppg-bubbles.png',
      blurb: 'Doce, sensível e cheia de coração. Você ama animais, cores pastel e deixar todo mundo feliz. Quando irritada, porém… vira uma força da natureza. Ninguém espera a fúria da fofura!'
    },
    buttercup: {
      name: 'Docinho',
      emoji: '💚',
      color: '#7dffb3',
      image: '/img/characters/ppg-buttercup.png',
      blurb: 'Corajosa, direta e pronta pra ação. Você não tem medo de confrontar problemas de frente, adora uma boa luta (metafórica ou não) e tem um humor afiado. Tough as nails, soft with the right people.'
    }
  },
  questions: [
    {
      text: 'Seu plano pro sábado perfeito é…',
      options: [
        { label: 'Organizar um rolê com roteiro e playlist', scores: { blossom: 2 } },
        { label: 'Ficar em casa com séries, pelúcias e snacks', scores: { bubbles: 2 } },
        { label: 'Esporte, jogo competitivo ou aventura na rua', scores: { buttercup: 2 } }
      ]
    },
    {
      text: 'Na briga de amigas, você…',
      options: [
        { label: 'Medeia e propõe um acordo justo', scores: { blossom: 2 } },
        { label: 'Fica mal e tenta abraçar as duas', scores: { bubbles: 2 } },
        { label: 'Fala a verdade nua e crua', scores: { buttercup: 2 } }
      ]
    },
    {
      text: 'Sua cor vibe do momento:',
      options: [
        { label: 'Rosa / vermelho', scores: { blossom: 2 } },
        { label: 'Azul bebê / lilás', scores: { bubbles: 2 } },
        { label: 'Verde / preto', scores: { buttercup: 2 } }
      ]
    },
    {
      text: 'No trabalho em grupo da faculdade/escola:',
      options: [
        { label: 'Monta o slide e divide as tarefas', scores: { blossom: 2 } },
        { label: 'Cuida do visual e anima o time', scores: { bubbles: 2 } },
        { label: 'Faz a parte difícil e cobra quem enrola', scores: { buttercup: 2 } }
      ]
    },
    {
      text: 'Seu superpoder secreto seria…',
      options: [
        { label: 'Gelo / estratégia mental', scores: { blossom: 2 } },
        { label: 'Falar com animais / raio laser fofo', scores: { bubbles: 2 } },
        { label: 'Força bruta / tornado de socos', scores: { buttercup: 2 } }
      ]
    },
    {
      text: 'Quando alguém te irrita:',
      options: [
        { label: 'Respira, explica o problema com lógica', scores: { blossom: 2 } },
        { label: 'Fica quietinha… até explodir', scores: { bubbles: 2 } },
        { label: 'Responde na hora, sem filtro', scores: { buttercup: 2 } }
      ]
    },
    {
      text: 'Seu snack favorito combina com:',
      options: [
        { label: 'Algo “nice”: cookie, milkshake rosa', scores: { blossom: 1, bubbles: 1 } },
        { label: 'Doces fofos, marshmallow, gelatina', scores: { bubbles: 2 } },
        { label: 'Salgado, picante, energia pra batalha', scores: { buttercup: 2 } }
      ]
    },
    {
      text: 'Amigas descrevem você como…',
      options: [
        { label: 'A chefe do grupo (no bom sentido)', scores: { blossom: 2 } },
        { label: 'O coração do grupo', scores: { bubbles: 2 } },
        { label: 'A que não tem medo de nada', scores: { buttercup: 2 } }
      ]
    },
    {
      text: 'Seu estilo de falar é…',
      options: [
        { label: 'Clara, educada e convincente', scores: { blossom: 2 } },
        { label: 'Doce, cheia de “hihi” e carinho', scores: { bubbles: 2 } },
        { label: 'Reta, sarcástica e sem rodeios', scores: { buttercup: 2 } }
      ]
    },
    {
      text: 'No karaoke com as amigas:',
      options: [
        { label: 'Escolhe a música e conduz o grupo', scores: { blossom: 2 } },
        { label: 'Canta a mais fofa / emo', scores: { bubbles: 2 } },
        { label: 'Pega o microfone e explode no palco', scores: { buttercup: 2 } }
      ]
    },
    {
      text: 'Seu animal espiritual:',
      options: [
        { label: 'Unicórnio / águia', scores: { blossom: 2 } },
        { label: 'Polvo / coelhinho / borboleta', scores: { bubbles: 2 } },
        { label: 'Pantera / dragão', scores: { buttercup: 2 } }
      ]
    },
    {
      text: 'Diante de um problema grande:',
      options: [
        { label: 'Faz um plano A, B e C', scores: { blossom: 2 } },
        { label: 'Pede ajuda e vai com o coração', scores: { bubbles: 2 } },
        { label: 'Enfrenta de frente, agora', scores: { buttercup: 2 } }
      ]
    },
    {
      text: 'Seu quarto parece…',
      options: [
        { label: 'Organizado, com quadro de metas', scores: { blossom: 2 } },
        { label: 'Pelúcias, adesivos e bagunça fofa', scores: { bubbles: 2 } },
        { label: 'Poster de ação, peso e vibe “don’t mess”', scores: { buttercup: 2 } }
      ]
    },
    {
      text: 'Em um filme, você seria…',
      options: [
        { label: 'A heroína estrategista', scores: { blossom: 2 } },
        { label: 'A sidekick adorável que salva o dia', scores: { bubbles: 2 } },
        { label: 'A que dá o golpe final', scores: { buttercup: 2 } }
      ]
    },
    {
      text: 'Como você demonstra carinho?',
      options: [
        { label: 'Cuidando e resolvendo as coisas da pessoa', scores: { blossom: 2 } },
        { label: 'Com abraço, presente e mensagem fofa', scores: { bubbles: 2 } },
        { label: 'Defendendo ela de qualquer um', scores: { buttercup: 2 } }
      ]
    }
  ]
};
