/*Write a HTML page (with text field, button, and paragraph).
Write JS program calcExpression.js that calculates any expression 
put in the text field and prints it in the paragraph. 
Link the JS file to the HTML file. */
document.getElementById('button').onclick = function () {
	var inp = document.getElementById('input').value,
	result = eval(inp);
	
	if(result) {
		document.getElementById('output').innerHTML = result;
	} else {
		document.getElementById('output').innerHTML = 'Please enter a valid equation';
	}
}