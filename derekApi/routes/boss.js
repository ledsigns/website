const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await global.Product.find().populate("productDetail");
  res.json({
    categoryArray: products // product array with 16 element in sequence with category array , for top nav bar
  });
});

//for first product chart
router.get("/clickAmount", async (req, res) => {
  const products = await global.Product.find().populate("productDetail");
  var clickAmountArr = [];
  var productNameArr = [];
  var productIdArr = [];
  for (var i = 0; i < products.length; i++) {
    clickAmount = products[i].productDetail.clicks.length
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

//for second product chart
router.get("/allByMonth", async (req, res) => {
  var products = await global.Product.find().populate("productDetail");
  var clicksDateArr = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].productDetail.clicks.length != 0) {
      for (var q = 0; q < products[i].productDetail.clicks.length; q++) {
        // let theDate = new Date()
        clicksDateArr.push(products[i].productDetail.clicks[q].created)
      }
    }
  }

  console.log(`done?`)
  res.json({
    clicksDateArr: clicksDateArr,
  });
});

//for third product chart
router.get("/oneByMonth/:id", async (req, res) => {
  var id = req.params.id;
  let product = await global.Product.find({ _id: id }).populate("productDetail");
  console.log(`product is ` + product[0].productDetail)
  var clicksDateArr = [];
  if (product[0].productDetail.clicks.length != 0) {
    for (var i = 0; i < product[0].productDetail.clicks.length; i++) {
      clicksDateArr.push(product[0].productDetail.clicks[i].created)
    }
  }

  console.log(`done?`)
  res.json({
    clicksDateArr: clicksDateArr,
  });
});


module.exports = router;
