const mongoose = require('mongoose');
//const crypto = require('crypto');
//const jwt = require('jsonwebtoken');

var Schema = mongoose.Schema;

const userSchema = Schema({

    email:{
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },    
    workouts: [{
        type: Schema.Types.ObjectId,
        ref: 'Workout'
    }]
    //,
    
   // hash: String,
    //salt: String
});

const User = mongoose.model('User', userSchema);