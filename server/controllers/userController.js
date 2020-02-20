const db = require('../models/SwapModel');
const userController = {};
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(
  '382771863992-hu7olpe3sfiae910a1urf4orija474oj.apps.googleusercontent.com'
);

// find and validate user; check if user already exists in database
userController.verifyUser = (req, res, next) => {
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: req.headers.authorization,
      audience:
        '382771863992-hu7olpe3sfiae910a1urf4orija474oj.apps.googleusercontent.com'
    });
    const payload = ticket.getPayload();
    const userId = payload['sub'];
    next();
  }
  verify().catch(console.error);
};

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
