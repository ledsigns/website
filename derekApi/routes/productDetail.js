const express = require("express");

const router = express.Router();


router.get("/product/:id", async (req, res) => {

    console.log("smthing running");
    var id = req.params.id;

    let productDetail = await global.Product.find({ _id: id }).populate("productDetail");

    //find other products under same category
    let productCategory = productDetail[0].category
    console.log(`category id ` + productCategory)

    let relevantProducts = await global.Product.find({ category: productCategory }).populate("productDetail");

    res.json({
        productDetail: productDetail,
        relevantProducts: relevantProducts
    });
});


module.exports = router;