const mongoose = require('./init').mongoose

const ImageSchema = mongoose.Schema({
    data: String,
})

const Image = mongoose.model('Image', ImageSchema)

module.exports = Image