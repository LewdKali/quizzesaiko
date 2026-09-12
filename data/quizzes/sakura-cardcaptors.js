module.exports = {
  id: 'sakura-cardcaptors',
  title: 'Qual personagem de Sakura Card Captors você é?',
  subtitle: 'Sakura, Tomoyo, Syaoran ou Meiling?',
  cover: {
    emoji: '🌸',
    gradient: 'linear-gradient(135deg, #fda4af, #f9a8d4, #fde68a)',
    image: '/img/characters/ccs-sakura.jpg'
  },
  tags: ['Sakura Card Captors', 'Anime', 'Personalidade'],
  type: 'personality',
  results: {
    sakura: {
      name: 'Sakura Kinomoto',
      emoji: '🌸',
      color: '#fda4af',
      image: '/img/characters/ccs-sakura.jpg',
      blurb: 'Energia pura, coração gigante e o lema “vai dar tudo certo”. Você enfrenta o mundo com coragem fofa — e ainda corre mais que todo mundo.'
    },
    tomoyo: {
      name: 'Tomoyo Daidouji',
      emoji: '🎥',
      color: '#c4b5fd',
      image: '/img/characters/ccs-tomoyo.jpg',
      blurb: 'Elegante, leal e a melhor amiga do século. Você filma, costura o figurino e apoia quem ama sem pedir o holofote — presença silenciosa e poderosa.'
    },
    syaoran: {
      name: 'Syaoran Li',
      emoji: '🗡️',
      color: '#fbbf24',
      image: '/img/characters/ccs-syaoran.jpg',
      blurb: 'Determinado, competitivo e com um lado tsundere clássico. Você leva a missão a sério… até o coração derreter por alguém especial.'
    },
    meiling: {
      name: 'Meiling Li',
      emoji: '🥋',
      color: '#f472b6',
      image: '/img/characters/ccs-meiling.jpg',
      blurb: 'Dramática, apaixonada e com artes marciais na bagagem. Você sente tudo em volume máximo — ciúme, carinho e coragem inclusive.'
    }
  },
  questions: [
    {
      text: 'Seu papel no grupo de amigas:',
      options: [
        { label: 'A que anima todo mundo', scores: { sakura: 2 } },
        { label: 'A que organiza e documenta tudo', scores: { tomoyo: 2 } },
        { label: 'A que compete e treina duro', scores: { syaoran: 2 } },
        { label: 'A intensa que fala o que sente', scores: { meiling: 2 } }
      ]
    },
    {
      text: 'Seu “poder” preferido seria…',
      options: [
        { label: 'Cartas mágicas + fé no amanhã', scores: { sakura: 2 } },
        { label: 'Criar looks e estratégias de suporte', scores: { tomoyo: 2 } },
        { label: 'Espada / magia de combate', scores: { syaoran: 2 } },
        { label: 'Kung fu + presença marcante', scores: { meiling: 2 } }
      ]
    },
    {
      text: 'Cor que mais te representa:',
      options: [
        { label: 'Rosa / vermelho', scores: { sakura: 2 } },
        { label: 'Roxo / lilás', scores: { tomoyo: 2 } },
        { label: 'Verde / amarelo', scores: { syaoran: 2 } },
        { label: 'Rosa choque / vermelho vivo', scores: { meiling: 2 } }
      ]
    },
    {
      text: 'Diante de um mistério:',
      options: [
        { label: 'Vai lá descobrir, mesmo com medo', scores: { sakura: 2 } },
        { label: 'Prepara o kit e grava tudo', scores: { tomoyo: 2 } },
        { label: 'Estuda, analisa e age', scores: { syaoran: 2 } },
        { label: 'Já chega prontinha pra briga', scores: { meiling: 2 } }
      ]
    },
    {
      text: 'Em um crush, você…',
      options: [
        { label: 'Fica tímida e genuinamente fofa', scores: { sakura: 2 } },
        { label: 'Apoia de longe com elegância', scores: { tomoyo: 2 } },
        { label: 'Nega, fica vermelho(a), depois admite', scores: { syaoran: 2 } },
        { label: 'Declara na hora (e com ciúme)', scores: { meiling: 2 } }
      ]
    },
    {
      text: 'Seu hobby secreto:',
      options: [
        { label: 'Correr / torcida / esportes', scores: { sakura: 2 } },
        { label: 'Costura, canto, cinema', scores: { tomoyo: 2 } },
        { label: 'Treino e estudo de magia/arte', scores: { syaoran: 2 } },
        { label: 'Artes marciais e drama', scores: { meiling: 2 } }
      ]
    },
    {
      text: 'Frase sua:',
      options: [
        { label: '“Vai dar tudo certo!”', scores: { sakura: 2 } },
        { label: '“Eu acredito em você.”', scores: { tomoyo: 2 } },
        { label: '“Eu vou conseguir sozinho… (quase).”', scores: { syaoran: 2 } },
        { label: '“Ninguém mexe com o que é meu!”', scores: { meiling: 2 } }
      ]
    },
    {
      text: 'Como você apoia quem ama:',
      options: [
        { label: 'Com abraço e coragem compartilhada', scores: { sakura: 2 } },
        { label: 'Com gestos práticos e presentes pensados', scores: { tomoyo: 2 } },
        { label: 'Defendendo e treinando junto', scores: { syaoran: 2 } },
        { label: 'Com lealdade intensa (às vezes barulhenta)', scores: { meiling: 2 } }
      ]
    },
    {
      text: 'Seu animal mágico combinaria com…',
      options: [
        { label: 'Um guardião fofo que ama doce', scores: { sakura: 2 } },
        { label: 'Um companheiro elegante nos bastidores', scores: { tomoyo: 2 } },
        { label: 'Um espírito de combate e disciplina', scores: { syaoran: 2 } },
        { label: 'Um parceiro de treino explosivo', scores: { meiling: 2 } }
      ]
    },
    {
      text: 'No final do dia você quer…',
      options: [
        { label: 'Paz, amigos e um “bom trabalho”', scores: { sakura: 2 } },
        { label: 'Rever as memórias lindas que guardou', scores: { tomoyo: 2 } },
        { label: 'Sentir que evoluiu na missão', scores: { syaoran: 2 } },
        { label: 'Atenção, carinho e um pouco de caos', scores: { meiling: 2 } }
      ]
    }
  ]
};
