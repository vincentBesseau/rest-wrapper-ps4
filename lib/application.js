var shared = require('./shared.js')

module.exports = function application(params){
    var device = shared.device

    device.startTitle(params.app).then(r => {console.log(r)}).catch(e => {console.log(e)})
}