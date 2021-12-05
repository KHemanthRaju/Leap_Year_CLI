var readLineSync = require('readline-sync');
let chalk = require('chalk');

var userName = readLineSync.question("Please enter your name: ");

console.log(chalk.blue("\nWelcome, ", userName));

var userDOB = readLineSync.question(chalk.yellow.underline("\nPlease enter your DOB in format DD/MM/YYYY: "));


var userDD = parseInt(userDOB.substring(0,2));
var userMM = parseInt(userDOB.substring(3,5));
var userYYYY = parseInt(userDOB.substring(6));

function checkDateLeapYear(year)
{
  if(((year%4) === 0) && ((year%100 != 0) || (year%400 === 0)))
  {
    console.log(chalk.bold.cyan("\nYou ARE born in leap year! Share this on your social media! "));
  }
  else 
  {
    console.log(chalk.bold.magenta("\nYou are NOT born in leap year"));
  }
}


checkDateLeapYear(userYYYY);
