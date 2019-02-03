var hamburger=document.querySelector(".hamburger");

hamburger.addEventListener("click", function() {
    document.querySelector(".page-header").classList.toggle("nav-opened")
}, false);

var navMenuOpen=document.querySelector(".nav-menu");

navMenuOpen.addEventListener("click", function() {
    document.querySelector(".page-header").classList.remove("nav-opened")
}, false);