const db = require('../models/SwapModel');
const userController = {};

// find and validate user; check if user already exists in database

//add user
userController.createUser = (req, res, next) => {
  // const { username, email } ?
  // const values = [username, email] ?
  const query = `INSERT INTO user (user_name, email)
                 VALUES ($1, $2)
                 RETURNING *`;
  db.query(query, values)
    .then(data => {
      res.locals.users = data.rows;
      next();
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};

//get user history

module.exports = userController;
