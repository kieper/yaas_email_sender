/**
 * Created by i324068 on 10/11/15.
 */

var conf = require('./yaasConfig');
var http = require('http');


var yaasEmail = {
    send: function (token, content ) {
        var postData =  JSON.stringify(content);
        var options = conf.getRequestOptions(token, '/hybris/email/b1/' + conf.tenant +"/send", postData);

        var tokenRequest = http.request(options, function(res) {
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