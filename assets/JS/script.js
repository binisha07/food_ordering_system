// Signin Popup
const openLogin = document.getElementById("openLogin");
const loginPopup = document.getElementById("loginPopup");
const closeLogin = document.getElementById("closeLogin");

openLogin.addEventListener("click", function () {
  loginPopup.style.display = "flex";
});

closeLogin.addEventListener("click", function () {
  loginPopup.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === loginPopup) {
    loginPopup.style.display = "none";
  }
});


// SIGNUP POPUP
const openSignup = document.getElementById("openSignup");
const registerPopup = document.getElementById("registerPopup");
const closeSignup = document.getElementById("closesignup");

openSignup.addEventListener("click", function () {
  registerPopup.style.display = "flex";
});

closeSignup.addEventListener("click", function () {
  registerPopup.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === registerPopup) {
    registerPopup.style.display = "none";
  }
});

//Singin from signup and vive versa 
const gotoSignup = document.getElementById("gotoSignup");
const gotoLogin = document.getElementById("gotoSignin");

gotoSignup.addEventListener("click", function(e){
  e.preventDefault();
  loginPopup.style.display = "none";
  registerPopup.style.display = "flex";
});

gotoLogin.addEventListener("click", function(e){
  e.preventDefault();
  registerPopup.style.display = "none";
  loginPopup.style.display = "flex";
});