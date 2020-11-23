const db = require('../models/model');

const sectionController = {};

/**
 * @name getSections
 * @description get all sections and titles of course
 */

sectionController.getSectionInfo = async (req, res, next) => {
  const text = `SELECT 
  sections.*, 
  courses.name, 
  courses.description
  
  FROM sections 

  LEFT OUTER JOIN courses ON courses.id = sections.course_id`;

  try {
    const data = await db.query(text);
    res.locals.sections = data.rows;
    next();
  } catch (err) {
    next(err);
  }
};

/**
 * @name sectionSignup
 * @description Inserts section signup into database
 */

sectionController.sectionSignup = async (req, res, next) => {
  const { userId, sectionId } = req.query;
  const checkIfExists = `SELECT id FROM sign_ups WHERE section_id = $1 AND user_id = $2`;
  const checkClassSize = `SELECT count(*) FROM sign_ups WHERE section_id = $1`;
  const text = `INSERT INTO sign_ups(section_id, user_id) VALUES($1, $2) RETURNING *`;
  try {
    const classSize = await db.query(checkClassSize, [sectionId]);
    const checker = await db.query(checkIfExists, [sectionId, userId]);
    if (checker.rows[0]) {
      res.json('Already Enrolled!');
    } else if (classSize.rows[0]['count'] === '10') {
      res.json('Class currently full!');
    } else {
      const data = await db.query(text, [sectionId, userId]);
      res.locals.signedup = data.rows[0];
    }
    next();
  } catch (err) {
    next(err);
  }
};

/**
 * @name deleteSignup
 * @description removes user signup to section
 */

sectionController.deleteSignup = async (req, res, next) => {
  const { userId, sectionId } = req.query;
  const checkIfExists = `SELECT id FROM sign_ups WHERE section_id = $1 AND user_id = $2`;
  const text = `DELETE FROM sign_ups WHERE section_id = $1 AND user_id = $2 RETURNING *`;
  try {
    const checker = await db.query(checkIfExists, [sectionId, userId]);
    if (checker.rows[0] === undefined) {
      res.json('Not currently enrolled!');
    } else {
      const data = await db.query(text, [sectionId, userId]);
      res.locals.signedup = data.rows;
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = sectionController;
