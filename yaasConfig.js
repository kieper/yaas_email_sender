/**
 * Created by i324068 on 09/11/15.
 */
var conf = {};

conf.clientId = "ztSWQCKDyaf8ekP1bk2q2PNDZwfzsZWF";
conf.clientSecret = "1cqM1MPow9h4yZTS";
conf.tenant = "pjaromin_project";

conf.getRequestOptions = function (path, postData) {
    return {
        host: 'api.yaas.io',
        path: path,
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
        }
    }
};

module.exports = conf;