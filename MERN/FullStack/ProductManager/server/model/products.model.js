const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Title is required"], minlength: [5, "Title must be atleast 5 characters long"]},
    price: {type: String, required: [true, "Price is required"]},
    description: {type: String}
}, {timestamps: true})

const Product = mongoose.model("Product", ProductsSchema);

module.exports = Product;