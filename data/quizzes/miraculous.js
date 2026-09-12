module.exports = {
  id: 'miraculous',
  title: 'Qual Miraculous combina com você?',
  subtitle: 'Ladybug, Cat Noir, Rena Rouge, Queen Bee…',
  cover: {
    emoji: '🐞',
    gradient: 'linear-gradient(135deg, #ef4444, #111827, #fbbf24)',
    image: '/img/characters/miraculous-ladybug.png'
  },
  tags: ['Miraculous', 'Personalidade'],
  type: 'personality',
  results: {
    ladybug: {
      name: 'Ladybug',
      emoji: '🐞',
      color: '#ef4444',
      image: '/img/characters/miraculous-ladybug.png',
      blurb: 'Responsável, criativa e o coração da equipe. Você conserta o caos (literalmente) e ainda entrega o Lucky Charm na hora certa.'
    },
    chat: {
      name: 'Cat Noir',
      emoji: '🐈‍⬛',
      color: '#a3a3a3',
      image: '/img/characters/miraculous-chat.png',
      blurb: 'Charmoso, brincalhão e leal. Você faz piada no meio do perigo e protege quem ama com garras afiadas… e coração mole.'
    },
    rena: {
      name: 'Rena Rouge',
      emoji: '🦊',
      color: '#f97316',
      image: '/img/characters/miraculous-rena.svg',
      blurb: 'Melhor amiga, ilusionista e suporte emocional. Você cria distrações perfeitas e está sempre ao lado de quem precisa.'
    },
    bee: {
      name: 'Queen Bee / Vesperia',
      emoji: '🐝',
      color: '#facc15',
      image: '/img/characters/miraculous-bee.svg',
      blurb: 'Confiante, intensa e feita para brilhar. Você quer o holofote — e às vezes aprende a dividir a luz com o time.'
    }
  },
  questions: [
    {
      text: 'Seu estilo de herói:',
      options: [
        { label: 'Planejar e consertar tudo', scores: { ladybug: 2 } },
        { label: 'Atacar com charme e ousadia', scores: { chat: 2 } },
        { label: 'Ajudar nas sombras com truques', scores: { rena: 2 } },
        { label: 'Brilhar e liderar o ataque', scores: { bee: 2 } }
      ]
    },
    {
      text: 'No grupo de amigas:',
      options: [
        { label: 'A que organiza e resolve', scores: { ladybug: 2 } },
        { label: 'A que zoa e flerta', scores: { chat: 2 } },
        { label: 'A confidente / melhor amiga', scores: { rena: 2 } },
        { label: 'A popular / rainha do rolê', scores: { bee: 2 } }
      ]
    },
    {
      text: 'Animal mágico:',
      options: [
        { label: 'Joaninha', scores: { ladybug: 2 } },
        { label: 'Gato preto', scores: { chat: 2 } },
        { label: 'Raposa', scores: { rena: 2 } },
        { label: 'Abelha', scores: { bee: 2 } }
      ]
    },
    {
      text: 'Seu ponto forte:',
      options: [
        { label: 'Criatividade sob pressão', scores: { ladybug: 2 } },
        { label: 'Coragem + humor', scores: { chat: 2 } },
        { label: 'Empatia e disfarce', scores: { rena: 2 } },
        { label: 'Confiança e determinação', scores: { bee: 2 } }
      ]
    },
    {
      text: 'Frase sua:',
      options: [
        { label: '“Spots on!”', scores: { ladybug: 2 } },
        { label: '“Claws out!”', scores: { chat: 2 } },
        { label: '“Mirage!”', scores: { rena: 2 } },
        { label: '“Buzz off!” / “Venom!”', scores: { bee: 2 } }
      ]
    },
    {
      text: 'O que mais te motiva:',
      options: [
        { label: 'Proteger Paris / quem ama', scores: { ladybug: 2 } },
        { label: 'Impressionar alguém especial', scores: { chat: 2 } },
        { label: 'Estar ao lado das amigas', scores: { rena: 2 } },
        { label: 'Ser reconhecida como heroína', scores: { bee: 2 } }
      ]
    },
    {
      text: 'Seu Kwami combinaria com…',
      options: [
        { label: 'Sorte e criação (Tikki)', scores: { ladybug: 2 } },
        { label: 'Destruição e humor (Plagg)', scores: { chat: 2 } },
        { label: 'Ilusão (Trixx)', scores: { rena: 2 } },
        { label: 'Subjugação / brilho (Pollen)', scores: { bee: 2 } }
      ]
    },
    {
      text: 'Fora da máscara você é…',
      options: [
        { label: 'Responsável e um pouco ansiosa', scores: { ladybug: 2 } },
        { label: 'Descolada e brincalhona', scores: { chat: 2 } },
        { label: 'A melhor amiga confidente', scores: { rena: 2 } },
        { label: 'Popular e determinada', scores: { bee: 2 } }
      ]
    },
    {
      text: 'Em uma akumatização perto de você:',
      options: [
        { label: 'Monta o plano e usa o Lucky Charm', scores: { ladybug: 2 } },
        { label: 'Distrai com piada e Cataclysm', scores: { chat: 2 } },
        { label: 'Cria uma ilusão pra ajudar', scores: { rena: 2 } },
        { label: 'Partiu Venom no vilão', scores: { bee: 2 } }
      ]
    },
    {
      text: 'Seu romance ideal:',
      options: [
        { label: 'Alguém parceiro de missão', scores: { ladybug: 2 } },
        { label: 'Alguém pra flertar o dia todo', scores: { chat: 2 } },
        { label: 'Alguém que vira amizade forte', scores: { rena: 2 } },
        { label: 'Alguém que te admira no holofote', scores: { bee: 2 } }
      ]
    }
  ]
};
