const router = require('express').Router();
const Person = require('../model/person.model');
const { upload } = require('../helper/helper');

// api test
router.route('/test').get(async (req, res) => {
    res.json('PicaRest API works perfectly ...' + upload);
});

// save a person
router.post('/persons', upload.single('photo'), async (req, res) => {
    const { firstName, lastName, photo } = req.body;

    try {        
        const newPerson = new Person({
            firstName: firstName,
            lastName: lastName,
            photo: req.file.path
        });
        const savePerson = newPerson.save();
        console.log(savePerson);
        return res.json({msg: 'Saved successfuly'});
    } catch (error) {
        return res.send({errorMessage: error})
    }
});

module.exports = router;

