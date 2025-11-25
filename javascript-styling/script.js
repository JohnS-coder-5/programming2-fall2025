let counter = 0;

function mode() {


	if (counter % 2 ==0 ) {
		const darkSound = new Audio("sample-6s.mp3")
		darkSound.play();

		document.body.style.color = "white";
		document.body.style.backgroundColor = "MidnightBlue";
		document.getElementById("navbar").style.color = "white";
		document.getElementById("navbar").style.backgroundColor = "MidnightBlue";

		document.getElementById("testimonials").style.backgroundColor = "MidnightBlue";
		document.getElementById("testimonials").style.color = "gray";

		document.getElementById("features").style.backgroundColor = "#404E7C";
		document.getElementById("features").style.color = "black";



		document.getElementById("welcome").style.backgroundColor = "#404E7C";




		const links = document.getElementsByClassName("link");
		console.log(links)
		for (const item of links) {
			item.style.color = "white";
		}

		const testimonials = document.getElementsByClassName("test");
		console.log(testimonials)
		for (const item of testimonials) {
			item.style.color = "black"; 
		}

		const h4s = document.getElementsByTagName('h4')
		for (const item of h4s) {
			item.style.color = "black"
		}


		document.getElementById("mode").innerText= "Light  🔆  "
		counter = counter + 1; 
 	} 	else {
	 		document.getElementById("mode").innerText = "Dark 🌙"
	 		counter = counter + 1; 
	 		

			document.body.style.color = "black";
			document.body.style.backgroundColor = "#f9f9f9";
			document.getElementById("navbar").style.color = "black";
			document.getElementById("navbar").style.backgroundColor = "white";

			document.getElementById("testimonials").style.backgroundColor = "white";
			document.getElementById("testimonials").style.color = "black";

			document.getElementById("features").style.backgroundColor = "#f0f0f0";
			document.getElementById("features").style.color = "black";



			document.getElementById("welcome").style.backgroundColor = "#e5edff";




			const links = document.getElementsByClassName("link");
			console.log(links)
			for (const item of links) {
				item.style.color = "black";
			}

			const testimonials = document.getElementsByClassName("test");
			console.log(testimonials)
			for (const item of testimonials) {
				item.style.color = "white"; 
			}

			const h4s = document.getElementsByTagName('h4')
			for (const item of h4s) {
				item.style.color = "white"
			}


 	}
}





















