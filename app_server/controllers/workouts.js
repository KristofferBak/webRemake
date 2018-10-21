const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');
const User = mongoose.model('User');

const getWorkouts = function(req,res){   
    User.find({})    
    .exec((err, workouts) => {
        res.render("workouts", {
            title: 'Workouts',
            workouts: workouts,
           // userId: req.params.userId
        });
    });
};

const getUserWorkouts = function(req,res){
    if(
        req.userId == !null || req.userId !== ""
    ){  User.findById(req.params.userId)
        .populate('workouts').exec((err, user) => {res.render("workouts", {title: 'Workouts', workouts: user.workouts,userId: req.params.userId});
        });}
        else{
            
        }
  
};

module.exports={
    getWorkouts,
    getUserWorkouts
};