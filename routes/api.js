const router = require('express').Router();
const Person = require('../model/person.model');


router.route('/testAPI').get(async (req, res) => {
    res.json('PicaRest API works perfectly ...');
});


router.post('/persons', async (req, res) => {
    const { firstName, lastName, photo } = req.body;

    try {        
        const newPerson = new Person(req.body);
        const savePerson = newPerson.save();
        console.log(savePerson);
        return res.json({msg: 'Saved successfuly'});
    } catch (error) {
        return res.send({errorMessage: error})
    }
});

module.exports = router;

