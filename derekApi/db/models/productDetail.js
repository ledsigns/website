const mongoose = require("./init").mongoose;

const ClickSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    // required: true,
    default: null
  },
  // description: String,
  created: { type: Date, default: Date() }
});

const ProductDetailSchema = mongoose.Schema({
  images: [
    {
      link: String,
      description: String
    }
  ],
  productIntro: String,
  specs: String,
  showCase: [
    {
      link1: String,
      link2: String,
      link3: String,
      description: String
    }
  ],
  clicks: [ClickSchema]
});

const ProductDetail = mongoose.model("ProductDetail", ProductDetailSchema);

module.exports = ProductDetail;
