/**
 * Created by i324068 on 10/11/15.
 */

var conf = require('./yaasConf');
var http = require('http');
var querystring = require('querystring');


var yaasEmail = {
    send: function (token, content ) {
        var postData = querystring.stringify( content );
        var tokenRequest = http.request({
            host: 'api.yaas.io',
            path: '/hybris/product/b1/' + conf.tenant +"/send",
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData)
            }
        }, function(res) {
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                console.log('email send success: ' + chunk);
            });
        }).on('error', function(error) {
            console.log(error);
        })

        tokenRequest.write(postData);
        tokenRequest.end();
    }

}

module.exports = yaasEmail;