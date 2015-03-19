/*
Write a JavaScript function that accepts a number variable to convert from km/h to knots 
(knot is a maritime unit measuring speed). The result should be printed on the console, rounded up to 
the second sign after the decimal point. Run the program through Node.js.
*/

var kmh = 20;

function convertFromKmToKnots(x){
	var knots = x * 0.5399568034557235;
	knots = knots.toFixed(2);
	return knots;
}

console.log(convertFromKmToKnots(kmh));
console.log(convertFromKmToKnots(112));
console.log(convertFromKmToKnots(400));