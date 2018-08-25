module.exports = function deleteDevicePlaystation(){
	sails.log.debug('Début installation du device PS4');


	var newDevice = {
        device : {
	        name: 'Playstation 4',
	        protocol: 'MQTT',
	        service: 'gladys-playstation4',
	    },
	    types : [{
	                name: 'PS4 - State',
	                type: 'binary',
	                unit: '',
	                sensor: false,
	                min: 0,
	                max: 1,
	            }]
    };

	sails.log.debug('Fin installation du device PS4');

	return gladys.device.create(newDevice);
}