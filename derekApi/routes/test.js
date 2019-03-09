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

    let categoryArray = [];
    for (var i = 0; i < 5; i++) {
      let category = await global.Category.create({
        name: `lvl2 Category ${i + 1}`,
        description: `all the category ${i + 1} stuff here`,
        categoryLogo: {
          link: `https://s3-ap-southeast-1.amazonaws.com/ledsignstestimg/category/${categoryImages[i]}`,
          description: `category${i + 1}Logo`
        },
        favorability: i
      });
      console.log(`category : ` + category)
      categoryArray.push(category.categoryLogo[0].link)
    }

    //add dummy vendors
    let vendorDir = "sampleData/vendor";
    let vendorDirBuf = Buffer.from(vendorDir);
    let vendorImages = fs.readdirSync(vendorDirBuf);
    console.log(vendorImages);

    let vendorArray = []
    for (var i = 0; i < 9; i++) {
      let vendor = await global.Vendor.create({
        name: `vendor${i + 1}`,
        websiteURL: `www.vendor${i + 1}.com`,
        vendorLogo: [
          {
            link: `https://s3-ap-southeast-1.amazonaws.com/ledsignstestimg/vendor/${vendorImages[i]}`,
            description: `smthing about vendor${i + 1}`
          }
        ],
        favorability: i + 1
      });
      console.log(`vendor : ` + vendor)
      vendorArray.push(vendor.vendorLogo[0].link)
    }

    console.log("smthing running 1");

    //add dummy products with no fk
    for (var i = 0; i < 30; i++) {
      let product = await global.Product.create({
        name: `product ${i + 1}`,
        description: `smth about product ${i + 1}`,
        favorability: i + 1
      });
      console.log(`product` + product);
    }

    console.log("smthing running 2");

    //add dummy productDetail
    let dirArray = [
      "sampleData/product/Indoor+Fixed+LED+Display", //s3 path doesn't read ' ' nor '()'
      "sampleData/product/LED+Components",
      "sampleData/product/LEDMAN+COB+Display",
      "sampleData/product/Outdoor+Fixed+LED+Display",
      "sampleData/product/Rental+LED+Display"
    ];

    let fileNameArray = [];

    for (var i = 0; i < dirArray.length; i++) {
      let productDirBuf = Buffer.from(dirArray[i]);
      let productImages = fs.readdirSync(productDirBuf);
      for (var q = 0; q < productImages.length; q++) {
        fileNameArray.push("https://s3-ap-southeast-1.amazonaws.com/ledsignstestimg/product/" + dirArray[i].slice(19, dirArray[i].length) + "/" + productImages[q]);
      }
    }

    console.log(`fileNameArray` + fileNameArray);
    console.log(`fileNameArray Length` + fileNameArray.length);

    for (var i = 0; i < 30; i++) {
      let productDetail = await global.ProductDetail.create({
        images: [
          {
            link: fileNameArray[i],
            description: `product ${i + 1} image`
          }
        ],
        productIntro: `this is about product ${i + 1}`,
        specs: `product ${i + 1} specs`,
        showCase: [
          {
            link1: fileNameArray[i],
            link2: fileNameArray[i],
            link3: fileNameArray[i],
            description: `product ${i + 1} showcase`
          }
        ]
      });
      console.log(`productDetail i : ` + productDetail)
    }
    console.log("smthing running 3");
    // res.send("Task finished!");

    res.json({
      categoryArray: categoryArray,
      vendorArray: vendorArray,
      fileNameArray: fileNameArray
    });
  })

  .get("/setup", async (req, res) => {
    let products = await global.Product.find();
    console.log(products);
    res.json(products);
  })

  // set up relationships
  .get("/link1", async (req, res) => {
    let category = await global.Category.find();
    let product = await global.Product.find();
    let manySide = parseInt(product.length / category.length);

    console.log(`-----`);
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

  .get("/link12", async (req, res) => {
    let vendor = await global.Vendor.find();
    let product = await global.Product.find();
    let manySide = parseInt(product.length / vendor.length);

    console.log(`-----`);
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

  .get("/link123", async (req, res) => {
    let productDetail = await global.ProductDetail.find();
    let product = await global.Product.find();
    let manySide = product.length / productDetail.length;

    console.log(`-----`);
    for (var i = 0; i < productDetail.length - 1; i++) {
      console.log(product.length);
      for (var q = 0; q < manySide; q++) {
        let productId = product[q]._id;
        let productDetailId = productDetail[i]._id;
        await global.Product.updateOne(
          { _id: Object(productId) },
          { $set: { productDetail: productDetailId } }
        );
        product.splice(q, 1);
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