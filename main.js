"use strict";

let playerX = document.getElementById("X")
let playerO = document.getElementById("O")
let newG = document.querySelector("input")

playerX.setAttribute("class", "current-player")

let list = document.getElementsByTagName("td")
let curP

function brown (e){
	let curP = document.querySelector('.current-player').id
	console.log(curP)
	
	if (!e.target.classList.contains("X-marker") && !e.target.classList.contains("O-marker")) {
		playerO.classList.toggle("current-player")
		playerX.classList.toggle("current-player")
		
	if (curP == "X") {
		e.target.classList.add("X-marker")
		checkWin("X-marker")
	}
	else if (curP == "O") {
		e.target.classList.add("O-marker")
		checkWin("O-marker")
	}
	}
}


for (let i = 0; i < list.length; i++) {
	list[i].addEventListener("click", brown)
}
newG.addEventListener("click", function () {
	for (let j = 0; j < list.length; j++) {
		list[j].setAttribute("class", "");
		list[j].style.backgroundColor = ""
		list[j].addEventListener("click", brown)
	}
})
		
		
let	wins = [ [0, 1, 2],
			 [3, 4, 5], 
			 [6, 7, 8],
			 [0, 3, 6],
			 [1, 4, 7],
			 [2, 5, 8],
			 [0, 4, 8], 
			 [2, 4, 6] 
			 ];

function checkWin(player) {
		var  grid = Array.from(list, function(square){
		return  square.classList.contains(player);
		});
		
		for (let win of wins) {
		if (grid[win[0]] && grid[win[1]] && grid[win[2]]) {
			for (let sq of win) {


				list[sq].style.backgroundColor = "lightgreen"
			}alert ("YOU WIN")
			

			for (let i = 0; i < list.length; i++) {
				list[i].removeEventListener("click", brown)	
			}
		return true;
		}
	}
	return false;
}
console.log(list)