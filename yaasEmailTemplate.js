/**
 * Created by i324068 on 10/11/15.
 */

var http = require('http');
var conf = require('./yaasConfig');

var yaasEmailTemplate = {
    create : function (token, content) {
        var postData =  JSON.stringify(content);
        var options = conf.getRequestOptions(token, '/hybris/email/b1/' + conf.tenant +'/templates', postData);
        var request = http.request(options, function(res) {
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                console.log('email template success: ' + chunk);
            });
        }).on('error', function(err) {
            console.log(err);
        });

        request.write(postData);
        request.end();
    }
}


module.exports = yaasEmailTemplate;