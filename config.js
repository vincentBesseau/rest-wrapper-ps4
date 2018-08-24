module.exports = {
    address: process.env.DEVICE_ADRDRESS || '', // The adresse of your ps4
    creds: process.env.CREDS || './ps4-creds.json', 
    machineId: process.env.GLADYS_MACHINE_ID || '', // Interval between Bluetooth scans
    mqttUrl: process.env.MQTT_URI || '', // the timeout of each bluetooth scan
    mqttUsername: process.env.MQTT_USERNAME || '', // the URL of your main Gladys Instance
    mqttPassword: process.env.MQTT_PASSWORD || '', // your gladys security token. You can find it in Gladys Dashboard "Parameters" => "Security". 
    token: process.env.GLADYS_TOKEN || '',
};