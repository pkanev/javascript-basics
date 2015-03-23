// Write a JavaScript function clone(obj) that accepts as parameter an object of reference type. 
// The function should return a deep copy of the object. 
// Write a second function compareObjects(obj, objCopy) that compare the two objects 
// by reference (==) and print on the console the output given below. 
// Read in Internet about "deep copy" of an object and how to create it.

function clone(obj) {
	var objCopy = JSON.parse(JSON.stringify(obj));
	return objCopy;
}

function compareObjects(a, b) {
	var output = 'a == b --> ';
	output += (a == b);
	console.log(output);
}

var a = {name: 'Pesho', age: 21} 
var b = clone(a);
compareObjects(a, b); //returns false, b is a deep copy of a

a = {name: 'Pesho', age: 21} ;
b = a; // not a deep copy
compareObjects(a, b); //returns true, b is a reference to a