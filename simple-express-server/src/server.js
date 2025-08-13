const express = require('express');
const app = express();

const PORT = 8001;

// Add this route to respond to GET /
app.get('/', (req, res) => {
  res.send('Hello from Node server!');
});

app.listen(PORT, () => {
  console.log(`Node server listening on port ${PORT}`);
});