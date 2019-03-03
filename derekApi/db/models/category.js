const mongoose = require('./init').mongoose

const CategorySchema = mongoose.Schema({
  name: String,
  description: String,
  categoryLogo: [{
    link: String,
    description: String
  }],
  favorability: Number
})

const Category = mongoose.model('Category', CategorySchema)

module.exports = Category