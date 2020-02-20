const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;
const cloudinary = require('cloudinary').v2;
const formData = require('express-form-data')
const itemController = require('./controllers/itemController');
const userController = require('./controllers/userController')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(formData.parse())

//getting all the feed items
app.get('/feed', itemController.feed, (req, res) =>{
  res.status(200).json(res.locals.feed);
})

//creating a new item
app.post('/addListing/:user_id', itemController.addListing,(req, res)=>{
  res.status(200).send('Has been successfully added!!');
})

//post request to add images to cloudinary and saving it to the database
app.post('/uploadImage/:item_id', 
          itemController.addImage, 
          itemController.getUserId, 
          itemController.saveImage, 
          (req, res) =>{
          res.status(200).json(res.locals.imageInfo);
})


// serve static file
// app.get('/styles/style.css', (req,res) => {
//   res.status(200).sendFile(path.join(__dirname, `../client/styles/style.css`));
// })  

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
