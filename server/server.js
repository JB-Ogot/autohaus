const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require('dotenv');


const PORT = 3000;
const app = express();

//configuration files
dotenv.config();

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to Atlas Database");
        }
    }
);

//my middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//api calls
const productRoutes = require('./routes/product');
app.use('/api', productRoutes);

const categoryRoutes = require('./routes/category');
app.use('/api', categoryRoutes);

const ownerRoutes = require('./routes/owner');
app.use('/api', ownerRoutes);

const userRoutes = require('./routes/auth');
app.use('api', userRoutes);

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Parts-Ke running on Port", PORT);
    }
});