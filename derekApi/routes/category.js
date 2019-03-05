const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("smthing running");

  let categories = await global.Category.find();
  console.log(`categories` + categories);

  res.json({
    categories: categories
  });
});

router.get("/withProducts", async (req, res) => {
  console.log("smthing running");

  let categories = await global.Category.find()
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
    categories: categories, // all categories for category grid list 
    categoryArray: categoryArray,
    productsArray: productsArray
  });
});

module.exports = router;
