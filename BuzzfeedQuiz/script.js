let bird = 0 
let dog = 0 
let cat = 0
let rabitt = 0



function getResults() {

console.log("here");

//QUESTION 1

	let spring = document.getElementById('spring');
	if(spring.checked) { // if filled in
		console.log("The user chose spring");
		bird = bird + 1
	}


	let summer = document.getElementById('summer');
	if(summer.checked) {
		console.log("The user chose summer");
		dog = dog +1
	}




	let fall = document.getElementById('fall');
	if(fall.checked) {
		console.log("The user chose fall");
		cat = cat+1
	}


	let winter = document.getElementById('winter');
	if(winter.checked) {
		console.log("The user chose winter");
		rabitt = rabitt + 1
	}

//QUESTION 2

	let yellow = document.getElementById('yellow');
	if(yellow.checked) { // if filled in
		console.log("The user chose yellow");
		dog = dog + 1
	}

	let blue = document.getElementById('blue');
	if(blue.checked) { // if filled in
		console.log("The user chose blue");
		bird = bird + 1
	}

	let white = document.getElementById('white');
	if(white.checked) { // if filled in
		console.log("The user chose white");
		rabitt = rabitt + 1
	}

	let black = document.getElementById('black');
	if(black.checked) { // if filled in
		console.log("The user chose black");
		cat = cat + 1
	}

//QUESTION 3

	let frolic = document.getElementById('frolic');
	if(frolic.checked) { // if filled in
		console.log("The user chose frolic");
		dog = dog + 1
	}

	let travel = document.getElementById('travel');
	if(travel.checked) { // if filled in
		console.log("The user chose travel");
		bird = bird + 1
	}

	let cabin = document.getElementById('cabin');
	if(cabin.checked) { // if filled in
		console.log("The user chose cabin");
		rabitt = rabitt + 1
	}

	let mischief = document.getElementById('mischief');
	if(mischief.checked) { // if filled in
		console.log("The user chose mischief");
		cat = cat + 1
	}

//QUESTION 4

	let flight = document.getElementById('flight');
	if(flight.checked) { // if filled in
		console.log("The user chose flight");
		bird = bird + 1
	}

	let moodlifter = document.getElementById('moodlifter');
	if(moodlifter.checked) { // if filled in
		console.log("The user chose moodlifter");
		dog = dog + 1
	}

	let restful = document.getElementById('restful');
	if(restful.checked) { // if filled in
		console.log("The user chose restful");
		rabitt = rabitt + 1
	}

	let featherfalling = document.getElementById('featherfalling');
	if(featherfalling.checked) { // if filled in
		console.log("The user chose featherfalling");
		cat = cat + 1
	}

//BUTTON

console.log(cat)
console.log(bird)
console.log(dog)
console.log(rabitt)



	if (cat >= dog && cat >= bird && cat >= rabitt){
		console.log("cat")
		const darkSound = new Audio("cat.mp3")
		darkSound.play();
		window.location.href = "cat.html"
		
	}

	else if (dog >= cat && dog >= bird && dog >= rabitt){
		console.log("dog")
		const darkSound = new Audio("dog.mp3")
		darkSound.play();
		window.location.href = "dog.html"
		
	}

	else if (bird >= dog && bird >= cat && bird>= rabitt){
		console.log("bird")
		const darkSound = new Audio("bird.mp3")
		darkSound.play();
		window.location.href = "bird.html"
	
	}

	else if (rabitt >= dog && rabitt>= bird && rabitt>= cat){
		console.log("rabitt")
		const darkSound = new Audio("rabitt.mp3")
		darkSound.play();
		window.location.href = "rabitt.html"
	}















}