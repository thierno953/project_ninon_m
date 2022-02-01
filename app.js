const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const pin = require("./routes/pinRoute");
const home = require("./routes/homeRoute");
const about = require("./routes/aboutRoute");
const user = require("./routes/userRoute");

app.use("/api", pin);
app.use("/api", home);
app.use("/api", about);
app.use("/api", user);

app.use(errorMiddleware);
module.exports = app;
