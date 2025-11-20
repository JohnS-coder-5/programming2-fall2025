function namegen() { 
	//gets values for the user entered
	let month = document.getElementById("month").value;
	let age = document.getElementById("age").value;
	let color = document.getElementById("color").value;


	let nameFirst = "";
	let nameSecond = "";
	let nameThird = "";


	//generate 1st part of name

	if (month == "January") {
		nameFirst = "Do"
		document.getElementById("result").style.color = "blue"  //<--- This changes the color of the text based on the month
	} else if (month == "February") {
		nameFirst = "Re"
		document.getElementById("result").style.color = "blue"
	} else if (month == "March") {
		nameFirst = "Mi"
		document.getElementById("result").style.color = "green"
	} else if (month == "April") {
		nameFirst = "Fa"
		ocument.getElementById("result").style.color = "green"
	} else if (month == "May") {
		nameFirst = "Fa"
		document.getElementById("result").style.color = "green"
	} else if (month == "June") {
		nameFirst = "La"
		document.getElementById("result").style.color = "purple"
	} else if (month == "July") {
		nameFirst = "Ti"
		document.getElementById("result").style.color = "purple"
	}  else if (month == "August") {
		nameFirst = "La"
		document.getElementById("result").style.color = "orange"
	} else if (month == "October") {
		nameFirst = "Re"
		document.getElementById("result").style.color = "orange"
	} else if (month == "November") {
		nameFirst = "Mi"
		document.getElementById("result").style.color = "orange"
	}  else if (month == "December") {
		nameFirst = "Fa"
		document.getElementById("result").style.color = "blue"
	}




	//generate 2nd part of name

	if (age <15) {
		nameSecond = "Bubba"
	}	else if (age < 40) {
			nameSecond = "Bip"
	}	else {
			nameSecond = "Bap"
	}
	document.getElementById("result").style.fontSize = (age * 2)+ "px";
		
	

	//generate 3rd part of name
	if (color == "pink" || color == "purple" || color == "red" || color == "green" ||
 color == "blue" || color == "white") { 
		nameThird="of Denmark";
}
 	else {
 		alert("choose a better color");
 		return;
 	}

 	document.getElementById("result").style.backgroundColor = color;










	//display name

	document.getElementById("result").innerText = nameFirst + nameSecond + nameThird;
}




