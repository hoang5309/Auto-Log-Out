var log4js = require('log4js'); // include log4js

var logger = log4js.getLogger();
logger.level = 'debug';

function write(msg){
    logger.debug(msg);
}

module.exports = {
    write: write
}