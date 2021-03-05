const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    firstName: {
        type:String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    photo:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('persons', PersonSchema);