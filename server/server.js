const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const session = require('express-session');

const qs = require('querystring');

const randomString = require('randomstring');
const userController = require('./controllers/userController');
const itemController = require('./controllers/itemController');
const PORT = 3000;

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(
  '382771863992-q5lmlrvur70gcssgknk8mlrr8qk9b64c.apps.googleusercontent.com'
);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const csrfString = randomString.generate();
const redirect_uri = 'http://localhost:3000/redirect';

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '../client/index.html');
});

// app.use(
//   session({
//     secret: randomString.generate(),
//     cookie: { maxAge: 6000 },
//     resave: false,
//     saveUnintialized: false
//   })
// );

app.get('/validate', (req, res, next) => {
  console.log(client);
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience:
        '382771863992-q5lmlrvur70gcssgknk8mlrr8qk9b64c.apps.googleusercontent.com'
    });
    const payload = ticket.getPayload();
    const userId = payload['sub'];
  }
  verify().catch(console.error);
});

app.post('/validate', (req, res, next) => {});

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
