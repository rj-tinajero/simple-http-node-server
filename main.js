const {reverse} = require("./reverse");
//index 2 holds the first actual command line argument
let argument = process.argv[2];
console.log(reverse(argument));

