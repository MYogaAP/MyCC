var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send('{ "response": "Hai nama saya Muhammad Yoga Adha Pratama" }');
});

app.get("/will", function (req, res) {
  res.send('{ "response": "Mitra Bisa.ai" }');
});
app.get("/ready", function (req, res) {
  res.send('{ "response": "Course Cloud Computing" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
