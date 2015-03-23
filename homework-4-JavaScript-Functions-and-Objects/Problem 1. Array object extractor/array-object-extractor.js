// Write a JavaScript function extractObjects(array). 
// As a function argument you are given an array of different objects with different data types. 
// Your task is to write the JavaScript function that filters out the Objects 
// (all primitive data type objects and arrays are filtered) 
// and returns a new array with the extracted elements. 
"use strict";
function extractObjects(array){
	var log = console.log, output = [], key;
	for (key in array) {
		// check if the array[key] is an object and that it is not an array
		if ( typeof(array[key]) == 'object' && !Array.isArray(array[key])) {
			output.push(array[key]);
		}
	}
	// log(output);
	// log(output) does not print in the correct format as specified by the question.
	
	log('['); //print the opening square bracket
	for(key in output) {
		//prepare a string for each individual object
		var str = ' { ';
		// cycle through the object's properties and their values and attach to the string
		for(var innerKey in output[key]) {
			str += innerKey + ' : ';
			if(typeof output[key][innerKey] === "string") {
				//value is a string, include quotes (')
				str += '\'' + output[key][innerKey] + '\'' + ', ';
			} else {
				//value is not a string, quotes are not needed
				str += output[key][innerKey] + ', ';
			}
		}
		str = str.substring (0, str.length-2); //get rid of the last coma
		str += ' },';
		if (key == output.length - 1) {
			str = str.substring (0, str.length-1); //get rid of the last coma
		}
		// str is ready, print it to the console
		log(str);
	}
	log(']'); //print the closing square bracket
}
var input = [
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}
]
extractObjects(input);