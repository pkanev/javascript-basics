"use strict";
// Write a JavaScript function replaceATag(str) that replaces in a HTML document 
// given as string all the tags <a href="…">…</a> with corresponding tags [URL=…]…/URL]. 
// Write JS program aTagReplacer.js that invokes your function with the 
// sample input data below and prints the output at the console.
function replaceATag(str){
	// match[0] returns the matched string which is then modified accordign to the problem
	var match = str.match(/<a href=.*>/),
		oldTag = match[0],
		newTag = '';
		
	newTag = oldTag.replace('<a', '[URL');
	newTag = newTag.replace('>', ']');
	newTag = newTag.replace('</a>', '[/URL]');
	var output = str.replace(oldTag, newTag);
	console.log(output);
}
var input = '<ul>\n <li>\n  <a href=http://softuni.bg>SoftUni</a>\n </li>\n</ul>';
replaceATag(input);