/**
 * Created by i324068 on 09/11/15.
 */
var conf = {};

conf.clientId = "xxx";
conf.clientSecret = "xxxx";
conf.tenant = "xxx";

conf.getRequestOptions = function (token, path, postData) {
    return {
        host: 'api.yaas.io',
        path: path,
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Content-Length': Buffer.byteLength(postData),
            'Authorization' : 'Bearer ' + token
        }
    }
};

module.exports = conf;