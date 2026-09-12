module.exports = {
  id: 'madoka-magica',
  title: 'Qual magical girl de Madoka Magica você é?',
  subtitle: 'Madoka, Homura, Sayaka, Mami ou Kyoko?',
  cover: {
    emoji: '🎀',
    gradient: 'linear-gradient(135deg, #f9a8d4, #a78bfa, #111827)',
    image: '/img/characters/madoka-madoka.jpg'
  },
  tags: ['Madoka Magica', 'Anime', 'Personalidade'],
  type: 'personality',
  results: {
    madoka: {
      name: 'Madoka Kaname',
      emoji: '🌸',
      color: '#f9a8d4',
      image: '/img/characters/madoka-madoka.jpg',
      blurb: 'Gentil, esperançosa e com um potencial absurdo. Você quer ajudar o mundo — mesmo quando o preço é alto demais.'
    },
    homura: {
      name: 'Homura Akemi',
      emoji: '⏳',
      color: '#a78bfa',
      image: '/img/characters/madoka-homura.jpg',
      blurb: 'Determinada, solitária e disposta a recomeçar mil vezes. Você protege quem ama com estratégia, sacrifício e um olhar gelado… que esconde tudo.'
    },
    sayaka: {
      name: 'Sayaka Miki',
      emoji: '⚔️',
      color: '#38bdf8',
      image: '/img/characters/madoka-sayaka.jpg',
      blurb: 'Idealista, justa e intensa. Você luta pelo “certo” — e sofre quando o mundo não corresponde ao que o coração esperava.'
    },
    mami: {
      name: 'Mami Tomoe',
      emoji: '🎩',
      color: '#fbbf24',
      image: '/img/characters/madoka-mami.jpg',
      blurb: 'Elegante, experiente e a “senpai” do time. Você ensina, protege e mantém a postura… mesmo carregando solidão por baixo do chapéu.'
    },
    kyoko: {
      name: 'Kyoko Sakura',
      emoji: '🍎',
      color: '#ef4444',
      image: '/img/characters/madoka-kyoko.jpg',
      blurb: 'Durona por fora, ferida por dentro. Você aprendeu a sobreviver sozinha — e esconde o carinho atrás de provocação e maçã.'
    }
  },
  questions: [
    {
      text: 'Seu desejo mais profundo seria…',
      options: [
        { label: 'Fazer o mundo melhor pra todo mundo', scores: { madoka: 2 } },
        { label: 'Proteger uma pessoa específica a qualquer custo', scores: { homura: 2 } },
        { label: 'Curar / salvar alguém que ama', scores: { sayaka: 2 } },
        { label: 'Ter força e propósito pra seguir sozinha', scores: { mami: 2 } },
        { label: 'Garantir sobrevivência (e comida)', scores: { kyoko: 2 } }
      ]
    },
    {
      text: 'Sua arma mágica:',
      options: [
        { label: 'Arco de luz', scores: { madoka: 2 } },
        { label: 'Escudo do tempo + arsenal', scores: { homura: 2 } },
        { label: 'Espadas', scores: { sayaka: 2 } },
        { label: 'Mosquetes / fitas', scores: { mami: 2 } },
        { label: 'Lança', scores: { kyoko: 2 } }
      ]
    },
    {
      text: 'Cor da sua Soul Gem vibe:',
      options: [
        { label: 'Rosa', scores: { madoka: 2 } },
        { label: 'Roxo', scores: { homura: 2 } },
        { label: 'Azul', scores: { sayaka: 2 } },
        { label: 'Amarelo / dourado', scores: { mami: 2 } },
        { label: 'Vermelho', scores: { kyoko: 2 } }
      ]
    },
    {
      text: 'Quando a vida fica injusta:',
      options: [
        { label: 'Ainda tenta acreditar no bem', scores: { madoka: 2 } },
        { label: 'Refaz o plano até funcionar', scores: { homura: 2 } },
        { label: 'Fica com raiva do sistema', scores: { sayaka: 2 } },
        { label: 'Mantém a postura e ensina as outras', scores: { mami: 2 } },
        { label: 'Endurece e cuida de si primeiro', scores: { kyoko: 2 } }
      ]
    },
    {
      text: 'No grupo de amigas você é…',
      options: [
        { label: 'O coração esperançoso', scores: { madoka: 2 } },
        { label: 'A que carrega o peso sozinha', scores: { homura: 2 } },
        { label: 'A idealista brava', scores: { sayaka: 2 } },
        { label: 'A mentora / mais velha', scores: { mami: 2 } },
        { label: 'A sarcástica que no fundo se importa', scores: { kyoko: 2 } }
      ]
    },
    {
      text: 'Seu lanche de batalha:',
      options: [
        { label: 'Doce caseiro / algo fofo', scores: { madoka: 2 } },
        { label: 'Quase esquece de comer', scores: { homura: 2 } },
        { label: 'Algo rápido no caminho', scores: { sayaka: 2 } },
        { label: 'Chá e elegância', scores: { mami: 2 } },
        { label: 'Maçã (óbvio)', scores: { kyoko: 2 } }
      ]
    },
    {
      text: 'Frase sua:',
      options: [
        { label: '“Eu quero ajudar.”', scores: { madoka: 2 } },
        { label: '“Dessa vez vai ser diferente.”', scores: { homura: 2 } },
        { label: '“Eu luto pelo que é certo.”', scores: { sayaka: 2 } },
        { label: '“Deixa com a senpai.”', scores: { mami: 2 } },
        { label: '“O mundo não é tão bonitinho.”', scores: { kyoko: 2 } }
      ]
    },
    {
      text: 'Seu maior ponto forte:',
      options: [
        { label: 'Empatia', scores: { madoka: 2 } },
        { label: 'Persistência', scores: { homura: 2 } },
        { label: 'Senso de justiça', scores: { sayaka: 2 } },
        { label: 'Experiência / compostura', scores: { mami: 2 } },
        { label: 'Sobrevivência / honestidade crua', scores: { kyoko: 2 } }
      ]
    },
    {
      text: 'Como você lida com solidão:',
      options: [
        { label: 'Busca as amigas', scores: { madoka: 2 } },
        { label: 'Aceita carregar sozinha', scores: { homura: 2 } },
        { label: 'Fica inquieta e explosiva', scores: { sayaka: 2 } },
        { label: 'Esconde atrás de elegância', scores: { mami: 2 } },
        { label: 'Finge que não precisa de ninguém', scores: { kyoko: 2 } }
      ]
    },
    {
      text: 'Se virasse magical girl de verdade:',
      options: [
        { label: 'Pelo bem coletivo', scores: { madoka: 2 } },
        { label: 'Por uma pessoa', scores: { homura: 2 } },
        { label: 'Por um ideal / romance justo', scores: { sayaka: 2 } },
        { label: 'Por dever e proteção', scores: { mami: 2 } },
        { label: 'Por necessidade — e ponto', scores: { kyoko: 2 } }
      ]
    }
  ]
};
