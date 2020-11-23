const express = require('express');
const courseController = require('../controllers/courseController');
const userController = require('../controllers/userController');
const sectionController = require('../controllers/sectionController');

const router = express.Router();

router.get('/courses', courseController.getCourseContent, (req, res) => {
  res.status(200).json(res.locals.courses);
});

router.get('/user', userController.getUserInfo, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.get('/user/signups', userController.userSignupInfo, (req, res) => {
  res.status(200).json(res.locals.usersSignedUp);
});

router.get('/sections', sectionController.getSectionInfo, (req, res) => {
  res.status(200).json(res.locals.sections);
});

router.post('/sections/enrollment', sectionController.sectionSignup, (req, res) => {
  res.status(200).json(res.locals.signedup);
});

router.delete('/sections/enrollment', sectionController.deleteSignup, (req, res) => {
  res.status(200).json(res.locals.signedup);
});

module.exports = router;
