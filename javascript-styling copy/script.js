let counter = 0;

function mode() {


	if (counter % 2 ==0 ) {
		const darkSound = new Audio("sample-6s.mp3")
		darkSound.play();
		document.getElementById("mode").innerText= "Light  🔆  "
		counter = counter + 1; 
 	} 	else {
	 		document.getElementById("mode").innerText = "Dark 🌙"
	 		counter = counter + 1; 
	
 	}
}





















