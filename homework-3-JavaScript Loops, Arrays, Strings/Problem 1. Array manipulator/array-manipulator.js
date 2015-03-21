// You are given an array of objects. 
// Your task is to write a JavaScript code that filters out
// the numbers of that array (removes all non-number objects).
// Then you should: 1. Find the Min number, 2. Find the Max number, 
// 3. Find the most frequent number. 
// Finally you should print out the numbers you have found 
// and the filtered array sorted in descending order.

"use strict";
function manipulator(arr){
	var output = [],
		maxFreq = 0,
		mostFreq = 0;

	Array.prototype.Occurs = function(arg){
	    var counter = 0;

	    for(var i = 0; i< this.length; i++){
	        if(this[i] === arg)
	            counter++;
	    }
	    return counter;
	};

	for (var index = 0; index < arr.length; index++) {
		if(!isNaN(arr[index])){
			output.push(arr[index]);
		}
	}

	output.sort(function(a, b) {
    	return a > b;
	});

	for (var key in output) {
		var freq = output.Occurs(output[key]);
		if (freq > maxFreq) {
			maxFreq = freq;
			mostFreq = output[key];
		}
	}
	maxFreq = output.Occurs(12);
	console.log('Min number: ' + output[0]);
	console.log('Max number: ' + output[output.length-1]);
	console.log('Most frequent number: ' + mostFreq);
	console.log(output.reverse());
}
manipulator(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]]);