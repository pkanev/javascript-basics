var input = [999999, 1000000];
function Solve(arr) {
	//new function, this one creates an associative array and does the fib sequence only once
	var fibNums = isFib(arr[1]);
	function isFib(val){
		var fibNums = { 1: true };
        var f1 = 1;
        var f2 = 1;
        while (true) {
            var f3 = f1 + f2;
            if (f3 > arr[1]) {
                return fibNums;
            }
            fibNums[f3] = true;
            f1 = f2;
            f2 = f3;
        }
	}

	function buildTable(arr) {
		var output ='<table>\n';
		output += '<tr><th>Num</th><th>Square</th><th>Fib</th></tr>\n';
		for (var i = arr[0]; i <= arr[1]; i++) {
			var fib = fibNums[i] ? "yes" : "no";
			var sq = i*i;
			output += '<tr><td>'+i+'</td><td>'+sq+'</td><td>'+fib+'</td></tr>\n';
			
		}
		output += '</table>';
		return output;
	}
	return buildTable(arr);
}
console.log(Solve(input));

//old function which checks for every value
// function isFib(val){
// 		var prev = 0,
// 		curr = 1,
// 		fib = 'no';

// 		while(prev <= val){
// 	   		if(prev == val){
// 		    	fib ='yes';
// 			}
// 		    curr = prev + curr;
// 		    prev = curr - prev;
// 	 	}
// 	 	return fib;
// 	}
// 	