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

const createUser = function(req, res) {
    User.create({
        name: req.body.name,
        email: req.body.email
        }, (err, user) => {
            res.redirect('/users');
        });
};

const goToRegister = function(req, res){
    res.render('register', {
        title: 'Register new user, bitch'
    })
}

module.exports = {
    getUsers,
    createUser,
    goToRegister
};