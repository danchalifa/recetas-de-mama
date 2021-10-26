"use strict";

const express = require("express");

var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var APIRouter = require("./routes/api");
var path = require("path");



// Constants
const PORT = 9000;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(cors());
app.use("/api", APIRouter);


app.get("/", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});
app.use(express.static("../client/build"));


app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});