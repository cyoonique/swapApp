const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
require('dotenv').config()
const PORT = 3000;
const fileUpload = require('express-fileupload')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
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
