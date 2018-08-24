#!/usr/bin/env node

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