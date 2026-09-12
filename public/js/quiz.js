(function () {
  const quiz = window.QUIZ;
  if (!quiz) return;

  const intro = document.getElementById('quiz-intro');
  const play = document.getElementById('quiz-play');
  const result = document.getElementById('quiz-result');
  const btnStart = document.getElementById('btn-start');
  const btnRetry = document.getElementById('btn-retry');
  const btnShare = document.getElementById('btn-share');
  const questionText = document.getElementById('question-text');
  const optionsEl = document.getElementById('options');
  const progressBar = document.getElementById('progress-bar');
  const progressLabel = document.getElementById('progress-label');
  const resultCard = document.getElementById('result-card');

  let index = 0;
  let scores = {};
  let correctCount = 0;
  let shareText = '';

  function show(panel) {
    intro.hidden = panel !== 'intro';
    play.hidden = panel !== 'play';
    result.hidden = panel !== 'result';
  }

  function reset() {
    index = 0;
    scores = {};
    correctCount = 0;
    shareText = '';
  }

  function start() {
    reset();
    show('play');
    renderQuestion();
  }

  function renderQuestion() {
    const q = quiz.questions[index];
    const total = quiz.questions.length;
    progressBar.style.width = `${(index / total) * 100}%`;
    progressLabel.textContent = `Pergunta ${index + 1} de ${total}`;
    questionText.textContent = q.text;
    optionsEl.innerHTML = '';

    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option';
      btn.textContent = opt.label;
      btn.addEventListener('click', () => onAnswer(opt, btn));
      optionsEl.appendChild(btn);
      btn.style.animationDelay = `${i * 40}ms`;
    });
  }

  function onAnswer(opt, btn) {
    const buttons = [...optionsEl.querySelectorAll('.option')];
    buttons.forEach((b) => { b.disabled = true; });

    if (quiz.type === 'trivia') {
      const correct = quiz.questions[index].options.find((o) => o.correct);
      buttons.forEach((b) => {
        if (correct && b.textContent === correct.label) b.classList.add('option--correct');
      });
      if (opt.correct) {
        correctCount += 1;
        btn.classList.add('option--correct');
      } else {
        btn.classList.add('option--wrong');
      }
      setTimeout(next, 700);
      return;
    }

    Object.entries(opt.scores || {}).forEach(([key, val]) => {
      scores[key] = (scores[key] || 0) + val;
    });
    btn.classList.add('option--correct');
    setTimeout(next, 280);
  }

  function next() {
    index += 1;
    if (index >= quiz.questions.length) {
      progressBar.style.width = '100%';
      finish();
      return;
    }
    renderQuestion();
  }

  function finish() {
    show('result');
    if (quiz.type === 'trivia') {
      const total = quiz.questions.length;
      const pct = Math.round((correctCount / total) * 100);
      let vibe = 'Townsville precisa de você treinando mais!';
      if (pct >= 90) vibe = 'Superpoderosa nível máximo!';
      else if (pct >= 70) vibe = 'Quase uma Powerpuff de carteirinha!';
      else if (pct >= 50) vibe = 'Boa memória — falta pouco!';

      shareText = `Acertei ${correctCount}/${total} (${pct}%) no quiz "${quiz.title}" · Quizzes da Aiko`;
      const coverImg = quiz.cover.image
        ? `<img class="result-card__img" src="${quiz.cover.image}" alt="">`
        : `<span class="result-card__emoji">${quiz.cover.emoji}</span>`;
      resultCard.innerHTML = `
        ${coverImg}
        <p class="result-card__label">seu resultado</p>
        <h2 class="result-card__name">${correctCount} de ${total}</h2>
        <p class="result-card__blurb">${vibe}</p>
        <p class="result-card__score">${pct}% de acerto</p>
      `;
      saveHistory({ kind: 'trivia', score: correctCount, total, pct });
      return;
    }

    const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
    const key = winner ? winner[0] : Object.keys(quiz.results)[0];
    const r = quiz.results[key];
    shareText = `Eu sou ${r.name} ${r.emoji} no quiz "${quiz.title}" · Quizzes da Aiko`;
    const portrait = r.image
      ? `<img class="result-card__img" src="${r.image}" alt="${r.name}">`
      : `<span class="result-card__emoji">${r.emoji}</span>`;
    resultCard.innerHTML = `
      ${portrait}
      <p class="result-card__label">você é</p>
      <h2 class="result-card__name" style="color:${r.color || 'var(--accent-soft)'}">${r.name}</h2>
      <p class="result-card__blurb">${r.blurb}</p>
    `;
    saveHistory({ kind: 'personality', resultKey: key, resultName: r.name });
  }

  function saveHistory(payload) {
    try {
      const key = 'aiko-quizzes-history';
      const prev = JSON.parse(localStorage.getItem(key) || '[]');
      prev.unshift({
        quizId: quiz.id,
        title: quiz.title,
        at: new Date().toISOString(),
        ...payload
      });
      localStorage.setItem(key, JSON.stringify(prev.slice(0, 30)));
    } catch (_) { /* ignore */ }
  }

  async function share() {
    try {
      await navigator.clipboard.writeText(shareText);
      btnShare.textContent = 'Copiado!';
      setTimeout(() => { btnShare.textContent = 'Copiar resultado'; }, 1600);
    } catch (_) {
      btnShare.textContent = 'Não deu pra copiar';
      setTimeout(() => { btnShare.textContent = 'Copiar resultado'; }, 1600);
    }
  }

  btnStart.addEventListener('click', start);
  btnRetry.addEventListener('click', start);
  btnShare.addEventListener('click', share);
})();
