var shared = require('./shared.js')
var Promise = require('bluebird');

module.exports = function exec(params){
    var device = shared.device

    if(!device) return Promise.reject('Device not connected !')

    if(params.state.value == 1 && params.deviceType.deviceTypeIdentifier == 'power'){
        device.turnOn()
    }else if(params.state.value == 0 && params.deviceType.deviceTypeIdentifier == 'power'){
        device.turnOff()
    }
    
    return Promise.resolve()
}