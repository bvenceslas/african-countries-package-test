const express = require('express');
const path = require('path');
const cors = require('cors');

// connect to db
require('./db/db')();

const app = express();
app.use(cors());
app.use(express.json());

// middlewares
app.use('/api', require('./routes/api'));
// use upload folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`PicaRest listening on ${port}`));