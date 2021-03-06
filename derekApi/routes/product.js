const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get("/category/:id", async (req, res) => {
  console.log("smthing running");
  var id = req.params.id;
  console.log(`id ` + id);
  let products = await global.Product.find({ category: id }).populate(
    "productDetail"
  );

  res.json({
    products: products
  });
});

router.get("/:id", async (req, res) => {
  var id = req.params.id;
  let productDetail;
  await passport.authenticate("jwt", async function(err, user, info) {
    // if (err) {
    //   return next(err);
    // }
    if (user) {
      const daOne = await global.Product.findById(`${id}`);
      if (daOne.clicks) {
        daOne.clicks.push({ id: user._id });
      } else {
        daOne.clicks = [{ id: user._id }];
      }
      daOne.save();
      productDetail = await global.Product.find({ _id: id }).populate(
        "productDetail"
      );
      console.log("going");
      console.log("here");
      if (productDetail.clicks) {
        productDetail.clicks.push({ id: user._id });
      } else {
        productDetail.clicks = [{ id: user._id }];
      }
      productDetail.save();
      console.log("Goin through");
      //find other products under same category
      let productCategory = productDetail[0].category;

      let AllRelevantProduct = await global.Product.find({
        category: productCategory
      }).populate("productDetail");

      let relevantProduct = [];

      for (let i = 0; i < 4; i++) {
        let index = 0;
        do {
          index = Math.floor(Math.random() * AllRelevantProduct.length);
        } while (AllRelevantProduct[index]._id == id);
        relevantProduct.push(AllRelevantProduct[index]);
        AllRelevantProduct.splice(index, 1);
      }
      return res.json({
        productDetail: productDetail,
        relevantProduct: relevantProduct
      });
    } else {
      console.log("away");
      console.log("going");
      productDetail = await global.Product.find({ _id: id });

      const daOne = await global.Product.findById(`${id}`);
      if (daOne.clicks) {
        daOne.clicks.push({ id: null });
      } else {
        daOne.clicks = [{ id: null }];
      }
      daOne.save();
      console.log("going");
      //find other products under same category
      let productCategory = productDetail[0].category;

      let AllRelevantProduct = await global.Product.find({
        category: productCategory
      });

      let relevantProduct = [];

      for (let i = 0; i < 4; i++) {
        let index = 0;
        do {
          index = Math.floor(Math.random() * AllRelevantProduct.length);
        } while (AllRelevantProduct[index]._id == id);
        relevantProduct.push(AllRelevantProduct[index]);
        AllRelevantProduct.splice(index, 1);
      }

      return res.json({
        productDetail: productDetail,
        relevantProduct: relevantProduct
      });
      // res.send("none");
    }
  })(req, res);
});

router.get("/test/:id", function(req, res, next) {});

//for get products by vendorId
router.get("/vendor/:vendorId", async (req, res) => {
  console.log(`vendorId` + req.params.vendorId);

  let vendorId = req.params.vendorId;

  let products = await global.Product.find({ vendor: vendorId }).populate(
    "productDetail"
  );

  res.json({
    products: products
  });
});

//for get products by both categoryId and vendorId
router.get("/category/:categoryId/vendor/:vendorId", async (req, res) => {
  console.log(`vendorId` + req.params.vendorId);
  console.log(`categoryId` + req.params.categoryId);

  let vendorId = req.params.vendorId;
  let categoryId = req.params.categoryId;

  let products = await global.Product.find({
    $and: [{ vendor: vendorId }, { category: categoryId }]
  }).populate("productDetail");

  res.json({
    products: products
  });
});

module.exports = router;
