var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
const ctrlUsers = require('../controllers/users');
const ctrlWorkouts = require('../controllers/workouts');
const ctrlExercises = require('../controllers/exercises');
const ctrlActivities = require('../controllers/activities');

/* GET start page. */
router.get('/', ctrlMain.index);

//user pages
router.get('/users', ctrlUsers.getUsers);

//workout pages
router.get('/workouts', ctrlWorkouts.getWorkouts);

//exercise pages
router.get('/exercises', ctrlExercises.getExercises);

//activity pages
router.get('/activities', ctrlActivities.getActivities);

module.exports = router;
