const express = require("express");

const router = express.Router();

router.get("/category/:id", async (req, res) => {
  console.log("smthing running");
  var id = req.params.id;
  let products = await global.Product.find({ category: id });
  // console.log(`products ` + products)

  let vendors = [];
  let pushedId = [];
  for (var i = 0; i < products.length; i++) {
    let vendorRecord = await global.Vendor.find({ _id: products[i].vendor });
    console.log(`"${vendorRecord[0]._id}"`);
    if (!pushedId.includes(`"${vendorRecord[0]._id}"`)) {
      vendors.push(vendorRecord[0]);
      pushedId.push(`"${vendorRecord[0]._id}"`)
      console.log(`pushedIdArray ` + pushedId)
    }
  }

  res.json({
    vendors: vendors
  });
});

router.get("/categorychn/:id", async (req, res) => {
  console.log("smthing running");
  var id = req.params.id;
  let products = await global.Product.find({ name: id });
  console.log(`products ` + products)

  // let vendors = [];
  // for (var i = 0; i < products.length; i++) {
  //   let vendorRecord = await global.Vendor.find({ _id: products[i].vendor });
  //   console.log(vendorRecord[0]);
  //   vendors.push(vendorRecord[0]);
  // }

  // for (var i = 0; i < vendors.length; i++) {
  //     console.log(vendors[i].name)
  // }

  res.json({
    products: products
  });
});

module.exports = router;
