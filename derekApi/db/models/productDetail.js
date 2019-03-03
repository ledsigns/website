const mongoose = require('./init').mongoose

const ProductDetailSchema = mongoose.Schema({
    images: [{
        link: String,
        description: String
    }],
    productIntro: String,
    specs: String,
    showCase: [{
        link1: String,
        link2: String,
        link3: String,
        description: String
    }],
})

const ProductDetail = mongoose.model('ProductDetail', ProductDetailSchema)

module.exports = ProductDetail