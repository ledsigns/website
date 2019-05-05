const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const mongoUri = `mongodb+srv://daboss:asdfasdf@cluster0-y0x5s.mongodb.net/ledsigns?retryWrites=true`;
// const mongoUri = `mongodb://localhost:27017/ledsigns`;

mongoose.Promise = Promise;
mongoose.connect(mongoUri, { useNewUrlParser: true });
let gfs;

const conn = mongoose.connection;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

module.exports = {
  mongoose,
  gfs,
  mongoUri
};
