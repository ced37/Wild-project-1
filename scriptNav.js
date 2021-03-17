let hamburgerButton = document.querySelector(".hamburger-button");
hamburgerButton.addEventListener("click", () => document.querySelector("nav.sidenav").style.width = "250px");

let xCloseButton = document.querySelector("a.xCloseButton");
xCloseButton.addEventListener("click", () => document.querySelector("nav.sidenav").style.width = "0");
  // function closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  // }