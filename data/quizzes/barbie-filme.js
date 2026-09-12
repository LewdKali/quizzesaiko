module.exports = {
  id: 'barbie-filme',
  title: 'Qual Barbie dos filmes você seria?',
  subtitle: 'Princesa, fadinha, espiã ou rockstar?',
  cover: {
    emoji: '🎀',
    gradient: 'linear-gradient(135deg, #f9a8d4, #fda4af, #c4b5fd)',
    image: '/img/characters/barbie-princess.png'
  },
  tags: ['Barbie', 'Personalidade'],
  type: 'personality',
  results: {
    princess: {
      name: 'Barbie Princesa',
      emoji: '👑',
      color: '#f9a8d4',
      image: '/img/characters/barbie-princess.png',
      blurb: 'Elegante, gentil e com um final feliz no coração. Você acredita em magia, vestidos longos e em tratar todo mundo com carinho real.'
    },
    fairy: {
      name: 'Barbie Fada',
      emoji: '🧚',
      color: '#c4b5fd',
      image: '/img/characters/barbie-fairy.svg',
      blurb: 'Sonhadora, delicada e cheia de brilho. Você transforma o ordinário em encantado — asas opcionais, magia obrigatória.'
    },
    spy: {
      name: 'Barbie Espiã',
      emoji: '🕶️',
      color: '#67e8f9',
      image: '/img/characters/barbie-spy.svg',
      blurb: 'Esperta, versátil e multilíngue em missões. Você resolve mistérios, muda de look em segundos e ainda salva o dia com estilo.'
    },
    rock: {
      name: 'Barbie Rockstar',
      emoji: '🎸',
      color: '#fb7185',
      image: '/img/characters/barbie-rock.svg',
      blurb: 'Palco, microfone e atitude. Você nasceu pra performar, reunir a banda e cantar o que sente — alto e rosa.'
    }
  },
  questions: [
    {
      text: 'Seu cenário dos sonhos:',
      options: [
        { label: 'Castelo e baile', scores: { princess: 2 } },
        { label: 'Floresta encantada', scores: { fairy: 2 } },
        { label: 'Missão secreta na cidade', scores: { spy: 2 } },
        { label: 'Show lotado', scores: { rock: 2 } }
      ]
    },
    {
      text: 'Acessório essencial:',
      options: [
        { label: 'Tiara', scores: { princess: 2 } },
        { label: 'Asas / pó mágico', scores: { fairy: 2 } },
        { label: 'Óculos / gadget', scores: { spy: 2 } },
        { label: 'Guitarra / microfone', scores: { rock: 2 } }
      ]
    },
    {
      text: 'Como você resolve problemas:',
      options: [
        { label: 'Com bondade e diplomacia', scores: { princess: 2 } },
        { label: 'Com imaginação e magia', scores: { fairy: 2 } },
        { label: 'Com plano e disfarces', scores: { spy: 2 } },
        { label: 'Com atitude e performance', scores: { rock: 2 } }
      ]
    },
    {
      text: 'Trilha sonora da sua vida:',
      options: [
        { label: 'Valsa / orquestra', scores: { princess: 2 } },
        { label: 'Canção de ninar mágica', scores: { fairy: 2 } },
        { label: 'Trilha de ação', scores: { spy: 2 } },
        { label: 'Pop-rock', scores: { rock: 2 } }
      ]
    },
    {
      text: 'Amigas te veem como:',
      options: [
        { label: 'A princesa do grupo', scores: { princess: 2 } },
        { label: 'A sonhadora', scores: { fairy: 2 } },
        { label: 'A esperta', scores: { spy: 2 } },
        { label: 'A estrela', scores: { rock: 2 } }
      ]
    },
    {
      text: 'Frase Barbie:',
      options: [
        { label: '“Todo mundo merece um final feliz.”', scores: { princess: 2 } },
        { label: '“Acredite na magia.”', scores: { fairy: 2 } },
        { label: '“Missão aceita.”', scores: { spy: 2 } },
        { label: '“Vamos fazer um show!”', scores: { rock: 2 } }
      ]
    },
    {
      text: 'Seu filme Barbie favorito seria sobre…',
      options: [
        { label: 'Um reino e uma coroa', scores: { princess: 2 } },
        { label: 'Asas e um portal mágico', scores: { fairy: 2 } },
        { label: 'Uma missão secreta internacional', scores: { spy: 2 } },
        { label: 'Uma banda e um festival', scores: { rock: 2 } }
      ]
    },
    {
      text: 'Como você anima uma amiga triste:',
      options: [
        { label: 'Com gentileza de conto de fadas', scores: { princess: 2 } },
        { label: 'Com imaginação e “e se a gente…”', scores: { fairy: 2 } },
        { label: 'Com plano prático pra resolver', scores: { spy: 2 } },
        { label: 'Com música alta e dança', scores: { rock: 2 } }
      ]
    },
    {
      text: 'Seu closet tem mais…',
      options: [
        { label: 'Vestidos longos e tiaras', scores: { princess: 2 } },
        { label: 'Asas, glitter e pastéis', scores: { fairy: 2 } },
        { label: 'Preto, óculos e casacos', scores: { spy: 2 } },
        { label: 'Jaqueta, microfone e attitude', scores: { rock: 2 } }
      ]
    },
    {
      text: 'No final do dia você quer…',
      options: [
        { label: 'Um castelo em paz', scores: { princess: 2 } },
        { label: 'Um céu cheio de estrelas mágicas', scores: { fairy: 2 } },
        { label: 'Missão cumprida com estilo', scores: { spy: 2 } },
        { label: 'Aplausos e bis', scores: { rock: 2 } }
      ]
    }
  ]
};
