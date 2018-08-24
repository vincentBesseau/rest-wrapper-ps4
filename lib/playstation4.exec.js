module.exports = function(params) {
	gladys.param.getValue('BROADLINK_MACHINE_UUID')
    .then((machineUuid) => {
    	switch(params.deviceType.type) {
            case 'binary' :
                switch(params.state.value) {
                    case 1:
                        var value = 1
                        break;
                    case 0:
                        var value = 0
                        break;
                    default:
                        if(params.state.value != 0 || params.state.value != 1){
                            console.log("Erreur de données !");
                        }
                        break;
                }
                break;
            case 'game':
                var value = params.deviceType.identifier
                break;
            default:
                console.log("Type not defined !");
                break;
        }
	  	
	  	if (typeof value !== 'undefined') {
			let topic = 'gladys/machine/'+machineUuid+'/module/gladys-playstation4/notify'
            let json = '{"_module":"playstation4","_type":"'+params.deviceType.type+'","_value":"'+value+'"}'
			gladys.modules.mqtt.emit(topic,json)
		}
  	})
};