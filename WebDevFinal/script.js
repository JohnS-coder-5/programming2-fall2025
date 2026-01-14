const submitBtn = document.getElementById("submit-btn");
const nameInput = document.getElementById("user_name");
const emailInput = document.getElementById("user_email");
const messageInput = document.getElementById("message");

const publicKey = "mOtUcYVVeGNZNnP5B";
const serviceID = "service_32exerg";
const templateID = "template_gzu6loe";

emailjs.init(publicKey);

submitBtn.addEventListener("click", () => {
    // Simple validation: make sure fields are not empty
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert("Please fill in all fields.");
        return;
    }

    submitBtn.innerText = "Just a moment...";

    const inputFields = {
        to_name: "John Sinchi",
        from_name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
    };

    emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
        submitBtn.innerText = "Message Sent Successfully.";
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    })
    .catch((error) => {
        console.log(error);
        submitBtn.innerText = "Something went wrong";
    });
});