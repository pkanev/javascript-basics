// Write a JavaScript function findYoungestPerson(array) that accepts 
// as parameter an array of people, finds the youngest person that 
// has a smartphone and returns his full name. 
// Write a JS program youngestPerson.js to execute your function 
// for the below examples and print the result at the console.
'use strict';
function findYoungestPerson(input) {
	var minAge = Number.MAX_VALUE,
		person = {};
	for (var key in people) {
		// check if the object has a smartphone
		if (people[key].hasSmartphone){
			// check if age is less than the current min age
			if(people[key].age < minAge) {
				minAge = people[key].age;
				person = people[key];
			}
		}
	}
	console.log('The youngest person is ' + person.firstname + ' ' + person.lastname);
}

var people = [
  { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false }, 
  { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
  { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
  { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }]

findYoungestPerson(people);