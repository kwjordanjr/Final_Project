const ProfileController =  require('../controllers/profile.controller');
const { Profile } = require('../models/models.profile');
module.exports = function(app){
    app.get('/api', ProfileController.index);
    app.post('/api/profile', ProfileController.createProfile);
    app.get('/api/profile', ProfileController.getAllProfiles);
    app.get('/api/profile/:email', ProfileController.getEmail);
}