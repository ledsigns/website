const mongoose = require("./init").mongoose;

const testSchema = mongoose.Schema({
  test: String
});

const test = mongoose.model("Test", testSchema);

module.exports = test;
