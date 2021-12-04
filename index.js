var readLineSync = require("readline-sync");
// const chalk = require("chalk");

var username = readLineSync.question("Enter your name");
var birthdate = readLineSync.question("Please Enter your Date of Birth in (DD/MM/YYYY) format");

// var userDD = parseInt(birthdate.substring(0,2));
// var userMM = parseInt(birthdate.substring(4,6));
// var userYYYY = parseInt(birthdate.substring(6));


console.log("Welcome "+username+" !!!!");
console.log("Your Date of Birth is "+birthdate+" "+userDD+" "+userMM+" "+userYYYY);