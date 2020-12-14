const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    password: {type: String}

}, { timestamps: true });
module.exports.Profile = mongoose.model('Profile', ProfileSchema);