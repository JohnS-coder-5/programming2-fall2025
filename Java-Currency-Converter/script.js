function amountUSD(){
	let USD = document.getElementById("USD").value;

	let EURconversion = document.getElementById("EURconversion");
	
	let GBPconversion = document.getElementById("GBPconversion");

	let CADconversion = document.getElementById("CADconversion");

	let CHFconversion = document.getElementById("CHFconversion");

	let JPYconversion = document.getElementById("JPYconversion");



	if (USD != 0){
		const darkSound = new Audio("cha-ching-7053.mp3")
		darkSound.play();
		
		EURconversion.innerText = (USD*0.86+" Euro's")
		GBPconversion.innerText = (USD*0.76 + " Pounds Sterlings")
		CADconversion.innerText = (USD*1.4 + " Canadian Dollars")
		CHFconversion.innerText = (USD*8+ " Swiss Francs")
		JPYconversion.innerText = (USD*155.87+ " Japanse Yen")
		
	}
}