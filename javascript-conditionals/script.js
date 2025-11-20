function agerator(){
	let age = document.getElementById("age").value;


// 	if (age == 10) {
// 		alert("You are the best age ! ")
// 	} 
// 	else if{

// 		if (age>10){
// 				alert("You were  the best age in " + (age - 10) + " years ago.")
// 			}
// 			else{
// 				alert("You will be the best age in " +(10-age)+ " years.")
// 			}
// 	}
// }
	let message = document.getElementById("message");

	if (age == 10) {
		message.innerText = ("You are the best age")
	}
	else if (age>10){
		message.innerText = ("You were the best age in " + (age - 10) + " years ago.")
	}
	else if (age<0){
		message.innerText = ("Enter an actual age man, try again")
	}
		else{
			message.innerText = ("You will be the best age in " +(10-age)+ " years.")
		}
	}
let message = document.getElementById("message");