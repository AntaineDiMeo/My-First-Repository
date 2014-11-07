alert("JavaScript works!");

/*
Create four functions. All four functions should accept two number arguments. 
Each function should perform a different arithmetical operation: division, multiplication, 
subtraction, and addition. Each function should then return the outcome of the operation.

Next, you'll create prompts that allow a user to enter three items: the two numbers being 
manipulated and the operation to be performed. For example, if you want to add two numbers together,
 the first two prompts should accept and parse values as numbers, and the third prompt should accept 
 something that signifies the operation (such as +. -. /, * or the words add, subtract, multiply, divide). 
 Include the operation signifier in the prompt so that a user knows what must be entered.

The number returned should be stored in a return value variable and then output to the console in some 
meaningful way so that a user can see what numbers have been used, what operation was performed, and what the outcome is.

Something to keep in mind: the code should always return meaningful data. Thus, if a user were to try 
to divide by zero, the code should not throw an error; it should give the user useful feedback.
*/


	var numberOne;
	var numberTwo;
	var total;
	var choice;
	
	
	

		var addition = function(numberOne, numberTwo) {
			addition = numberOne + numberTwo;
			return addition;
			
};

		var subtraction = function(numberOne, numberTwo) {
			subtraction = numberOne - numberTwo;
			return subtraction;
};

		var multiplication = function(numberOne, numberTwo) {
			multiplication = numberOne * numberTwo;
			return multiplication;
};

		var division = function(numberOne, numberTwo) {
			division = numberOne/numberTwo;
			return division;
};

console.log("Welcome to the calculator app");
		
		numberOne = parseFloat(prompt("Enter the first number:"));
		
		numberTwo = parseFloat(prompt("Enter the second number:"));
		
		choice = prompt("Please select from one of the following:  +, -, *, /");

		
		
		
		if  (choice === "+") {
		    console.log(numberOne + "+" + numberTwo + "=");
			total = addition(numberOne, numberTwo);
			
			
			}  else if (choice === "-") {
			console.log(numberOne + "-" + numberTwo + "=");
			total = subtraction(numberOne, numberTwo);
		
			
			}  else if (choice === "*") {
			console.log(numberOne + "*" + numberTwo + "=");
			total = multiplication(numberOne, numberTwo);
				
			}  else if (choice === "/") {
			console.log(numberOne + "/" + numberTwo + "=");
			total = division(numberOne, numberTwo);
		 if (total === 0) {
			console.log("You cannot divide by zero silly");
		} else {
			console.log();
		}
			
}	

		console.log(total);
		console.log("Refresh the browser for another solution");

		




	
	
	
	
	
	
	
	
