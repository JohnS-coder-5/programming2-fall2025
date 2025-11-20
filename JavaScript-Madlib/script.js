function makeStory() {
    const noun = document.getElementById("nounInput").value;
    const verb = document.getElementById("verbInput").value;
    const location = document.getElementById("locationInput").value;
    const secondNoun = document.getElementById("secondNounInput").value;
    const activity = document.getElementById("activityInput").value;
 	const food = document.getElementById("foodInput").value;
 	const drink = document.getElementById("drinkInput").value;
 	const animal = document.getElementById("animalInput").value;





    // simple story using the noun
    const story = "Once upon a time, there was a " + noun + " who loved to code JavaScript. This " + noun + " loved to " + verb + 
    ". The " +noun+ " lived in a " + location + ". One day, the "+noun+" encountered a " + secondNoun+
    ". The "+noun+ " and the " +secondNoun+ " enjoyed " + activity + " together. Soon the " +secondNoun+noun+ " became close friends. The " +secondNoun+ "'s favorite food was " +food+
    " while the " + noun +"'s favorite drink was " + drink + ". One day they decided to explore the forest, and in there they found a " + animal 
    ;


    document.getElementById("storyOutput").innerText = story;
}