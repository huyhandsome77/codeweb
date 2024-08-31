function login(event) {
  even.preventDefault();
  var usernameLogin = document.getElementById("username").value;
  var passwordLogin = document.getElementById("password").value;
  function checkLogin(){
    if (usernameLogin.length >= 6 && usernameLogin.length<=20){
        if(passwordLogin.length >= 8 && passwordLogin.length<=30){
            return true;
        }
    }
    return false;
}
if (checkLogin()) {
    alert("Login success");
    window.location.href = "index.html";
} else {
    alert("Login failed: Username must be 6-20 characters, and password must be 6-30 characters.");
}
}

let slider = document.querySelectorAll('#content-bottom .slider');

let current = 0;
function autoSlider(){
    for(let i = 0; i < slider.length; i++){
        slider[i].style.display = 'none';
    }
    current++;
    if(current >= slider.length){
        current = 0;
    }
    slider[current].style.display = 'block';
    setTimeout(autoSlider, 3000);
}

autoSlider();