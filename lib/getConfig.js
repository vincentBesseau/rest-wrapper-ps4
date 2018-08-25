const config = require("./../config.js")

module.exports = function(params) {
    return {
        address: config.address,
        credentials: config.creds,
        timeout: 5000
    }
};