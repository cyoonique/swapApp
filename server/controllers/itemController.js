const db = require('../models/SwapModel');
const itemController = {};
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'swapme', 
  api_key: '664311791237882', 
  api_secret: 'QSaAUgEMAaUhC-Jl5q6oIqk9SYI' 
});




module.exports = itemController;
