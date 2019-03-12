const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("smthing running");

  let categories = await global.Category.find();
  let productDetails = await global.ProductDetail.find();
  let vendors = await global.Vendor.find();

  res.json({
    categories: categories, // all categories for home grid list
    vendors: vendors, // all vendors for home grid list
    productDetails: productDetails // all productDetails for home grid list
  });
});

module.exports = router;
