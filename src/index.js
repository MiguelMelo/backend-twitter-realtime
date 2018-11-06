const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send('Backend Twitter Realtime');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});