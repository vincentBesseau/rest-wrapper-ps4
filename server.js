#!/usr/bin/env node

// if we are running inside sails.js, it means we are running inside Gladys
// This file is not supposed to run inside Gladys so stop now.
if ( typeof sails !== 'undefined' && sails ) {
    return '';
}

const config = require("./config.js")
const {Device} = require("ps4-waker");

const gladysMqttAdapter = require('gladys-mqtt-adapter')({
    MACHINE_ID: config.machineId,
    MQTT_URL: config.mqttUrl,
    MQTT_USERNAME: config.mqttUsername,
    MQTT_PASSWORD: config.mqttPassword,
    MODULE_SLUG: 'gladys-playstation4' 
});

const get_options = function () {
    return {
        address: config.address,
        credentials: config.creds,
        timeout: 5000
    }
};

console.log('Create device ');
gladysMqttAdapter.device.create({
    device : {
        name: 'Playstation 4',
        protocol: 'MQTT',
        identifier: 'Playstation4',
        service: 'gladys-playstation4',
    },
    types : [{
                name: 'PS4 - State',
                type: 'binary',
                identifier: 'ps4state',
                unit: '',
                sensor: false,
                min: 0,
                max: 1,
            },]
})

gladysMqttAdapter.on('message-notify', function(data) {
    if(data._module === 'playstation4') {
        let ps4 = new Device(get_options());
        if(data._type === 'binary') {
            if(data._value == 1){
                ps4.turnOn().then(function () {
                    console.log('Console started !')
                    ps4.close();
                }).catch(
                    function (err) {
                        console.log(err)
                    }
                );
            }else if(data._value == 0){
                ps4.turnOff().then(function () {
                    console.log('Console stopped !')
                    ps4.close();
                }).catch(
                    function (err) {
                        console.log(err)
                    }
                );
            }
        } else if (data._type === 'game') {
            ps4.startTitle(data._value).then(function () {
                res.json(OK);
                ps4.close();
            }).catch(
                function (err) {
                    console.log(err)
                }
            );
        } else {

        }
    }
});
