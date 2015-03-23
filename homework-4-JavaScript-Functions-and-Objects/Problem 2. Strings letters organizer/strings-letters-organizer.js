// Write a JavaScript function sortLetters(string, boolean) 
// that gets as an input a string and a boolean. 
// The function sorts all letters in the string in alphabetical order 
// and returns the newly formed string. 
// The sorting is ascending if the boolean is true 
// otherwise the sorting is in descending order. Example:
// Note: The sorting is case-insensitive but the output should use the same casing as the input! 
// Hint: You are allowed to use .sort() function.

function sortLetters(str, bool) {
	var arr = str.split('');
	arr.sort(function (a,b) {
		if (bool) {
			return a.toLowerCase() > b.toLowerCase();
		} else {
			return a.toLowerCase() < b.toLowerCase();
		}
	});
	console.log('\''+arr.join('')+'\'');
}
sortLetters('HelloWorld', true);
sortLetters('HelloWorld', false);