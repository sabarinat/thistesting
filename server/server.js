//const express = require('express');
require("reflect-metadata");
//const app = express();
const port = process.env.PORT | 5001;
const service = require("../server/service/clientService");
const config = require("./config")
require('dotenv').config();
const {createConnection} = require('typeorm');
const datasource = require('./ormconfig')

const app = require('./index');
const { send } = require("express/lib/response");


// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());



var count = 0;
var test = 0;
//sendMail();
setTimeout(() => {
   console.log("-----------------------ss");
   test = 10000;
}, 1000);

test = 20;
function sendMail() {
  count = count + 1;
  service.getTemperature(function(err, data) {
    if(err) {
      console.log(err);
      
    } else {
      let message = data > 20 ? config.sendMessageMoreTemp : config.sendMessageLessTemp;
      service.sendSms(message, function(err, send) {
        if(err) {
          console.log(err);
          
        } else {
          console.log(send)
          
        }
      })
    }
  })
}


// boot(app, __dirname, function (err) {
//   if (err) throw err;

//   // start the server if `$ node server.js`
//   if (require.main === module) {

    
//     // Need to fix issue with the socket handshake
    
  
//   }
// });
// set the interval for  call the send sms API for every 10 mins check the count of message if reach the limit it stop the the send sms process
app.use('use', (req, res) => {


   res.send("hello world");
// let time = setInterval(()=>{
 
//   if(count === 10){

//    stopTimer();
   

//   } else {

//     sendMail();

//   }
//   res.send("hello");
// }, 1000*60*2);

//sop the interval
// function stopTimer() {

//  clearInterval(time);

// }
});
app.use('', (req, res) => {
  console.log("dddddd")
   res.send("hellow");
})

createConnection(datasource).then(() => {
app.listen(process.env.PORT, (err) => {
  if (err) { console.log(err); };
  console.log('Listening on port ' + port);
})}).catch((e) => {
  console.log("this is not connect"+ e);
})
  

