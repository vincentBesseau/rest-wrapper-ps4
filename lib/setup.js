module.exports = function(){
    var newDevice = {
        device: {
            name: `Ps4`,
            protocol: `ps4`,
            service: `ps4`,
            identifier: config.address
        },
        types: [{
            name: 'Power',
            type: 'binary',
            identifier: 'power',
            sensor: false,
            min: 0,
            max: 1
        }]
    };
  
    gladys.device.create(newDevice)
};