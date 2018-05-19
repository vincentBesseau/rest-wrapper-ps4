var shared = require('./shared.js')
var Device = require('ps4-waker').Device
var config = require('../config')

module.exports = function init(){
    var device = new Device({
        credentials: './ps4-creds.json',
        address: config.address
    });

    shared.device = device
}