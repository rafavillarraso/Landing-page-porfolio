// sticky menu
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// abrirmenu
function abrirMenu() {
  var x = document.getElementById("menuBar");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}

// chequeable formulario
function enableSending() {
document.loginform.submit.disabled = !document.loginform.terms.checked;
}