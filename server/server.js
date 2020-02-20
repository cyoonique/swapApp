const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;
const cloudinary = require('cloudinary').v2;
const formData = require('express-form-data')
// const fileupload = require('express-fileupload');
const itemController = require('./controllers/itemController');
const userController = require('./controllers/userController')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(formData.parse())
// app.use(fileupload({useTempFiles:true}));


//serve the stylesheet and the index.js


//post request to add images 
app.post('/uploadImage', itemController.addImage, 
// itemController.getUserId, 
// itemController.saveImage, 
(req, res) =>{
  res.status(200).json(res.locals.imgURL);
})

//get request 
app.get('/items', itemController.getItems, (req, res) =>{
  res.status(200)
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
