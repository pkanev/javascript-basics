/*Write a script that enters the coefficients a, b and c of a quadratic equation 
a*x2 + b*x + c = 0 and calculates and prints its real roots. 
Note that quadratic equations may have 0, 1 or 2 real roots. 
*/

var a = 4, b = 2, c = 1;

function quadratic(a, b, c) {
	var discriminant = b * b - 4 * a * c, x1, x2;
	if (discriminant > 0){
		x1 = (-b - Math.sqrt(discriminant))/(2*a);
		console.log('X1 = ' + x1);
		x2 = (-b + Math.sqrt(discriminant))/(2*a);
		console.log('X2 = ' + x2);
	} else if (discriminant === 0){
		x1 = (-b)/(2*a);
		x2 = x1;
		console.log('X = ' + x1);
	} else {
		x1 = undefined;
		x2 = undefined;
		console.log('No real roots');
	}
}
quadratic(a, b, c);