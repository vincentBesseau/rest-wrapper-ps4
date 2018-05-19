module.exports = function (sails) {

    const setup = require('./lib/setup')
    const exec = require('./lib/exec')
    const init = require('./lib/init')
    const install = require('./lib/install')

    
    gladys.on('ready', function(){
        init()
    })
      
    return {
        setup,
        exec,
        init,
        install,
    }
}