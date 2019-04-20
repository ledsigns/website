const mongoose = require("./init").mongoose;

// ProductDetail = ({
//      productId: [
// {
//     userID: [
//         //For registered user
//         {id: '799677146374973'},
//         {id: '098y4706'},
//         // For anonymous
//         {id: null},
//         {id: null},
//         {id: null},
//         {id: null},
//     ]
// }
//   ]
// });

// ProductDetail = ({
//     images: [
//         {
//             link: String,
//             description: String
//         }
//     ],
//     productIntro: String,
//     ...,
//     clicks: ClickSchema,
// });

const ClickSchema = mongoose.Schema({
  productId: [
    {
      User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: true,
        default: null
      },
      description: String
    }
  ]
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
  clicks: ClickSchema
});

const ProductDetail = mongoose.model("ProductDetail", ProductDetailSchema);

module.exports = ProductDetail;
