const router = require('express').Router();
const Owner = require('../models/owner');

//GET ALL OWNERS
router.get('/owners', async(req, res) => {
    try {
        let owner = new Owner();
        owner = await Owner.find();

        res.json({
            success: true,
            owner: owner
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });

    }
});

//POST OWNERS
router.post("/owners", async(req, res) => {
    try {
        let owner = new Owner();
        owner.name = req.body.name;
        owner.photo = req.body.photo;
        owner.about = req.body.about;

        await owner.save();
        res.json({
            status: true,
            message: "Owner added successfully"
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });

    }
});
module.exports = router;