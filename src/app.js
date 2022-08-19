const path = require("path");

require("dotenv").config();
const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(routes);

module.exports = app;
