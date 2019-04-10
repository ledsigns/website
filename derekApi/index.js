const sls = require("serverless-http");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./db/dbInit");
const authMiddleware = require("./middleware/auth");

//Init DB

// Create server
const server = express();

// parse application/json
server.use(bodyParser.json());

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
server.use(cors());

//Routes
const testRouter = require("./routes/test");
const productRouter = require("./routes/product");
const vendorRouter = require("./routes/vendor");
const categoryRouter = require("./routes/category");
const homePage = require("./routes/homePage");
const navBar = require("./routes/navBar");
const verifyRouter = require("./routes/verify");
const authRouter = require("./routes/auth");

//server side routers
server.use("/test", testRouter);
server.use("/product", productRouter);
server.use("/vendor", vendorRouter);
server.use("/category", categoryRouter);
server.use("/homePage", homePage);
server.use("/verify", verifyRouter);
server.use("/navBar", navBar);
server.use("/auth", authRouter);
server.get("/test", (req, res) => {
  res.send("works");
});

// Handle errors by returning JSON
server.use((error, req, res, next) => {
  const status = error.status || 500;
  res.status(status).json({
    error: { message: `Error:\n${error.message}` }
  });
});

// Start server at localhost:7000
const port = 8085;
server.listen(port, () => {
  console.log(`Started at localhost:${port}`);
});

server.use("/sampleData", express.static(path.join(__dirname, "sampleData")));

module.exports.server = sls(server);
