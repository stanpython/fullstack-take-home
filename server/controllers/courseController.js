const db = require("../models/model");

const courseController = {};

/**
 * @name getCourses
 * @description selects courses by ID and loads them into the res.locals.courses array
 */

courseController.getCourseContent = async (req, res, next) => {
  const text = `SELECT * FROM sessions WHERE course_id = $1`;
  const { courseId } = req.query;
  try {
    const courseData = await db.query(text, [courseId]);
    res.locals.courses = courseData.rows;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = courseController;
