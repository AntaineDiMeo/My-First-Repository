alert("JavaScript works!");

//Problem 1

var mathFormat = function(numberOne) {
	
	numberOne = 21;
	console.log(numberOne);
	
	var myPI = Math.round(numberOne);
	console.log(numberOne);
	
	
};
mathFormat();
















//Problem 2

var numberString = function(maybeString) {
	
	maybeString = isNaN("BoB");
	console.log(maybeString);
	
	
	
	if (isNaN == true) {
		console.log("Failed: The string is not a number.");
	} else {
		console.log("Congratulations: The string is a number.");
	}
};
numberString();













//Problem 3

var myDates = function(timeString) {
	
	var firstDate  = new Date("8/27/1992");
	var secondDate = new Date("8/14/1992");
	var returnTime = 312;
	
	console.log("This is my birthday.");
	console.log(firstDate.toDateString());
	console.log("This is my friends birthday");
	console.log(secondDate.toDateString());
	

var daysDiff = firstDate - secondDate;
daysDiff = daysDiff/1000/60/60/24;
var hoursDiff = firstDate - secondDate;
hoursDiff = hoursDiff/1000/60/60;

console.log(daysDiff + " days and " + hoursDiff + " hours.");
	
	if (returnTime == daysDiff) {
		console.log("There are " + daysDiff + " days between me and my friends birthday.");
	} else if (returnTime == hoursDiff) {
		console.log("There are " + hoursDiff + " hours between me and my friends birthday.");
	}
	
};
myDates();












