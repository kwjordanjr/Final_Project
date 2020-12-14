const { Profile } = require("../models/models.profile");

module.exports.index = (request, response) => {
    response.json({
        message: 'Hello World'
    });
}

module.exports.createProfile = (request, response) => {
    const { firstName,
            lastName,
            email,
            password
        } = request.body;
    Profile.create({
        firstName,
        lastName,
        email,
        password
    })
        .then(profile => response.json(profile))
        .catch(err => response.json(err))
}

module.exports.getAllProfiles = (request, response) => {
    Profile.find({})
        .then(profiles => response.json(profiles))
        .catch(err => response.json(err))
}

module.exports.getEmail = (request, response) => {
    Profile.find({email:request.params.email})
        .then(profile => response.json(profile))
        .catch(err => response.json(err))
}