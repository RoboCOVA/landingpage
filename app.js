const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");

connectDB();

const app = express();

//Middlewares
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "client/build")))
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

//Routes

app.use("/user", require("./routes/UserRoutes"));

// Start the server
const port = process.env.PORT || 8000;
app.listen(port);
console.log("Server listening at " + port);
