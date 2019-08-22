/*
    Exercise 2 of conditional execution:

    Write a program that will take a non-zero intger from the user and tell the user if the number 
    is positive or negative.

    If the number is positive, output "The number is positive"
    If the number is negative, output "The number is negative"

    There are two potential solutions to this problem. Since we already did some logic to check
    the first character in a string, I use JavaScript's parseInt() method to turn a string into an
    integer. I place this parsed value into a variable called inputAsNumber. Use this variable to
    do your logic.

    Docs on how to use JavaScript's parseInt method can be found here:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
*/
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a non-zero number: ", function(input) {
  var inputAsNumber = parseInt(input);

  //YOUR CODE HERE



  // DO NOT DELETE this is important for the code to exit properly.
  rl.close();
});