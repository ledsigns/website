const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
    console.log("smthing running");

    let categories = await global.Category.find()
    let productDetails = await global.ProductDetail.find()
    let vendors = await global.Vendor.find()

    let categoryArray = []
    let productsArray = []

    for (var i = 0; i < 4; i++) {
        console.log(categories[i])
        categoryArray.push(categories[i])
        console.log(`category id is the one ` + categories[i]._id)
        let products = await global.Product.find({ category: categories[i]._id })
        for (var q = 0; q < 4; q++) {
            console.log(products[q])
            productsArray.push(products[q])
        }
    }

    res.json({
        categoryArray: categoryArray, // category array with 4 element for top nav bar
        productsArray: productsArray, // product array with 16 element in sequence with category array , for top nav bar
        categories: categories, // all categories for home grid list 
        vendors: vendors, // all vendors for home grid list 
        productDetails: productDetails // all productDetails for home grid list 
    });
});

module.exports = router;