var shared = require('./shared.js')

module.exports = function exec(params){
    var device = shared.device

    console.log(params.state)

    if(params.state == 1){
        console.log('Start')
        device.turnOn().then(r => {console.log(r)}).catch(e => {console.log(e)})
    }else if(params.state == 0){
        console.log('Stop')
        device.turnOff().then(r => {console.log(r)}).catch(e => {console.log(e)})
    }
}