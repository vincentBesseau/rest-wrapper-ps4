module.exports = function (sails) {

    var exec = require('./lib/playstation4.exec.js');
    var uninstall = require = require('./lib/uninstall.js')

    return {
        exec,
        uninstall,
    };
};