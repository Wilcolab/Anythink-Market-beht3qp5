const express = require('express');
const app = express();

app.use(express.json());

let tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box",
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

// GET /
app.get('/', (req, res) => {
  res.send('Hello World');
});

// POST /tasks
app.post('/tasks', (req, res) => {
  const { text } = req.body;
  if (typeof text === 'string' && text.trim() !== '') {
    tasks.push(text);
    res.json({ message: 'Task added successfully' });
  } else {
    res.status(400).json({ error: 'Invalid task text' });
  }
});

// GET /tasks
app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

const PORT = 8001;
app.listen(PORT, () => {
  console.log(`Node server listening on port ${PORT}`);
});