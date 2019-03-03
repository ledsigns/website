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
  let products = await global.Product.find({ category: id });

  res.json({
    products: products
  });
})


router.get("/vendor/:vendorId/category/:categoryId", async (req, res) => {

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
