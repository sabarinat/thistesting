var express = require('express');
var app = express();
const port = process.env.PORT | 5001;
app.get('/',(req, res) => {
    console.log("gggg");
    res.send("hellow");
})
app.listen(port, (err) => {
    if (err) { console.log(err); };
    console.log('adasfsdfsdf')
    console.log('http://localhost:' + port);
  });
//app.listen(3000);