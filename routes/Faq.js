const express = require('express');
const { modelNames } = require('mongoose');
const router = express.Router();
const multer = require('multer')
const User = require('../models/User');
const Product = require('../models/Product');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/checkAuth');
const checkAdmin = require('../middleware/checkAdmin');
const nodemailer = require('nodemailer');
const sharp = require('sharp');
const fs = require('fs');
require('dotenv').config()
apiURL = 'localhost:5000'
const mail = require('./SendMail');
const security = require('./security')

router.get('/', (req, res) => {
    res.send('Faq')
})

module.exports = router;