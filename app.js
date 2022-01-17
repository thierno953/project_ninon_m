const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());

const pin = require("./routes/pinRoute");
const home = require("./routes/homeRoute");

app.use("/api", pin);
app.use("/api", home);

app.use(errorMiddleware);
module.exports = app;
