const {Device} = require("ps4-waker");
const config = require('./getConfig')

module.exports = function(params) {
	gladys.param.getValue('BROADLINK_MACHINE_UUID')
    .then((machineUuid) => {
        let ps4 = new Device(config());
    	switch(params.deviceType.type) {
            case 'binary' :
                switch(params.state.value) {
                    case 1:
                        ps4.turnOn().then(function () {
                            console.log('Console started !')
                            ps4.close();
                        }).catch(
                            function (err) {
                                console.log(err)
                            }
                        );
                        break;
                    case 0:
                        ps4.turnOff().then(function () {
                            console.log('Console stopped !')
                            ps4.close();
                        }).catch(
                            function (err) {
                                console.log(err)
                            }
                        );
                        break;
                    default:
                        if(params.state.value != 0 || params.state.value != 1){
                            console.log("Erreur de données !");
                        }
                        break;
                }
                break;
            case 'game':
                ps4.startTitle(params.deviceType.identifier).then(function () {
                    console.log('Jeux '+params.deviceType.name+' started !')
                    ps4.close();
                }).catch(
                    function (err) {
                        console.log(err)
                    }
                );
                break;
            default:
                console.log("Type not defined !");
                break;
        }
  	})
};