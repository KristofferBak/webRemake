const mongoose = require('mongoose');
const User = mongoose.model('User');

const getUsers = function(req, res){
    User.find({}).exec((err, users) => {
        res.render('users', {
            title: 'Users',
            users: users
        });
    });
};

module.exports = {
    getUsers
};

/*module.exports.getUsers = function(req, res){
    res.render('users', {title: 'Users'});
};*/