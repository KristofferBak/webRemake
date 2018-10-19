const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');
const Exercise = mongoose.model('Exercise');

const getExercises = function(req, res){
    Exercise.find({})
    .exec((err, exercises) => {
        res.render('exercises',
         {title: 'Exercises',
         exercises: exercises     
        });
    });    
};

const getUserExercises = function(req,res){
    Workout.findById(req.params.workoutId)
    .populate('exercises')
    .exec((err, workout) => {
        res.render("exercises", {
            title: 'Exercises',
            exercises: workout.exercises,
            workoutId: req.params.workoutId
        });
    });
};

module.exports = {
    getExercises,
    getUserExercises
}