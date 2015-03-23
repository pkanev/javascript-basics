// Write a JavaScript function countDivs(html) to count the number of all DIVs 
// in given HTML fragment passed as string. 
// Write a JS program countOfDivs.js that invokes your function 
// and prints the output at the console. 
'use strict';
function countDivs(html) {
	var count = 0;
	while (html.indexOf('<div') != -1) {
		// there is at elast one div tag left
		count ++;
		// erase the div tag or else this loop will be indefinite
		html = html.replace('<div', '');
	}
	return count;
}
console.log (countDivs('<!DOCTYPE html>'+
'<html>'+
'<head lang="en">'+
    '<meta charset="UTF-8">'+
    '<title>index</title>'+
    '<script src="/yourScript.js" defer></script>'+
'</head>'+
'<body>'+
    '<div id="outerDiv">'+
        '<div'+
    'class="first">' +
            '<div><div>hello</div></div>' +
        '</div>' +
        '<div>hi<div></div></div>        ' +
        '<div>I am a div</div>' +
    '</div>'+
'</body>'+
'</html>'
));