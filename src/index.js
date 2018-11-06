const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://backend-twitter-realtime:goweek123@ds155213.mlab.com:55213/backend-twitter-realtime', {
  useNewUrlParser: true,
});

app.get('/', (req, res) => {
  return res.send('Backend Twitter Realtime');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});