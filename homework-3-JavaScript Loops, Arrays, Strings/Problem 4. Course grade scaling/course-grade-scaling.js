// You are given a JSON string containing an array of Students (Objects). 
// Your task is to scale their scores upwards by increasing them with 10%. 
// After that you should add a field that shows whether the student 
// has passed or failed the exam (passed exam means 100 or more points at the exam). 
// Finally you should filter out only the students that have passed the exam 
// and print them out sorted alphabetically. 
"use strict";
function gradeScale(input) {
	input.forEach(function(x) {
		x.score = Math.round(x.score * 1.1 * 10) / 10;
		x.hasPassed = (x.score >= 100);
	});
	input = input.filter(function(x) {
		return x.hasPassed === true;
	});
	input = input.sort(function (x, y){
		return x.name > y.name;
	});
	var output = JSON.stringify(input);
	console.log(output);
}

var input = [
    {
        'name' : 'Пешо',
        'score' : 91
    },
    {
        'name' : 'Лилия',
        'score' : 290
    },
    {
        'name' : 'Алекс',
        'score' : 343
    },
    {
        'name' : 'Габриела',
        'score' : 400
    },
    {
        'name' : 'Жичка',
        'score' : 70
    }
]

gradeScale(input);