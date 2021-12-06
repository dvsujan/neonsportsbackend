const jwt = require('jsonwebtoken');
const User = require('../models/User')

module.exports = (req, res, next) => {
    try {
        User.findById(req.userData.userId, (err, user) => {
            if (!user) {
                return res.status(401).json({
                    message: 'Auth failed'
                })
            }
            if (user.role !== 'admin') {
                return res.status(401).json({
                    message: 'Admin Auth Failed'
                })
            } else {
                next();
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};