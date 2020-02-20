const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const session = require('express-session');
const request = require('request');
const qs = require('querystring');
const url = require('url');
const randomString = require('randomstring');
const userController = require('../controllers/userController');
const itemController = require('../controllers/itemController');
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const csrfString = randomString.generate();
const redirect_uri = 'http://localhost:3000/redirect';

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '../client/index.html');
});

app.use(
  session({
    secret: randomString.generate(),
    cookie: { maxAge: 6000 },
    resave: false,
    saveUnintialized: false
  })
);

app.get('/login', (req, res, next) => {
  req.session.csrf_string = randomString.generate();
  const githubAuthUrl =
    'https://github.com/login/oauth/authorize?' +
    qs.stringify({
      client_id: 'dd3d4118d5914db565a2',
      redirect_uri: redirect_uri,
      state: req.session.csrf_string,
      scope: 'user:email'
    });
  res.redirect(githubAuthUrl);
});

app.get('*', (req, res) => {
  res.sendStatus(404);
});

app.get((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }
  };
  return res.status(defaultErr.status).json(defaultErr.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
