alert("JavaScript works!");


/* Anthony DiMeo
   SDI 1411
   Day 3 lab code
 */

 // variables
var enterUserName;
var dungeonEnter = "yes";
var level;
var race;
var monster;
var situation = "fight";
var situationTwo = "run";
var rewardAmount = 40;
var noGold = 0;
var gold;
var total = rewardAmount + gold;
var endGoal;


 
 // my outputs

enterUserName = prompt("What is your character name: ");
level = prompt("What is your level " + enterUserName + "?");
race = prompt("What is your race?");
console.log("Your name is " + enterUserName + " and you are a level " + level + " " + race +".");

if (dungeonEnter === "yes") {
	dungeonEnter = prompt("Do you want to enter the dungeon...yes or no?");
	console.log("Welcome to the dungeon " + enterUserName + ".");	
}
	if (dungeonEnter === "no") { 
	dungeonEnter = confirm("Just kidding you have to go into the dungeon");
	}
	
	
	if (situation === "fight");
	  {
	  
	monster = prompt("Dungeon boss encountered! Lvl 40 Skeleton King...fight or run? Your decision!");
	console.log( enterUserName + " defeated Skeleton King. You recieve " + rewardAmount + " for winning");
	gold = prompt("How much gold is in your inventory right now?");
	console.log("Added " + gold + " gold to your inventory");
	gold = parseInt(gold + total + rewardAmount);
	total = gold + rewardAmount;
	console.log("You now have " + total + " gold in your inventory.");
	
	}  if (situation === "run");   {
	 	
		situation = confirm("You recieve " + noGold + " for running away");

endGoal = confirm("You may fight the skeleton King at any time." + situation + " Exiting dungeon");
	
	}
	 



 

