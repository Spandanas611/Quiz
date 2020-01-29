//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connection Successful!");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// app.post("/", function(req, res) {
//   res.redirect("/");
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
