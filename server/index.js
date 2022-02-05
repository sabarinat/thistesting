var express = require('express');
var app = express();
app.use('',(req, res) => {
    res.send("hellow");
})

module.exports = app;