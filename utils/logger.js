const log4js = require("log4js");
const fs = require('fs');
log4js.configure({
  appenders: {
    "stdout" : { type: "stdout" },
    "file"   : { type: "file", filename: "logs/out.log" }
  },
  categories: {
    default:  { appenders: [ 'stdout', 'file' ], level: 'info' }
  }
});
exports.logger = log4js.getLogger();
