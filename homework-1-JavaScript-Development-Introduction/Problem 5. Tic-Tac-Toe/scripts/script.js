var currentPlayer = 0, turns = 0, victory = false, tiles = document.getElementsByClassName('play-area'), table = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], sign = '';

function updatePlayer(x) { //this switches between the two players
		x++;
		return x % 2;
}
function checkForVictory(x, y, arr, value) {
	//after every move checks to see if anyone won
		var check1 = true, check2 = true, diagonalA = false, diagonalB = false, idStr = '';

	//check victory condition for the current row
		for (var i = 0; i < 3; i++) {
			if (arr[x][i] !== value){
				check1 = false;
			}
		}
		//check victory condition for the current column
		for (var i = 0; i < 3; i++) {
			if (arr[i][y] !== value){
				check2 = false;
			}
		}


	//paint the row if it is a winning one
	if (check1 === true) {
		for (var i = 0; i < 3; i++) {
			idStr = (x+1).toString() + (i+1).toString();
			document.getElementById(idStr).style.color = 'red';
		}
	}
	//paint the column if it is a winning one
	if (check2 === true) {
		for (var i = 0; i < 3; i++) {
			idStr = (i+1).toString() + (y+1).toString();
			document.getElementById(idStr).style.color = 'red';
		}
	}

	//check if the first diagonal is winning and paint it
	if ((table[0][0] === value) && (table[1][1] === value) && (table[2][2] === value)) {
		diagonalA = true;
		for (var i = 1; i < 4; i++) {
			idStr = (i).toString() + (i).toString();
			document.getElementById(idStr).style.color = 'red';
		}
	}
	//check if the second diagonal is winning and paint it
	if ((table[0][2] === value) && (table[1][1] === value) && (table[2][0] === value)) {
		diagonalB = true;
		document.getElementById('13').style.color = 'red';
		document.getElementById('22').style.color = 'red';
		document.getElementById('31').style.color = 'red';
	}

	//return true to mark the end of the game
	if (check1 === true || check2 === true || diagonalA === true || diagonalB === true) {
		return true;
	}
}
function updateTable(id, value, arr){
	//obtain the coordinates for the table array
	var y = (Number)(id%10) - 1;
	id = (Number)(id/10);
	var x = Math.floor((Number)(id)) - 1;
	arr[x][y] = value;
	//check if anyone wins
	victory = checkForVictory(x, y, arr, value);
	return arr;
}

document.getElementById('player-turn').innerHTML = 'It is player ' + (currentPlayer+1) + '\'s turn.';

function replay() {
	//clean the tiles
	for (var i = 0; i < tiles.length; i++) {
		tiles[i].innerHTML = '';
		tiles[i].style.color = 'blue';
	}
	//reset all
	victory = false;
	currentPlayer = 0;
	document.getElementById('player-turn').innerHTML = 'It is player ' + (currentPlayer+1) + '\'s turn.';
	turns = 0;
	table = [[0,0,0], [0,0,0], [0,0,0]];
	document.getElementById('button').style.display = 'none';
}

function playBox(box) {
	if (victory !== true) {
		//hide the replay button
		document.getElementById('button').style.display = 'none';
		if(document.getElementById(box.id).childNodes.length === 0) {
			sign = (currentPlayer === 0 ? 'X' : 'O');

			currentPlayer = updatePlayer(currentPlayer);
			box.innerHTML = sign;
			table[box.id] = sign;
			table = updateTable(box.id, sign, table);
			if (victory !== true) {
				//update the info box to show next player
				document.getElementById('player-turn').innerHTML = 'It is player ' + (currentPlayer+1) + '\'s turn.';
				turns++;
			} else {
				//we have a victory
				document.getElementById('player-turn').innerHTML = 'VICTORY!';
				//show the replay button
				document.getElementById('button').style.display = 'flex';
			}
		}
		if (turns===9 && victory !== true){
			//no one won
			document.getElementById('player-turn').innerHTML = 'GAME OVER! DRAW!';
			//show the replay button
			document.getElementById('button').style.display = 'flex';
		}
	}
}