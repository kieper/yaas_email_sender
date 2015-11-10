/**
 * Created by i324068 on 10/11/15.
 */

var http = require('http');
var conf = require('./yaasConf');
var queryStriing = require ('queryString');

var yaasEmailTempalte = {
    create : function (token, content) {
        var postData = queryStriing(content);
        var options = conf.getRequestOptions('/hybris/product/b1/' + conf.tenant +'/tempaltes', postData);
        var request = http.request(options, function(res) {
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                console.log('email send success: ' + chunk);
            });
        }).on('error', function(err) {

        });

        request.write(postData);
        request.end();
    }
}


module.exports = yaasEmailTempalte;