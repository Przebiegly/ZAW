const http = require('express');

const router = http.Router();


router.get('/', (request, response)=>{
    response.send('Strona główna, witamy!');
    console.log("new connection");
});


const winUser = require('../services/winUser');

router.get('/win-user', winUser);

const selfTest = require('../services/selftest');
router.get('/self-test', selfTest);

module.exports = router;