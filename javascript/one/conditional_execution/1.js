/*
    Exercise 1 of conditional execution:
    
    Write the code that only prints the users names that start with 'A'.

    We have a skeleton of helpers provided below. Don't let the code worry you.
    This is just some set up needed to accept user input from the command line
    using JavaScript. Place your logic where it says YOUR CODE HERE.

    We ask the user for their name and we only want to greet them if their name
    starts with an 'A'. So, if the user inputs "Michael" we will not take any
    action. If the user inputs 'Alice', we will print "Hello, Alice!" to the
    command line.

    The very bottom method is a method called getFirstLetter and it takes an
    string argument and returns the first letter. You can use it like so:

    var name = "alice";
    console.log(getFirstLetter(name)); // this will write "a" to the console
*/

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", function(input) {
  //YOUR CODE HERE


  // DO NOT DELETE this is important for the code to exit properly.
  rl.close();
});

/*
    this is a helper function. if you pass in the users input it will return the
    first letter
*/
function getFirstLetter(input) {
    return input[0];
}