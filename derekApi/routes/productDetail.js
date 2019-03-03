const express = require("express");

const router = express.Router();


router.get("/product/:id", async (req, res) => {

    console.log("smthing running");
    var id = req.params.id;
    let productDetail = await global.Product.find({ _id: id }).populate("productDetail");

    res.json({
        productDetail: productDetail
    });
});


module.exports = router;