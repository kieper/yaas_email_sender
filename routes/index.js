var express = require('express');
var router = express.Router();
var conf = require('../yaasConfig');
var yaasOAuth = require('../yaasOAuth');
var yaasEmail = require('../yaasEmail');
var yaasEmailTemaplte = require('../yaasEmailTemplate');

var template = {
  "name" : "Order confirmation",
  "description" : "An email template for sending order confirmation.",
  "code" : "orderTemplate",
  "owner" : "pjaromin.emailapp",
  "definableAttributes" :
      [
        {
          "key": "orderLink",
          "mandatory": true
        },
        {
          "key": "orderInfo",
          "mandatory": false
        }
      ]
};

var emailData = {
  "toAddress": "piotr.jaromin@sap.com",
  "fromAddress": "noreply@yaas.io",
  "toName": "John Smith",
  "templateCode" : "orderTemplate",
  "templateOwner" : "pjaromin.emailapp",
  "locale" : "en_us",
  "attributes":[
    {
      "key": "orderLink",
      "value": "http://myShop.com/orders?id=3"
    },
    {
      "key": "orderInfo",
      "value": "Shipped"
    }
  ]
};


/* GET home page. */
router.get('/', function(req, res, next) {

  yaasOAuth.getToken(conf.clientSecret, conf.clientId, function(token) {
    console.log("got token: " + token);
    yaasEmailTemaplte.create(token, template);
    yaasEmail.send(token, emailData);
  });

  res.render('index', { title: 'Express' });
});

module.exports = router;
