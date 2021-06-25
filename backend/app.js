const express = require("express");
const app = express()
const db = require("./src/database/connection")
const routes = require("./src/routs/routs")
const cors = require("cors")


db.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Database connected");
    }
});

app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
  
app.use(routes)

var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("connected on port");
});

