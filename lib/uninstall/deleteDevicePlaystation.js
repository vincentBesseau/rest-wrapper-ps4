module.exports = function deleteDevicePlaystation(){
	sails.log.debug('Début désinstallation du device PS4');
	gladys.device.getByService({'service':'gladys-playstation4'})
	.then((devices) => {
		devices.forEach(function(device) {
			gladys.device.delete(device)
		})
	})
	sails.log.debug('Fin désinstallation du device PS4');
}