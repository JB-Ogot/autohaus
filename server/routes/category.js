const router = require("express").Router();
const Category = require("../models/category");

//POST routes- Post category
router.post("/categories", async(req, res) => {
    try {
        let category = new Category();
        category.type = req.body.type;

        await category.save();
        res.json({
            status: true,
            message: "Category added successfully"
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });

    }
});

//Get categories

router.get('/categories', async(req, res) => {
    try {
        let categories = new Category();
        categories = Category.find();

        res.json({
            success: true,
            categories: categories
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });

    }
});

module.exports = router;