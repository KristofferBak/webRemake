var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlUsers = require('../controllers/users');
const ctrlWorkouts = require('../controllers/workouts');
const ctrlExercises = require('../controllers/exercises');
const ctrlActivities = require('../controllers/activities');

/* GET start page. */
router.get('/', ctrlMain.index);

//user pages
router.get('/users', ctrlUsers.getUsers);

//workout pages
router.get('/workouts', ctrlWorkouts.getWorkouts);
router.get('/user/:userId/workouts', ctrlWorkouts.getUserWorkouts);

//exercise pages
router.get('/user/:userID/workouts/:workoutId/exercises', ctrlExercises.getUserExercises);

//activity pages
router.get('/activities', ctrlActivities.getActivities);
router.get('/user/:userID/workouts/:workoutId/createActivity');

module.exports = router;
