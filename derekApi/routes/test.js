const express = require("express");
const router = express.Router();
const fs = require("fs");

router
  .get("/test", async (req, res) => {
    let newOne = await global.Test.create({
      name: "New"
    });
    res.json(newOne);
  })

  .get("/fs", async (req, res) => {
    let dir = "sampleData/category";
    let dirBuf = Buffer.from(dir);
    let files = fs.readdirSync(dir);
    console.log(files);
  })

  .get("/seeds", async (req, res) => {
    await global.Product.remove();
    await global.Vendor.remove();
    await global.Category.remove();
    await global.ProductDetail.remove();

    console.log("DB cleared! Start fresh ;)");

    //add dummy category
    let categoryDir = "sampleData/category";
    let categoryDirBuf = Buffer.from(categoryDir);
    let categoryImages = fs.readdirSync(categoryDirBuf);
    console.log(categoryImages);

    for (var i = 0; i < 5; i++) {
      let category = await global.Category.create({
        name: `lvl2 Category ${i}`,
        description: `all the category ${i} stuff here`,
        categoryLogo: {
          link: `sampleData/category/${categoryImages[i]}`,
          description: `category${i}Logo`
        },
        favorability: i
      });
    }

    //add dummy vendors
    let vendorDir = "sampleData/vendor";
    let vendorDirBuf = Buffer.from(vendorDir);
    let vendorImages = fs.readdirSync(vendorDirBuf);
    console.log(vendorImages);

    for (var i = 0; i < 9; i++) {
      let vendor = await global.Vendor.create({
        name: `vendor${i}`,
        websiteURL: `www.vendor${i}.com`,
        vendorLogo: [
          {
            link: `sampleData/vendor/${vendorImages[i]}`,
            description: `smthing about vendor${i}`
          }
        ],
        favorability: i
      });
    }

    console.log("smthing running 1");

    //add dummy products with no fk
    for (var i = 0; i < 22; i++) {
      let product = await global.Product.create({
        name: `product ${i}`,
        description: `smth about product ${i}`,
        favorability: i
      });
      console.log(`product` + product);
    }

    console.log("smthing running 2");

    //add dummy productDetail
    let dirArray = [
      "sampleData/product/Indoor Fixed LED Display",
      "sampleData/product/LED Components",
      "sampleData/product/LEDMAN COB Display",
      "sampleData/product/Outdoor Fixed LED Display",
      "sampleData/product/Rental LED Display"
    ];

    let fileNameArray = [];

    for (var i = 0; i < dirArray.length; i++) {
      let productDirBuf = Buffer.from(dirArray[i]);
      let productImages = fs.readdirSync(productDirBuf);
      for (var q = 0; q < productImages.length; q++) {
        fileNameArray.push(dirArray[i] + "/" + productImages[q]);
      }
    }

    console.log(`fileNameArray` + fileNameArray);
    console.log(`fileNameArray Length` + fileNameArray.length);

    res.json(fileNameArray);

    for (var i = 0; i < 22; i++) {
      let product = await global.ProductDetail.create({
        images: [
          {
            link: fileNameArray[i],
            description: `product ${i} image`
          }
        ],
        productIntro: `this is about product ${i}`,
        specs: `product ${i} specs`,
        showCase: [
          {
            link1: fileNameArray[i],
            link2: fileNameArray[i],
            link3: fileNameArray[i],
            description: `product ${i} showcase`
          }
        ]
      });
    }
    console.log("smthing running 3");
    // res.send("Task finished!");
  })

  .get("/setup", async (req, res) => {
    let products = await global.Product.find();
    console.log(products);
    res.json(products);
  })

  // set up relationships
  .get("/linkCategory", async (req, res) => {
    let category = await global.Category.find();
    let product = await global.Product.find();
    let manySide = parseInt(product.length / category.length);

    for (var i = 0; i < category.length - 1; i++) {
      console.log(product.length);
      for (var q = 0; q < manySide; q++) {
        let randomIndex = Math.floor(Math.random() * product.length);
        let randomProductId = product[randomIndex]._id;
        let categoryId = category[i]._id;
        await global.Product.updateOne(
          { _id: Object(randomProductId) },
          { $set: { category: categoryId } }
        );
        product.splice(randomIndex, 1);
      }
    }

    let cutter = 0;
    for (var i = 0; i < product.length; i++) {
      let categoryId = category[category.length - 1];
      await global.Product.updateOne(
        { _id: Object(product[i]._id) },
        { $set: { category: categoryId } }
      );
      cutter++;
    }
    product.splice(0, cutter);

    res.json({ product: product });
  })

  .get("/linkVendor", async (req, res) => {
    let vendor = await global.Vendor.find();
    let product = await global.Product.find();
    let manySide = parseInt(product.length / vendor.length);

    for (var i = 0; i < vendor.length - 1; i++) {
      console.log(product.length);
      for (var q = 0; q < manySide; q++) {
        let randomIndex = Math.floor(Math.random() * product.length);
        let randomProductId = product[randomIndex]._id;
        let vendorId = vendor[i]._id;
        await global.Product.updateOne(
          { _id: Object(randomProductId) },
          { $set: { vendor: vendorId } }
        );
        product.splice(randomIndex, 1);
      }
    }

    let cutter = 0;
    for (var i = 0; i < product.length; i++) {
      let vendorId = vendor[vendor.length - 1];
      await global.Product.updateOne(
        { _id: Object(product[i]._id) },
        { $set: { vendor: vendorId } }
      );
      cutter++;
    }
    product.splice(0, cutter);

    res.json({ product: product });
  })

  .get("/linkProductDetail", async (req, res) => {
    let productDetail = await global.ProductDetail.find();
    let product = await global.Product.find();
    let manySide = product.length / productDetail.length;

    for (var i = 0; i < productDetail.length - 1; i++) {
      console.log(product.length);
      for (var q = 0; q < manySide; q++) {
        let randomIndex = Math.floor(Math.random() * product.length);
        let randomProductId = product[randomIndex]._id;
        let productDetailId = productDetail[i]._id;
        await global.Product.updateOne(
          { _id: Object(randomProductId) },
          { $set: { productDetail: productDetailId } }
        );
        product.splice(randomIndex, 1);
      }
    }

    let cutter = 0;
    for (var i = 0; i < product.length; i++) {
      let productDetailId = productDetail[productDetail.length - 1];
      await global.Product.updateOne(
        { _id: Object(product[i]._id) },
        { $set: { productDetail: productDetailId } }
      );
      cutter++;
    }
    product.splice(0, cutter);

    res.json({ product: product });
  });

module.exports = router;
