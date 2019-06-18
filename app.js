
var addTime = require('./index.js');

console.info(addTime(12, 30, 30)); // 13:00
console.info(addTime(23, 59, 31)); // 00:30
console.info(addTime(11, 50, 61)); //12:51
console.info(addTime(23, 1, 80)); //00:21
console.info(addTime(23, 1, 260)); //03:21
console.info(addTime(0, 0, 1440)); //00:00