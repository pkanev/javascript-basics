'use strict';
var check = document.getElementById('bill'),
	billDetails = document.getElementById('billInfo'),
	resetBtn = document.getElementById('reset');
window.onload = function(){
	billDetails.style.visibility='hidden';
	check.checked=false;
};
function makeRequired(bool){
	var requiredElements= {};
	requiredElements.firm = document.getElementById('firm');
	requiredElements.mol = document.getElementById('mol');
	requiredElements.eik = document.getElementById('eik');
	requiredElements.dds = document.getElementById('dds');
	requiredElements.address2 = document.getElementById('address2');
	if(bool) {
		for (var key in requiredElements) {
			requiredElements[key].required = true;
			requiredElements[key].disabled = false;
		}
	} else {
		for (var key in requiredElements) {
			requiredElements[key].required = false;
			requiredElements[key].disabled = true;
		}
	}

};
check.onclick = function(){
	var test;
	if(check.checked) {
		billDetails.style.visibility='visible';
		test = true;
	} else {
		billDetails.style.visibility='hidden';
		test = false;
	}
	makeRequired(test);
};
resetBtn.onclick = function () {
	billDetails.style.visibility='hidden';
	makeRequired(false);
}