const db = require('../models/SwapModel');
const itemController = {};
const cloudinary = require('cloudinary').v2;


cloudinary.config({ 
  cloud_name: 'swapme', 
  api_key: '664311791237882', 
  api_secret: 'QSaAUgEMAaUhC-Jl5q6oIqk9SYI' 
});

//getting the feed 
itemController.feed = (req, res, next) =>{
  //items => pull down item information -> array of imgurl
  const text = `SELECT * FROM image`;
  db.query(text)
  .then(response =>{
    const result = [];
    response.rows.forEach(function(element){
      result.push(element.img_url = element.img_url.slice(2,-2).split('\"\,"'));
    })
    // console.log('this is the response',response.rows[0].img_url.slice(2,-2).split('\"\,"'));
    res.locals.feed = result;
    // console.log(result)
    return next();
  })
  .catch(err=>{
    return next(err);
  })
}

//adding a new item
itemController.addListing = (req, res, next) => {
  const {user_id} = req.params;
  const {description, category, est_value, condition, available, item_name} = req.body;
  const text = `INSERT INTO item (description, category, est_value, condition, available, item_name, user_id)
                VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
  const values = [ description, category, est_value, condition, available, item_name, user_id];
  db.query(text, values)
    .then (resp => {
      // console.log(resp)
      return next()
    })
    .catch(err => console.log(err))
}



//Adding the image to cloudinary 
itemController.addImage = (req, res, next) => {
  const values = Object.values(req.files)
  // console.log('values in addImage:', JSON.parse(values));
  const promises = values.map(image => cloudinary.uploader.upload(image.path))
  Promise
    .all(promises)
    .then(results => {
      //creating an array of urls
      // console.log('resultssss:', typeof results[0].url)
      // console.log(JSON.parse(results[0].url))
      res.locals.imgURL = results.map(result => result.url)
      console.log('res.locals.imgURL:', res.locals.imgURL)
      next();
    })
    .catch(err => {
      console.log(err);
    })
}


//getting the userId
itemController.getUserId= (req,res, next) =>{
  const {item_id} = req.params;
  const text = `SELECT user_id FROM item i WHERE i.item_id = $1`
  const values = [item_id];
   db.query(text, values)
  .then(response => {
    // console.log('this is the response in getUserId:',response);
    res.locals.user_id = response.rows[0].user_id;
    // console.log('res.locals.user_id:',res.locals.user_id)
    res.locals.item_id = item_id;
    next();
  })
  .catch(err =>{
    return next(err);
  })
}

//saving the image and the item info in the db
itemController.saveImage =  async (req, res, next) =>{
  const {user_id, imgURL, item_id} = res.locals
  // console.log('img_url: ', imgURL)
  const text = `INSERT INTO image (img_url, item_id, user_id)
                VALUES ($1, $2, $3)
                RETURNING *`
  const values = [imgURL, item_id, user_id]
  await db.query(text, values)
  .then(response => {
    // console.log('response:',response)
    res.locals.imageInfo = [{
      "img_id": response.rows[0].img_id,
      "item_id": response.rows[0].item_id,
      "img_url": response.rows[0].img_url.slice(2,-2).split('\"\,"'),
      "user_id": response.rows[0].user_id
    }]
   
    return next();
  })
  .catch(err=>{
    return next(err);
  })

}





module.exports = itemController;
