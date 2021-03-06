'use strict';

const mongoose = require('mongoose');

const db_path = 'mongodb://localhost/db-upload';
const db_options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}

module.exports = () => { 
    mongoose.connect(db_path, db_options, (err, success) => {
        if(err) throw err;
        console.log(`Connected to mongodb : ${success}`);
    });
}