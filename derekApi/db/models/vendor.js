const mongoose = require('./init').mongoose

const vendorSchema = mongoose.Schema({
  name: String,
  websiteURL: String,
  vendorLogo: [{
    link: String,
    description: String
  }],
  favorability: Number
})

const vendor = mongoose.model('Vendor', vendorSchema)

module.exports = vendor