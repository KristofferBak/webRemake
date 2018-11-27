
const mongoose = require('mongoose');

require('./exercise');
require('./workout');
require('./user');
require('./activity');

var dbURI = 'mongodb://localhost/webRemake';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
    });
    mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
    });
    mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
    });