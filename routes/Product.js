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
        cb(null, './HQPost/');
    },
    filename: function(req, file, cb) {
        cb(null, makeid(10) + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
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
    const FinalPath = './Products/' + makeid(10) + 'resized' + req.file.originalname;
    const { filename: ProductImage } = req.file;
    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.category;
    const description = req.body.description;

    await sharp(req.file.path)
        .resize({
            fit: sharp.fit.contain,
            width: 600,
        })
        .toFile(FinalPath, (err, info) => {
            if (err) {
                console.log(err);
            }
        })

    fs.unlink(req.file.path, (err) => {
        if (err) {
            console.log(err);
            res.json({ message: "image error" });
        }
    })
    const product = new Product({
        name: name,
        price: price,
        category: category,
        description: description,
        ProductImage: FinalPath.replace('./', ''),
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