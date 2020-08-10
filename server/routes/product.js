const router = require('express').Router();
const Product = require('../models/product');
const upload = require('../middlewares/upload-photo');


//GET requests
//Get one product
router.get('/product/:id', async(req, res) => {
    try {
        let product = await Product.findOne({ _id: req.params._id });
        res.json({
            status: true,
            product: product
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }



});


//Get all products
router.get('/products', async(req, res) => {
    try {
        let product = new Product();
        product = await Product.find();

        res.json({
            product: product,
            status: true
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
});

//Post request
//POST one product

router.post('/product', upload.single('photo'), async(req, res) => {
    try {
        let product = new Product();
        // product.category = req.body.category;
        // product.owner = req.body.owner;
        product.title = req.body.title;
        product.description = req.body.description;
        product.photo = req.file.location;
        product.price = req.body.price;
        product.stockQuantity = req.body.stockQuantity;
        // product.rating = req.body.rating;

        await product.save();

        res.json({
            status: true,
            message: 'Product posted successfuly'
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
});



//PUT request - update a single product
router.put('/product/:id', async(req, res) => {

});

//DELETE product - delete a single product
router.delete('/product/:id', async(req, res) => {
    try {
        let deletedProduct = await Product.findByIdAndDelete({ _id: req.params._id });

        if (deletedProduct) {
            res.json({
                status: true,
                message: 'Deleted successfully'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });

    }

});

module.exports = router;