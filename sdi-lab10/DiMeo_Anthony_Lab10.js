alert("JavaScript works!");

//Global variables

var sum = 0;

//Problem1 
//Function

var returnSum = function() {


for (var i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum = sum + i;
  }
}
};


//Problem 2
var powerball1;
var powerball2;
var powerball3;
var powerball4;
var powerball5;

var myArray = [ 25,
				30,
				19,
				17,
				54,
				1, 
];

var powerball = function() {
	
	console.log("The numbers are: ");
	for (var i = 1; i <= 5; i++) {
		
var powerball1 = Math.floor(Math.random() * 59 + 1);
var powerball2 = Math.floor(Math.random() * 59 + 1);
var powerball3 = Math.floor(Math.random() * 59 + 1);
var powerball4 = Math.floor(Math.random() * 59 + 1);
var powerball5 = Math.floor(Math.random() * 59 + 1);

		
console.log(powerball1 + powerball2 + powerball3 + powerball4 + powerball5);
	}




};


//Function calls
//Problem 1
returnSum(sum);
console.log("There are " + sum + " multiples of the numbers 3 and 5 that are below 1000!");

//Problem2
powerball();
console.log("The powerball number is " + myArray[5] + ".");












