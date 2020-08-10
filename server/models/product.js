const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    vehicle: { type: Schema.Types.ObjectId, ref: 'Vehicle' },
    model: { type: Schema.Types.ObjectId, ref: 'Model' },
    series: String,
    year: String,
    name: String,
    description: String,
    photo: String,
    price: Number,
    stockQuantity: Number,
    rating: [Number]

});

module.exports = mongoose.model('product', productSchema);