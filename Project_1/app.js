const validator = require('validator');
const chalk = require('chalk');
const fs = require('fs');
var a = validator.default.isEmail('adsf@gmailcom');
console.log(chalk.red.bold.inverse.italic.strikethrough.underline(a));
console.log(chalk.blue.bold.italic.strikethrough.underline(a));