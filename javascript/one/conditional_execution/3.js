/*
    Exercise 3 of conditional execution:

    We are going to continue on with the idea presented in 2.js.

    This program will require multiple conditional execution blocks.

    We want to allow the user to enter any number, decimal OR integer and positive or negative.
    This means we need to have the code run a check if the user input contains a '.'. I have 
    provided a helper method for this called containsDecimal(). It will return a boolean value.

    So,
        console.log(containsDecimal("123.90"));
    will log true to the console.

    We can use the return value of that method to know if we need to call JavaScript's parseInt()
    method OR the parseFloat() method. As you'll recall from module 0, a float (or floating point
    number) is a decimal number.

    Our next conditional execution block should look pretty much the same as exercise 2. If the 
    input is negative, output "The number is negative". If the input it positive, output "The 
    number is positive".

    Both parseInt and parseFloat return numbers. We need to assign the return of these methods to
    a variable so we can make decisions based on the number later in our program. Assign the value
    returned from these methods to the inputAsNumber variable I have provided.

    Documentation on parseInt() and parseFloat() can be found here:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
*/
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(input) {
  var inputAsNumber;

  //YOUR CODE HERE
  

  // DO NOT DELETE this is important for the code to exit properly.
  rl.close();
});

/*
    Helper method. Will return true if a string contains a '.' and false if it does not.
*/
function containsDecimal(input) {
    return input.includes('.');
}