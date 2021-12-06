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
const security = require('./security');
const Cart = require('../models/Cart');

const getCart = async(cart) => {
    const cartdata = cart.map(async itm => ({
        product: await Product.findById(itm),
    }))
    return Promise.all(cartdata);
}

router.get("/", checkAuth, async(req, res) => {
    User.findById(req.userData.userId).then((products) => {
        Cart.findById(products.cart).then(async(cart) => {
            res.json(await getCart(cart.Items));
        })
    })
})


router.post('/:productId', checkAuth, async(req, res) => {
    const productId = req.params.productId;
    Product.findById(productId).then((product) => {
        if (!product) {
            res.json({ message: "product not found" });
        }
        User.findById(req.userData.userId).then((user) => {
            Cart.update({ _id: user.cart }, { $addToSet: { Items: product._id } }).then((cart) => {
                res.json({ message: "product added to cart" });
            });
        });
    });
})
module.exports = router;