const conf = require('../etc/conf');
const selfTest = function(request, response) {
    response.send('Self test in console');
    console.log('App is working');
    console.log("name: " + conf.name);
    console.log("url: http://localhost");
    console.log("port: " + conf.port);


}
module.exports = selfTest;