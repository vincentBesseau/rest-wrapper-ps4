module.exports = function (sails) {

    const setup = require('./lib/setup')
    const exec = require('./lib/exec')
    const init = require('./lib/init')

    
    gladys.on('ready', function(){
        init()
    })
      
    return {
        setup,
        exec,
        init,
    }
}