const router = require('express').Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middlewares/verify-token');

// Signup route

router.post('/auth/signup', async(req, res) => {
    if (!req.body.password || !req.body.email) {
        res.json({ success: false, message: "PLease enter your email and password" });
    } else {
        try {
            let newUser = new User();
            newUser.name = req.body.name;
            newUser.email = req.body.email;
            newUser.password = req.body.password;
            await newUser.save();
            let token = jwt.sign(newUser.toJSON(), process.env.SECRET, {
                expiresIn: 604800 //IN A WEEK
            });

            res.json({
                success: true,
                message: "uccessfully created a new User"
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                token: token,
                message: error.message
            });
        }
    }
});

//Signup route
router.get('/auth/user', verifyToken, async(req, res) => {
    try {
        let foundUser = await User.findOne({ _id: req.decoded._id });
        if (foundUser) {
            res.json({
                status: true,
                message: "Found user by given ID",
                user: foundUser
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

//login route

router.post('/auth/login', async(req, res) => {
    try {
        let foundUser = await User.findOne({ email: req.body.email })
        if (!foundUser) {
            res.status(403).json({
                success: false,
                message: "Authentication failed, user not found"
            });
        } else {
            if (foundUser.comparePassword(req.body.password)) {
                let token = jwt.sign(foundUser.toJSON(), process.env.SECRET, {
                    expiresIn: 604800 //1 week
                })
                res.json({
                    success: true,
                    token: token
                });
            } else {
                res.status(403).json({
                    success: false,
                    message: "Authentication failed, wrong password"
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;