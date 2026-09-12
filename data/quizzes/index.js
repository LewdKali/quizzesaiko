const ppgQuemSouEu = require('./ppg-quem-sou-eu');
const ppgTrivia = require('./ppg-trivia');
const ppgVilao = require('./ppg-vilao');
const sailorMoon = require('./sailor-moon');
const winx = require('./winx');
const totallySpies = require('./totally-spies');
const miraculous = require('./miraculous');
const barbie = require('./barbie-filme');

const QUIZZES = [
  ppgQuemSouEu,
  ppgTrivia,
  ppgVilao,
  sailorMoon,
  winx,
  totallySpies,
  miraculous,
  barbie
];

function listQuizzes() {
  return QUIZZES.map((q) => ({
    id: q.id,
    title: q.title,
    subtitle: q.subtitle,
    cover: q.cover,
    tags: q.tags,
    type: q.type,
    questionCount: q.questions.length
  }));
}

function getQuiz(id) {
  return QUIZZES.find((q) => q.id === id) || null;
}

module.exports = { listQuizzes, getQuiz, QUIZZES };
