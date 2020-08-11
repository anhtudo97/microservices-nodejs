import configDev from './config.dev';
import configProd from './config.prod';

const { NODE_ENV } = process.env

module.exports = NODE_ENV === 'production' ? configProd : configDev;