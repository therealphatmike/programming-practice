# CONDITIONAL EXECUTION

Conditional Execution is how we make programs make decisions. If you have
ever had a conversation where someone said something along the lines of,
"If the store has soy milk, buy half a gallon. If not, then buy almond milk",
then you start to understand what we're going for in this module.

As programs grow in complexity we need to be able to only execute certain code
when the internal state of the program meets certain criteria (remember that
the internal state of a program just means the current snapshot of all of the
values in a program at a certain time). Say we are making a program where we
only wanted to print out numbers if they were divisible by a particular number
that the user suppled, we would need to control the circumstances in which
our program printed out the numbers.

Conditional execution in Swift is very similar to how we speak in 
english:
    
```
if someCondition {
	//then do something
}
```
 

Expanding on that idea, if we wanted to print out 'foo' for every other
number we could specify what is called an 'else' clause to create a sort
of two way decision:

```
if someCondition {
	// then do something
} else {
	// do something different
}
```

Furthermore, if we wanted to print out fizz for numbers divisible by 3,
buzz for numbers divisible by 5, and fizzbuzz for numbers divisible by
BOTH 3 and 5, we would need a way to have a 3rd condition:

```
if isDivisibleBy3And5 {
	print("fizzbuzz")
} else if isDivisibleBy3 {
	print("fizz")
} else if isDivisibleBy5 {
	print("buzz")
}
```

There are other ways to achieve this logic. One of them only involves 2 'if'
clauses. Take a moment and see if you can reason about how that code would look.

Navigate to 1.swift and follow the instructions for the programs.
