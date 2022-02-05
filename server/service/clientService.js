var request = require("request");
var Utils = require("../utils.js");
var config = require("../config");
require('dotenv').config();


module.exports = {

    //get the temerature for particuler location
    getTemperature:  function(callback) {
        let url = Utils.generateWebAppURL('q', 'Thessaloniki');
        //console.log("-----------------------------",process.env.PORT);
        request({url: url}, function(err, response, data) {
            if(err) {
                callback(err, null);
            } else if(response.statusCode !== 200) {
                callback(json.parse(body).message, null);
            } else {
                callback(null, JSON.parse(data).main.temp);
            }
        })
    },

    // get access token and send sms to the particular contact
    sendSms: function( message, callback) {
        request(config.accessTokenForRoutee, function(err, response, body) {
            if(err) {
                callback(err, null);
            } else if(response.statusCode !== 200) {
                callback(json.parse(body).message, null);
            } else {
                config.requestBodyForSendSms.headers.authorization = "Bearer " + JSON.parse(body).access_token;
                config.requestBodyForSendSms.body.body = message;
                request(config.requestBodyForSendSms, function(err, response, sendSmsBody) {
                    if(err) {
                        callback(err, null);
                    } else if(response.statusCode !== 200) {
                        callback(sendSmsBody, null);
                    } else {
                        callback(null, sendSmsBody);
                    }
                });
            }
        })
    },

}