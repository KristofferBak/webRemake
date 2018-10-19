const mongoose = require('mongoose');
const Activity = mongoose.model('Activity');

const getActivities = function(req,res){
    Activity.find({})
    .exec((err, activities) => {
        res.render('activities', {
            title: 'Activities',
            activities: activities
        });
    })
}

module.exports ={
    getActivities
};