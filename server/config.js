var nodeBase64 = require('nodejs-base64-converter');  
module.exports = {
  baseUrl: {
    protocol: 'http',
    hostname: 'api.openweathermap.org',
    path: '/data/2.5/weather',
  },

  query: {
    name: 'Thessaloniki',
    id: 'id',
    coordinates: {
      latitude: 'lat',
      longitude: 'lon',
    },
    zipcode: 'zip',
  },

  APIkey: 'b385aa7d4e568152288b3c9f5c2458a5',

  routeeToken : 'NWY5MTM4Mjg4YjcxZGUzNjE3YTg3Y2QzOlJmYlZWRVFkU2s="',

  accessTokenForRoutee : {
    "async": true,
    "crossDomain": true,
    "url": "https://auth.routee.net/oauth/token?grant_type=client_credentials",
    "method": "POST",
    "headers": {
      "authorization": "Basic "+nodeBase64.encode("5f9138288b71de3617a87cd3:RSj69jLowJ"),
      "content-type": "application/x-www-form-urlencoded"
    }
  },
    
  

  requestBodyForSendSms : {
    "async": true,
    "crossDomain": true,
      "url": "https://connect.routee.net/sms",
      "method": "POST",
      "headers": {
        "authorization": "Bearer ",
        "content-type": "application/json"
      },
      body:
      {
        "from": "amdTelecom",
        "to": "+91 7708019081",
        "body": "Hi Ranjith,sabari please wake up"
      },
      json: true
  },
  sendMessageMoreTemp : "Indhu mathi and Temperature more than 20C.",
  sendMessageLessTemp : "Hi hi hi hi hi hi"
};
