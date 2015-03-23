// Write a JavaScript function removeItem(value) that accept as parameter a number or string.
// The function should remove all elements with the given value from an array. 
// Attach the function to the Array type. You may need to read about prototypes in JavaScript 
// and how to attach methods to object types. You should return as a result the modified array.
'use strict';
Array.prototype.removeItem = function (value) {
	for ( var key in this) {
		if (value === this[key]) {
			this.splice(key,1);
		}
	}
	return this;
};

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
console.log(arr.removeItem(1));
arr = ['hi', 'bye', 'hello' ];
console.log(arr.removeItem('bye'));
