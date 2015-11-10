/**
 * Created by i324068 on 10/11/15.
 */

var http = require('http');
var querystring = require('querystring');

var yaasOAuth = {
    getToken: function (clientSecret, clientId, callback ) {
        var postData = querystring.stringify( {
            'grant_type' : 'client_credentials',
            'scope' : 'SCOPE_NAME' ,
            'client_id' : clientId,
            'client_secret' : clientSecret
        });

        var tokenRequest = http.request({
            host: 'api.yaas.io',
            path: '/hybris/oauth2/b1/token',
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData)
            }
        }, function(res) {
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                tokenResult = JSON.parse(chunk);
                console.log('token: ' + tokenResult.access_token)
                callback(tokenResult.access_token);
            });
        }).on('error', function(error) {
            console.log(error);
        })

        tokenRequest.write(postData);
        tokenRequest.end();
    }
}

module.exports = yaasOAuth;