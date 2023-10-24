

const theDiv = document.querySelector(".thediv");
let count = 1;
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");

const button = document.querySelector(".button");
button.addEventListener("click", (e) => {
  e.preventDefault;
  if(count == 1){
    //no change
  }
  else{
    loginBtn.classList.add("underline");
    signupBtn.classList.remove("underline");
    theDiv.classList.remove("animation2");
    theDiv.classList.add("animation");
    setTimeout(() => {
      theDiv.classList.remove("animation2");
    }, 600);    
  }      
});

const button2 = document.querySelector(".button2");
button2.addEventListener("click", (e) => {
  e.preventDefault;
  theDiv.classList.remove("animation");
  theDiv.classList.add("animation2");
  signupBtn.classList.add("underline");
  loginBtn.classList.remove("underline");
  setTimeout(() => {
    theDiv.classList.remove("animation");
  }, 600);
  ++count;  
});