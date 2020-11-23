const db = require('../models/model');

const userController = {};

/**
 * @name getUserInfo
 * @description selects user information and loads them into the res.locals.user object
 */

userController.getUserInfo = async (req, res, next) => {
  const { name, email } = req.query;
  const text = `SELECT users.*,
  ARRAY(SELECT section_id FROM sign_ups WHERE user_id = users.id) AS sections_enrolled
  FROM users 
  LEFT OUTER JOIN sign_ups ON users.id = sign_ups.user_id
  WHERE name = $1 AND email = $2`;
  try {
    const userData = await db.query(text, [name, email]);
    res.locals.user = userData.rows[0];
    next();
  } catch (err) {
    next(err);
  }
};

userController.userSignupInfo = async (req, res, next) => {
  const text = `SELECT users.*, 
  sections.id AS section_id 
  
  FROM users
  
  LEFT OUTER JOIN sign_ups ON users.id = sign_ups.user_id
  LEFT OUTER JOIN sections ON sections.id = sign_ups.section_id`;

  try {
    const userSignedUp = await db.query(text);
    res.locals.usersSignedUp = userSignedUp.rows;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = userController;
