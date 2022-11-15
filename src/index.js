//Challenge 1
function hooray() {
    alert("Hooray!");
}

let clickButton = document.querySelector("#special-button");
clickButton.addEventListener("click",hooray);
//Challenge 2
function showPassword(event){
 let passwordInput = document.querySelector("#password-input");
 alert(passwordInput.value);
}
let passwordForm = document.querySelector("#password-form");
passwordForm.addEventListener("submit",showPassword);

//Challenge 3

function showEmail(event){
    let emailInput = document.querySelector("#email-input").value;
    let usernameInput = document.querySelector("#username-input").value;
    alert(`Email : ${emailInput} 
    username : ${usernameInput}`);

}
let signUpForm = document.querySelector("#signup-form");
signUpForm.addEventListener("submit",showEmail)