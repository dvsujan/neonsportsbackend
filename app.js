//IMPORTS
const express = require('express');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const User = require('./models/User');
const { json } = require('express');
const app = express();
const multer = require('multer');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/Product');
require('dotenv').config()
var cors = require('cors')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: '*',
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
}));
app.use('/products', express.static('Products'));
app.use('/profiles', express.static('profiles'));
app.use('/Extras', express.static('Extras'));

const PORT = process.env.SERVER_PORT || 5000;

const DBURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

mongoose.connect(DBURI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then((result) => {
        app.listen(PORT, () => console.log(`app started and running @ port: ${PORT}`));
        console.log("app starteed");
        console.log('connected to database');
    })
    .catch((error) => {
        console.log(error);
    })

var hashPassword = async(password, rounds = 10) => {
    const hash = await bcrypt.hash(password, rounds)
    return hash;
}


//sample
app.get('/api', (req, res) => {
    res.json({
        message: 'This is rest api ',
    });
});

//routes

app.use('/api/user/', userRoutes);
app.use('/api/products/', productRoutes);

module.exports = app;