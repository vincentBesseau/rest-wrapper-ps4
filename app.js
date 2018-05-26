const init = require('./lib/init')
const power = require('./lib/power')
const application = require('./lib/application')
const app = require('express')()

init()

app.listen(30)
console.log("PS4 server started !")

app.get('/', (request, response) =>{
    response.writeHead(404, {'Content-Type': 'text/plain'})
    response.end('Not found\n');
})

app.get('/ps4/power', (request, response) =>{
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('\n');
    power(request.query)
})

app.get('/ps4/app', (request, response) =>{
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('\n');
    application(request.query)
})