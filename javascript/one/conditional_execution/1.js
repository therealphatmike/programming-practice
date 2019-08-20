/*
    Exercise 1 of conditional execution:
    
    Write a program that only prints the users names that start with 'A'
    The users array is provided for you.
    Use the getFirstLetter() method to get the first letter of each name.
    Place your code inside the for loop.

    To test your code run it with the command node 1.js

    Your code should output:
    Alice
    Anders
    Anna
    Alexandra
*/

// the list of users. Don't worry too much about this syntax
var users = [
    'Alice',
    'Ian',
    'Bjorn',
    'Anders',
    'Larry',
    'Ralf',
    'alina',
    'Hanna',
    'Anna',
    'Michael',
    'Jon',
    'Alexandra',
];

// this allows us to iterate over the list of users. Place your code *inside* this block
for (var i = 0; i < users.length; i++) {
    // YOUR CODE HERE
}

// getFirstLetter() returns the first letter of the persons name
function getFirstLetter(name) {
    return name[0];
}