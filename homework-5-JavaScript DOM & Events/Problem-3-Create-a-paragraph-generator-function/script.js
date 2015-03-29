// Create a JavaScript function createParagraph(id, text). 
// It creates a paragraph DOM element with text 
// (the text value that has been passed as an argument). 
// After the element has been created it is appended to 
// a html element with id that has been passed as 
// an argument in the function. 

'use strict';
function createParagraph(id, text) {
	var parent = document.getElementById(id);
	var paragraph = document.createElement('p');
	paragraph.innerHTML = text;
	parent.appendChild(paragraph);
}

createParagraph('wrapper', 'Some text');