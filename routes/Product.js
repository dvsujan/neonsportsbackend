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

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './Products/');
    },
    filename: function(req, file, cb) {
        cb(null, makeid(10) + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limit: {
        filesize: 1024 * 1024 * 20,
    },
    fileFilter: fileFilter,
})

function makeid(length) {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}


router.get('/:category', (req, res) => {
    const limit = +req.query.limit;
    const page = +req.query.page;
    const productQuery = Product.find({ category: req.query.category });
    let fetchedProducts;
    if (limit && page) {
        productQuery.skip(limit * (page - 1)).limit(limit);
    }
    productQuery.then(products => {
        fetchedProducts = products;
        return Product.count();
    }).then(count => {
        res.status(200).json({
            products: fetchedProducts,
            maxProducts: count
        })
    }).catch(err => {
        console.log(err);
    })
});

router.post('/', checkAuth, checkAdmin, upload.single('ProductImage'), async(req, res) => {
    //TODO: unlink file after saving resized image
    const { filename: ProductImage } = req.file;
    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.category;
    const description = req.body.description;
    // console.log({
    //         name: name,
    //         price: price,
    //         category: category,
    //         description: description,
    //         ProductImage: req.file.path,
    //     })
    const product = new Product({
        name: name,
        price: price,
        category: category,
        description: description,
        ProductImage: req.file.path,
    });
    product.save().then(product => {
        res.status(201).json({
            product
        })
    }).catch(err => {
        console.log(err);
    })
});

router.get('/', (req, res) => {
    const limit = +req.query.limit;
    const page = +req.query.page;
    const productQuery = Product.find();
    let fetchedProducts;
    if (limit && page) {
        productQuery.skip(limit * (page - 1)).limit(limit);
    }
    productQuery.then(products => {
        fetchedProducts = products;
        return Product.count();
    }).then(count => {
        res.status(200).json({
            products: fetchedProducts,
            maxProducts: count
        })
    }).catch(err => {
        console.log(err);
    })
});

module.exports = router;