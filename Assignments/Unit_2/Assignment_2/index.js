/*
Write Javascript to perform the following tasks. 
Please push your changes back to your personal OR_MTF_Submissions directory. 
*/

// USE JavaSCript to complege these tasks:

// 1. Change the background color of The first page by selecting the appropriate ID.
document.querySelector("body").style.backgroundColor = "lightblue";

// 2. Change the inner text of the h1 to say anything that you would like.
document.getElementById("title").innerHTML = "Hola Mundo!";

// 3. Create a variable that is equal to the DOM object that has the id random-btn.
let button = document.getElementById("random-btn");

// 4. Create a variable that is equal to the DOM object that has the id pageTitle. 
let someTitle = document.getElementById("pageTitle");

// 5. Create a fucntion called randomSize that changes the font size of pageTitle to be between 1px and 100px.
function randomSize() {
	let size = Math.floor(Math.random()*100);
	document.getElementById("pageTitle").style.fontSize = "size";
}

// 6. Create an event listener that runs the randomSize function on click.
document.querySelector("body").onclick = function() {randomSize()};
