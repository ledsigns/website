const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await global.Product.find().populate("productDetail");
  res.json({
    categoryArray: products // product array with 16 element in sequence with category array , for top nav bar
  });
});

router.get("/clickAmount", async (req, res) => {
  const products = await global.Product.find().populate("productDetail");
  var clickAmountArr = [];
  var productNameArr = [];
  var productIdArr = [];
  for (var i = 0; i < products.length; i++) {
    clickAmount = products[i].clicks.length
    clickAmountArr.push(clickAmount)
    productNameArr.push(products[i].name)
    productIdArr.push(products[i]._id)
  }
  res.json({
    clickAmountArr: clickAmountArr,
    productNameArr: productNameArr,
    productIdArr: productIdArr
  });
});

module.exports = router;
