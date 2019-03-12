const express = require("express");

const router = express.Router();

router.get("/vendor/:id", async (req, res) => {
  console.log("smthing running");
  var id = req.params.id;
  let products = await global.Product.find({ vendor: id });

  res.json({
    products: products
  });
})

router.get("/category/:id", async (req, res) => {
  console.log("smthing running");
  var id = req.params.id;
  console.log(`id ` + id)
  let products = await global.Product.find({ category: id }).populate("productDetail");

  res.json({
    products: products
  });
})

router.get("/:id", async (req, res) => {

  console.log("smthing running");
  var id = req.params.id;

  let productDetail = await global.Product.find({ _id: id }).populate("productDetail");

  //find other products under same category
  let productCategory = productDetail[0].category
  console.log(`category id ` + productCategory)

  let AllRelevantProduct = await global.Product.find({ category: productCategory }).populate("productDetail");

  let relevantProduct = []

  for (let i = 0; i < 4; i++) {
    let index = 0;
    do {
      index = Math.floor(Math.random() * AllRelevantProduct.length)
    } while (AllRelevantProduct[index]._id == id)
    relevantProduct.push(AllRelevantProduct[index])
    AllRelevantProduct.splice(index, 1)

  }

  res.json({
    productDetail: productDetail,
    relevantProduct: relevantProduct
  });
});

//for get products by vendorId
router.get("/vendor/:vendorId", async (req, res) => {

  console.log(`vendorId` + req.params.vendorId)

  let vendorId = req.params.vendorId

  let products = await global.Product.find({ vendor: vendorId }).populate('productDetail')

  res.json({
    products: products
  });
});


//for get products by both categoryId and vendorId
router.get("/category/:categoryId/vendor/:vendorId", async (req, res) => {

  console.log(`vendorId` + req.params.vendorId)
  console.log(`categoryId` + req.params.categoryId)

  let vendorId = req.params.vendorId
  let categoryId = req.params.categoryId

  let products = await global.Product.find({ $and: [{ vendor: vendorId }, { category: categoryId }] }).populate('productDetail')

  res.json({
    products: products
  });
});

module.exports = router;
