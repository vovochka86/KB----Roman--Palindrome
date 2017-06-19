var isPalindrome = require('is-palindrome');
var romanize = require('romanize');
var readlineSync = require('readline-sync');


var strNumb = readlineSync.question('Ввести число: ');
// now we are wainting for input

console.log('Палиндром?');
console.log(isPalindrome(parseInt(strNumb)));
console.log('А теперь в Римском формате');
console.log(romanize(parseInt(strNumb)))
