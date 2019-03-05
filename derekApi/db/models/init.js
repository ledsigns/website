const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const mongoUri = `mongodb://vinny123:MnJoTQq3K7zSXKlq@cluster0-shard-00-00-wpg9x.mongodb.net:27017,cluster0-shard-00-01-wpg9x.mongodb.net:27017,cluster0-shard-00-02-wpg9x.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`;

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
