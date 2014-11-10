alert("JavaScript works!");



var pickClass = function() {
	
var alert;

var rpgClasses = ["Knight",
				  "Mage",
				  "Archer",
				  "Priest",
				  "Soldier",
				  "Thief"];
				  console.log(rpgClasses);
				 
				 
				 
var rpgWeapons = ["Greatsword",
				  "Wand",
				  "Bow",
				  "Book",
				  "Shortsword and shield",
				  "Dagger"];
				  
				  console.log("These are the five rpg classes to choose from and the weapons that they will use in game.");
				  
				 
for (var i = 0;  i < 1;  i++) {

console.log("The " + rpgClasses[0] + "'s weapon is a " + rpgWeapons[0]);

console.log("The " + rpgClasses[1] + "'s weapon is a " + rpgWeapons[1]);

console.log("The " + rpgClasses[2] + "'s weapon is a " + rpgWeapons[2]);

console.log("The " + rpgClasses[3] + "'s weapon is a " + rpgWeapons[3]);

console.log("The " + rpgClasses[4] + "'s weapon is a " + rpgWeapons[4]);

console.log("The " + rpgClasses[5] + "'s weapon is a " + rpgWeapons[5]);
       
};

alert = confirm("But wait, there's more!");

console.log("There is actually a hidden class that unlocks after you beat the game.");
rpgClasses.push("Dragon Slayer");
rpgWeapons.push("Dragon sai");
console.log(rpgClasses);
console.log("The hidden class is a " + rpgClasses[6] + " and the weapon they use is a " + rpgWeapons[6]);


	

	
};
pickClass();



	



