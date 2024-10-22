// LANDING PAGE LOGIC
const loginForm = document.querySelector(".login-form");
const authErrorMessage = document.querySelector(".authentication-error-message");
const loginUsername = document.querySelector("#loginUsername");
const loginPassword = document.querySelector("#loginPassword");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(loginUsername.value !== "shrek") {
        authErrorMessage.innerHTML = "username must be shrek";
    }
    if(loginPassword.value !== "onions") {
        authErrorMessage.innerHTML = "password must be onions";
    }
    if(loginUsername.value === "shrek" && loginPassword.value === "onions") {
        document.location.href = "./feed.html";
    }
})