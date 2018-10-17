const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const activitySchema = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    workoutId:{
        type: Schema.Types.ObjectId,
        ref: 'Workout'
    }    
});

const Activity = mongoose.model('Activity', activitySchema);