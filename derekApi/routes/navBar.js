const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
    console.log("smthing running");

    let categories = await global.Category.find()

    let categoryArray = []
    let productArray = []

    for (var i = 0; i < 4; i++) {
        console.log(categories[i])
        categoryArray.push(categories[i])
        console.log(`category id is the one ` + categories[i]._id)
        let products = await global.Product.find({ category: categories[i]._id }).populate('productDetail').exec() //.exec() can solve find() many records with populate
        for (var q = 0; q < 4; q++) {
            console.log(products[q])
            productArray.push(products[q])
        }
    }

    res.json({
        categoryArray: categoryArray, // category array with 4 element for top nav bar
        productArray: productArray, // product array with 16 element in sequence with category array , for top nav bar
    });
});

module.exports = router;