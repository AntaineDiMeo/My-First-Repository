alert("JavaScript works!");


var checkAt = function(email) {
	console.log(email);
	console.log("Checking for @ and . in the email.");
	
	var firstSymbol = email.indexOf("@");
	var secondSymbol = email.indexOf(".");
	
	console.log(email);
	
 	var returnString = email.substring(firstSymbol, secondSymbol);
 	
 	console.log(returnString);
 };
 
checkAt("Booyah@gmail.com");

