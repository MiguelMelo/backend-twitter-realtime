const express = require('express');
const mongoose = require('mongoose');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://backend-twitter-realtime:goweek123@ds155213.mlab.com:55213/backend-twitter-realtime', {
  useNewUrlParser: true,
});

app.use((req, use, next) => {
  req.io = io;

  return next();
});

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});