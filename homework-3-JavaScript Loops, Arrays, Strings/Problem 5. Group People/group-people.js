// Write a JavaScript function groupBy('criteria') that groups an array of people by age, 
// first or last name. Create a Person constructor to add every person in the person array. 
// The groupBy('criteria') function must return an object, with keys – 
// the groups (age, firstName and lastName) and values – arrays with people in this group. 
// Print on the console every entry of the returned object. 
// Use function overloading (i.e. just one function). 
// You may need to find how to use constructors. 
"use strict";
function Person(fname, lname, age) {
  return {
    firstName: fname, 
    lastName: lname,
    age: age
  }
}


 var people = [
    new Person("Scott", "Guthrie", 38),
    new Person("Scott", "Johns", 36),
    new Person("Scott", "Hanselman", 39),
    new Person("Jesse", "Liberty", 57),
    new Person("Jon", "Skeet", 38)
];

function groupBy(criteria) {
    var obj = {};
    for(var key in people) {
        var index = ['Group '+people[key][criteria]];
        var indiv = people[key];
        // check if index exists
        if((index in obj)) {
            // index exists, simply add string
            obj[index].push(' ' + indiv.firstName + ' ' + indiv.lastName + '(age ' + indiv.age + ')');
        } else {
            // create index and string
            obj[index] = [];
            obj[index].push(indiv.firstName + ' ' + indiv.lastName + '(age ' + indiv.age + ')');
        }
    }
	for(var key in obj) {
        //  build a string that matches the required output
        var str = key + ' : [' + obj[key] + ']';
        console.log(str);
    }
}

groupBy('firstName');
groupBy('age');
groupBy('lastName');