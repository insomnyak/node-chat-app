const moment = require('moment');

// UNIX Epic: Jan 1st 1970 00:00:00 AM
// stored in milliseconds

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// // date.add(1, 'y').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// 10:35 am
// 6:01 am
var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = new Date().getTime();
var date = moment(createdAt);
console.log(date.format('h:mm a'));