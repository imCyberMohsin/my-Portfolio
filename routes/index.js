const express = require('express');
const router = express.Router();
const contactFormModel = require('../models/contactForm')

// Contact Me Form
router.post('/contact', async (req, res) => {
    try{
        const newFormData = await contactFormModel.create({
            name : req.body.name,
            phone : req.body.phone,
            email : req.body.email,
            message : req.body.message,
        });
        res.redirect('/');
    } catch(err){
        console.log(err);
    }

});

module.exports = router;