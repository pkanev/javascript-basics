// Write a HTML page holding a text field, a div and a button. 
// Write a JavaScript function that is called when the button is clicked. 
// The function copies the value of the text field and pastes it in the div. 
// If the value of the text field is a valid email (containing a ‘@’ character 
// and a domain e.g. ‘softuni.bg’), the div’s background is set to light green. 
// If the value of the text field is an invalid email, the div’s background is set to red.

'use strict';
// load the function only after the html is loaded
window.onload = function(){
	var input = document.getElementById('input'),
		output = document.getElementById('output'),
		btn = document.getElementById('btn');
		input.value = null;
	btn.onclick = function(){
		// copy the text into the div
		output.innerHTML = input.value;
		//check if valid email
		var validEmail = function () {
		    // More complex regular expressions can be used as well
		    var re = /\S+@\S+\.\S+/;
		    return re.test(input.value);
		}();
		if(validEmail) {
			output.style.backgroundColor = 'lime';
		} else {
			output.style.backgroundColor = 'red';
		}
	}
	// if enter is presssed
	document.onkeypress = function (event) {
        if (event.which == 13 || event.keyCode == 13) {
            // if enter is pressed simulate btn.click
            btn.onclick();
        }
    };
};