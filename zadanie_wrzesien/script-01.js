
let data = {};

const init = () => {
    console.log('init()');
    data.author = 'BL'; 
    data.desc = 'second app';
    data.ver = '1.0';
    data.port = '4444';
}

const display = () => {
    console.log(data);
}
module.exports = { init, display };
