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

module.exports = router;
