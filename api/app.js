"use strict";

const express = require("express");

var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var APIRouter = require("./routes/api");

// Constants
const PORT = 9000;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(cors());
app.use("/", indexRouter);
app.use("/api", APIRouter);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);