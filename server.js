const express = require('express');
const path = require('path');
const { listQuizzes, getQuiz } = require('./data/quizzes');

const app = express();
const PORT = process.env.PORT || 3080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1h',
  etag: true
}));

app.get('/', (_req, res) => {
  res.render('index', {
    quizzes: listQuizzes(),
    title: 'Quizzes da Aiko'
  });
});

app.get('/quiz/:id', (req, res) => {
  const quiz = getQuiz(req.params.id);
  if (!quiz) {
    return res.status(404).render('error', {
      message: 'Quiz não encontrado',
      title: 'Ops'
    });
  }
  res.render('quiz', {
    quiz,
    title: quiz.title
  });
});

app.get('/api/quizzes', (_req, res) => {
  res.json(listQuizzes());
});

app.get('/api/quizzes/:id', (req, res) => {
  const quiz = getQuiz(req.params.id);
  if (!quiz) return res.status(404).json({ error: 'not_found' });
  res.json(quiz);
});

app.listen(PORT, () => {
  console.log(`Quizzes da Aiko em http://localhost:${PORT}`);
});
