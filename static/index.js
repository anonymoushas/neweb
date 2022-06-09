// get the sucess box
var suc = document.getElementsByClassName(
  "contact-form-success-message w-form-done"
)[0];

var get_email = window.location.href.split("?email=")[1];

// When the user clicks the button, open the modal
var called = 1;
// window.onload = function () {
if (get_email) {
  suc.style.display = "block";
}

window.onclick = function (event) {
  var navclassname = document.getElementsByClassName("nav-menu w-nav-menu")[0];
  var navclassname2 = document.getElementsByClassName(
    "navbar-dark-menu-button w-nav-button"
  )[0];
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    var target_namec = event.target.className;
    var divover = document.createElement("div");
    divover.setAttribute("id", called);

    called = parseInt(divover.getAttribute("id"));

    if (
      target_namec == "navbar-dark-icon w-icon-nav-menu" ||
      target_namec == "navbar-dark-brand w-nav-brand" ||
      target_namec == "navbar-dark-icon w-icon-nav-menu"
    ) {
      if (called % 2 == 0) {
        navclassname.style =
          "transform: translateY(0px); transition: transform 400ms ease 0s;display: none;";
        called = parseInt(divover.getAttribute("id")) + 1;
        divover.setAttribute("id", called);
      } else {
        navclassname.style =
          "transform: translateY(0px); transition: transform 400ms ease 0s;display: block;";

        called = parseInt(divover.getAttribute("id")) + 1;

        divover.setAttribute("id", called);
      }
    }
  }
};
