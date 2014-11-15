alert("JavaScript works!");

//Problem 1
console.log("Problem 1");

var checkAt = function(email) {
	
	
	var email = "@";
	var oneDot = ".";
	var check = true;
	var checkWrong = false;
	
	console.log("Checking for @ and the . in the email address....Booyah@gmail.com");
	
	var firstCharacter = email.charAt("6");
	console.log(firstCharacter);
	var secondCharacter = oneDot.charAt("13");
	console.log(secondCharacter);
	
 	
	
	console.log(email);
	console.log(oneDot);
	console.log("Symbols found. Checking to see if valid.");
	
	
	if (email === "@") {
		console.log("It is " + check + " that the email is valid");
	} else {
		console.log("The email is " + checkWrong + " not correct");
	}
	
 	 };
 
checkAt("Booyah@gmail.com");











console.log(" ");
console.log(" ");
console.log(" ");



//Problem 2
console.log("Problem 2");



var drinkMenu = function(firstSeparate) {
	
	console.log("This is a list of drinks on the menu to choose from.");
	console.log(firstSeparate);
	
	var secondSeparate = "";
	
	var splitArray = firstSeparate.split(",");
	console.log(splitArray);
	
	for (var i = 0; i < splitArray.length; i++) {
		
		secondSeparate = secondSeparate + splitArray[i] + "/";
	};
	
	console.log(secondSeparate);
	
};


drinkMenu("Soda, Tea, Beer, Wine, Water");






























