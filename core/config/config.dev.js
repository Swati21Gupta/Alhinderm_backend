/**
 * @file(config.dev.js) With all variables that is need on whole project
 * @version 1.0.0
 * @lastModifed 11-Jan-2018
 *
 */
import path from "path";

let config = {};

config.logFileDir = path.join(__dirname, '../../log');
config.logFileName = 'app.log';
config.dbHost = process.env.dbHost || 'localhost';
config.dbPort = process.env.dbPort || '27017';
config.dbName = process.env.dbName || 'alhinderm';
config.serverPort = process.env.serverPort || 8090;

export default config;