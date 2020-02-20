const db = require('../models/SwapModel');
const itemController = {};
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'swapme', 
  api_key: '664311791237882', 
  api_secret: 'QSaAUgEMAaUhC-Jl5q6oIqk9SYI' 
});

itemController.addImage = (req, res, next) => {
  const values = Object.values(req.files)
  // console.log(values)
  const promises = values.map(image => cloudinary.uploader.upload(image.path))
  Promise
    .all(promises)
    .then(results => {
    // console.log('results url' , results[0].url)
      res.locals.imgURL = results[0].url 
      return next();
    })
    .catch(err => {
      console.log(err);
      })
}




module.exports = itemController;
