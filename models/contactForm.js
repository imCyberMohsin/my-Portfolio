const mongoose = require('mongoose');

const contactForm = mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    },
    message: {
        type: String,
    },
})

module.exports = mongoose.model('contactForm', contactForm);