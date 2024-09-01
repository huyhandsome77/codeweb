function login(event) {
  even.preventDefault();
  var usernameLogin = document.getElementById("username").value;
  var passwordLogin = document.getElementById("password").value;
  function checkLogin() {
    if (usernameLogin.length >= 6 && usernameLogin.length <= 20) {
      if (passwordLogin.length >= 8 && passwordLogin.length <= 30) {
        return true;
      }
    }
    return false;
  }
  if (checkLogin()) {
    alert("Login success");
    window.location.href = "index.html";
  } else {
    alert(
      "Login failed: Username must be 6-20 characters, and password must be 6-30 characters."
    );
  }
}

let slider = document.querySelectorAll("#content-bottom .slider");
let dots = document.querySelectorAll("#content-bottom .dots ul li");

let current = 0;
function autoSlider() {
  for (let i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
    dots[current].classList.remove("active");
  }
  current++;
  if (current >= slider.length) {
    current = 0;
  }
  slider[current].style.display = "block";
  dots[current].classList.add("active");
  setTimeout(autoSlider, 3000);
}

autoSlider();

let buySuccess = document.querySelector(".noti-success");
let buyFail = document.querySelector(".noti-fail");

let formOrder = document.getElementById("form-order");
function buy() {
  formOrder.style.display = "block";
}

function closeNoti() {
  // kiem tra success hay fail
  buySuccess.style.display = "none";
  buyFail.style.display = "none";
}

function order() {
  let nameOrder = document.getElementById("name-order").value;
  let phoneOrder = document.getElementById("phone-order").value;
  let addressOrder = document.getElementById("address-order").value;
  function checkOrder() {
    if (
      nameOrder.length > 0 &&
      phoneOrder.length > 0 &&
      addressOrder.length > 0
    ) {
      return true;
    }
    return false;
  }
  if (checkOrder()) {
    formOrder.style.display = "none";
    buySuccess.style.display = "flex";
  } else {
    formOrder.style.display = "none";
    buyFail.style.display = "flex";
  }
  event.preventDefault();
}
