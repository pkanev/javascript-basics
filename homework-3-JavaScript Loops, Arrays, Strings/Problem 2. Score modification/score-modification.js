// You are given an array of numbers. 
// Your tasks are to first filter out all valid exam scores 
// (between 0 and 400) and afterwards scale them downwards 
// by removing 20% out of each score. 
// Finally you should print out the changed scores sorted in ascending order. 
"use strict";
function modifyScore(input){
	var output = [];
	// filter the score
	output = input.filter(function(score) {
		return (score >= 0 && score <= 400);
	});

	// scale down
	output = output.map(function(score) {
		score = score * 0.8;
		// this makes the new score to 1 decimal place
		score = Math.round(score * 10) / 10;
		return score;
	});

	// order by ascending
	output = output.sort(function(a, b) {
		return a > b;
	});
	// print
	console.log(output);
}

modifyScore([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]);