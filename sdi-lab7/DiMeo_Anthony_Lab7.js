alert("JavaScript works!");

var musicDatabaseOne;
var musicDatabaseTwo;
var musicDatabaseThree;
var sync;


var musicConstructor = function(musicArtist, musicGenre, musicSong, musicYear) {
	
	
	
	this.artist = musicArtist;
	this.genre = musicGenre;
	this.song = musicSong;
	this.year = musicYear;
	this.bought = false;
	this.sellMusic = function() {
		this.bought = true;
	};
	
	};



var musicData = function() {
		
		for (var musicKey in jsonData.music) {
			
 		if (musicKey == 0) {
 			
 			   musicDatabaseOne = new musicConstructor(jsonData.music[musicKey].artist, jsonData.music[musicKey].genre, jsonData.music[musicKey].song, jsonData.music[musicKey].year, jsonData.music[musicKey].bought);
}
		if (musicKey == 1) {
		 	   musicDatabaseTwo = new musicConstructor(jsonData.music[musicKey].artist, jsonData.music[musicKey].genre, jsonData.music[musicKey].song, jsonData.music[musicKey].year);
}
		if (musicKey == 2) {
			   musicDatabaseThree = new musicConstructor(jsonData.music[musicKey].artist, jsonData.music[musicKey].genre, jsonData.music[musicKey].song, jsonData.music[musicKey].year);
}

console.log("You downloaded a new song onto your computer");
			console.log(jsonData.music[musicKey]);
	};	
			
};
musicData();

console.log("It is " + musicDatabaseOne.bought + " the songs were bought.");
musicDatabaseOne.sellMusic();
console.log("Checking....Checking.....Checking...... It's " + musicDatabaseOne.bought + " that the music was bought.");





console.log("The song " + musicDatabaseOne.song + " by " + musicDatabaseOne.artist + " was added to your Itunes Library");
console.log("The song " + musicDatabaseTwo.song + " by " + musicDatabaseTwo.artist + " was added to your Itunes Library");
console.log("The song " + musicDatabaseThree.song + " by " + musicDatabaseThree.artist + " was added to your Itunes Library");


sync = confirm("Sync 3 songs to your Ipod?");


if (sync === true) {
			console.log("You have synced " + musicDatabaseOne.song + ", " + musicDatabaseTwo.song + " and " + musicDatabaseThree.song + " to your Ipod.");
}	else {
	console.log("The songs " + musicDatabaseOne.song + ", " + musicDatabaseTwo.song + " and " + musicDatabaseThree.song + " have not synced to your Ipod.");
}








		



