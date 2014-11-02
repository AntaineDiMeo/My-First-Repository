alert("JavaScript works!");

/* Anthony DiMeo
   SDI 1411
   Day 2 lab code
 */

 // variables

var dungeonEnter;
var firstQuest;
var secondQuestGiver = "Lady Mara";
var ladyMaraQuest;
var enterUserName;
var characterHeight;
var characterWeight;
var monster;

var rewardAmount = "400";
var noGold = "0";
var goldAdd = "1000";
 
 // my outputs

enterUserName = prompt("What is your skyrim character name: ");
console.log("Your character name is " + enterUserName + ".");

characterHeight = prompt(" Enter your character's height: ");
characterHeight = parseInt(characterHeight);
console.log("Your character's height is " + characterHeight + ".");

characterWeight = prompt(" Enter your character's weight: ");
characterWeight = parseInt(characterWeight);
console.log("Your character's weight is " + characterWeight + ".");

console.log("Welcome to the dungeon ");

dungeonEnter = confirm("To enter the dungeon press ok "); 

console.log("This woman inside the dungeon named " + secondQuestGiver + " wants to give you a quest");

ladyMaraQuest = confirm("Accept the Quest? Click OK for yes or Cancel for No");
console.log("It is now " + ladyMaraQuest + " that you took the quest" + ".");

monster = confirm("You've encountered a skeleton! Fight or run? Click OK for yes or Cancel for No");
console.log("It is now " + monster + " you beat the skeleton");



console.log("If you won you recieve " + rewardAmount + "." + " If you ran you receive " + noGold + ".");

console.log(" You now have " + (rewardAmount + goldAdd) + " gold");






