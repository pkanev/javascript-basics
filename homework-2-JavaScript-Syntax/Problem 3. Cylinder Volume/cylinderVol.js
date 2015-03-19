/*Write a JavaScript function calcCylinderVol(arr) that accepts the following parameters: 
radius and the height of a straight circular cylinder. 
The function calculates the volume of the cylinder. 
Write JS program cylinderVol.js that calculates the volume of a few cylinders. 
The result should be printed on the console. Run the program through Node.js. 
*/
function calcCylVol(arr){
	var volume = arr[0] * arr[0] * Math.PI * arr[1];
	return volume.toFixed(3);
}

console.log(calcCylVol([2, 4]));
console.log(calcCylVol([5, 8]));
console.log(calcCylVol([12, 3]));