//  NAME:  Enter your name here
//  DATE:  Enter the current date
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

/*

var p;
var q;
var r;

p = confirm("First value:  Click OK for true or Cancel for false.");
q = confirm("Second value:  Click OK for true or Cancel for false.");

if (p && q(q || r))  {
    console.log("With " + p + " and " + q + " and " + r + ", the outcome is TRUE.");
} else {
    console.log("With " + p + " and " + q + " and " + r + ", the outcome is FALSE.");
};

*/

/*
*//*The local movie theater has a ticket price of $12.00, but if you are a senior 
(55 and older) you get a discount price of $7.00. This is also true if you are under 10 years of age. 
Create the code that will allow you to enter the age of the customer and then output to the 
console the price he or she will pay for a ticket. */
/*
var age,
	ticketPrice = 12,
	movie,
	discountTicket = 7,
	ageFactor = true;

age = prompt("What is your age?");
console.log("You are " + age + " years old.");

movie = prompt("What movie do you want to see?");

	
if (age >= 55 || age < 10) {
console.log("You qualify for a $" + discountTicket + " discount ticket. ");
console.log("That'll be $" + discountTicket + " for " + movie + "." + " Enjoy your movie!");
} else {
	console.log("You have to pay $" + ticketPrice + " for your ticket price");
	console.log("That'll be $" + ticketPrice + " for " + movie + "." + " Enjoy your movie!");
}


 To meet maintenance standards, your car's front two tires should have the same pressure and the back 
 two tires should have the same pressure. But, the front tires can have a different pressure than the back tires, 
 so it is not necesary for all four tires to have the same pressure. Create a single conditional that will determine
 if the tires are up to specifications.
 



var frontLeft,
	frontRight,
	backLeft,
	backRight,
	userInput,
	pressure = true;

	
	console.log("To meet maintenance standards you need to have pressureized tires.");
	console.log("You have to have a Psi rating anywhere from 30 to 35 to have correct specifications.");
	
	userinput = confirm("Are your front tires the same pressure and your back tires the same pressure? \nClick Ok for Yes and Cancel for No");


	if (userinput === true)
	 {
		console.log("Your car is ready to roll. So its specifications are true");
	} else {
		console.log("Your car is not ready to drive so its specifications are" + userinput + ".");
	}
	
	*/
	


