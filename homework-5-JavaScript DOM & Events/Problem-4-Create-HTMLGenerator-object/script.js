// Create a JavaScript object named HTMLGenerator. 
// The object has a couple of functions attached to it:
// •	createParagraph(id, text) -> creates a <p></p> HTML element that is attached to 
// the id of the element, passed as an argument. The paragraph’s text is passed as
// an argument of the function as well.
// •	createDiv(id, class)  -> creates a <div></div> HTML element that is attached to 
// the id of the element, passed as an argument. The div’s class is passed as
// an argument of the function as well.
// •	createLink(id, text, url) -> creates a <a></a> HTML element that is attached to 
// the id of the element, passed as an argument. The link’s text and url are passed as 
// arguments of the function as well.

'use strict';
var HTMLGen = {}; // Originally this was called HTML Generator, but the given input asks for HTMLgen
HTMLGen.createParagraph = function (id, text) {
		var parent = document.getElementById(id);
		var paragraph = document.createElement('p');
		paragraph.innerHTML = text;
		parent.appendChild(paragraph);
	};
HTMLGen.createDiv = function (id, className) {
		var parent = document.getElementById(id);
		var div = document.createElement('div');
		div.className += div.className ? ' '+ className : className;
		parent.appendChild(div);
	};
HTMLGen.createLink = function(id, text, url) {
		var parent = document.getElementById(id);
		var link = document.createElement('a');
		link.innerHTML = text;
		link.href = url;
		parent.appendChild(link);
	};

HTMLGen.createParagraph('wrapper', 'Soft Uni');
HTMLGen.createDiv('wrapper', 'section');
HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');