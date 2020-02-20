const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;
const cloudinary = require('cloudinary').v2;
const formData = require('express-form-data')
const itemController = require('./controllers/itemController');

// cloudinary.config({ 
//   cloud_name: 'swapme', 
//   api_key: '664311791237882', 
//   api_secret: 'QSaAUgEMAaUhC-Jl5q6oIqk9SYI' 
// });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(formData.parse())


//post request to add images 
app.post('/uploadImage', itemController.addImage, (req, res) =>{
  res.status(200).json(res.locals.imgURL);
})




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
