const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await global.Product.find().populate("productDetail");
  res.json({
    categoryArray: products // product array with 16 element in sequence with category array , for top nav bar
  });
});

module.exports = router;
