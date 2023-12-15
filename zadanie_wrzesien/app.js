
const http = require('express');
const data = require('./script-01');
const conf = require('./etc/conf')

const app = http();

//routes
// app.get('/', (request, response)=>{
//     response.send('MiApp home page');
//     console.log('homepage');
// });

const router = require('./routes/api');
app.use('/', router);


app.listen(conf.port);

console.log('App: ' + conf.name)
console.log('http://localhost:' + conf.port);
