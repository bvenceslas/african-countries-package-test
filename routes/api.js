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

// get a person
router.get('/persons', async (req, res) => {
    try {        
        const persons = await Person.find();
        return res.send(persons);
    } catch (error) {
        return res.send({errorMessage: error})
    }
});

// get a particular person
router.get('/persons/:id', async (req, res) => {
    try {        
        const person = await Person.findById(req.params.id);
        return res.send(person);
    } catch (error) {
        return res.send({errorMessage: error})
    }
});


module.exports = router;

