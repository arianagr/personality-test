const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

// Root route to verify server is running
app.get('/', (req, res) => {
  res.send('Mock server is running.');
});

// Questions route
app.get('/mock/questions', (req, res) => {
  res.json([
    {
      text: 'Do you enjoy social gatherings?',
      answers: [
        { text: 'Yes, I love them!', value: 5 },
        { text: 'I prefer to avoid them.', value: 0 },
      ],
    },
    {
      text: 'Do you find it easy to meet new people?',
      answers: [
        { text: 'Yes, it’s easy for me.', value: 5 },
        { text: 'Not really.', value: 0 },
      ],
    },
    {
      text: 'Do you like spending time alone?',
      answers: [
        { text: 'Yes, I need my alone time.', value: 0 },
        { text: 'No, I prefer company.', value: 5 },
      ],
    },
    {
      text: 'Do you enjoy being the center of attention?',
      answers: [
        { text: 'Yes, it’s exciting!', value: 5 },
        { text: 'No, it makes me uncomfortable.', value: 0 },
      ],
    },
    {
      text: 'Do you feel more energized after spending time with people?',
      answers: [
        { text: 'Yes, I feel recharged.', value: 5 },
        { text: 'No, I feel drained.', value: 0 },
      ],
    },
  ]);
});

// Answer route to determine personality based on score
app.get('/mock/answer', (req, res) => {
  const score = parseInt(req.query.score, 10);
  if (isNaN(score)) {
    res.status(400).send('Invalid score');
    return;
  }

  let personality = 'Introvert';
  if (score >= 10) {
    personality = 'Extrovert';
  }

  res.json({ personality });
});


// Start server
app.listen(port, () => {
  console.log(`Mock server listening at http://localhost:${port}`);

});
