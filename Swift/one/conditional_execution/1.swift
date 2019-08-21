/*
    Exercise 1 of conditional execution:
    
    Write the code that only prints the users names that start with "A".
    We have a skeleton of helpers provided below. Don't let the code worry you.
    This is just some set up needed to accept user input from the command line
    using Swift. Place your logic where it says YOUR CODE HERE.
    We ask the user for their name and we only want to greet them if their name
    starts with an "A". So, if the user inputs "John" we will not take any
    action. If the user inputs "Alice", we will print "Hello, Alice!" to the
    command line.
*/

/*
    this is a helper function that will return the first
    character of a string. Use this to your advantage!

    i.e. 
    let str = "hello world"
    print(getFirstLetter(of: str))

    will print out "h" 
*/
func getFirstLetter(of str: String) -> Character {
    return str.first! // we'll talk about these ! later...
}

print("What is your name?")
let input = readLine()! 

// YOUR CODE HERE
