let attempts = 0





function login () {
	let username =  document.getElementById("username").value;
	let password =  document.getElementById("password").value;

	// console.log(username) Used to make sure everythin is fine so far
	// console.log(password)
	let correct_username = "helen-akl"
	let correct_password = "lionel"

	attempts = attempts + 1;

	if (username == correct_username && password == correct_password) {
		document.getElementById("message").innerText = "You got it right";
		document.getElementById("message").style.color = "green"

	} else if (attempts ==3 ) {
		document.getElementById("login").disabled = true;
		document.getElementById("message").innerText = "Youve run out of tries ";
		document.getElementById("message").style.color = "red"


	} else {
		alert("Either ur username of password is incorrect. Try Again.")
		document.getElementById("message").innerText = "You got it wrong";
		document.getElementById("message").style.color = "gold"


	}
}	