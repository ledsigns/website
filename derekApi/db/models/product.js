const mongoose = require("./init").mongoose;

const ProductSchema = mongoose.Schema({
  name: String,
  description: String,
  //ref category fk
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
    // required: true,
  },
  //ref vendor fk
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor"
    // required: true,
  },
  //ref productDetail fk
  productDetail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductDetail"
    // required: true,
  },
  favorability: Number,
  // clicks: [Object]
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
