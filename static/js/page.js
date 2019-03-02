window.onscroll = function() {fixNav()};

let navbar = document.getElementById("nav-bar");
let logo =  document.querySelector(".site-logo__wrap");

let sticky = logo.offsetHeight;

function fixNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("site-nav-fixed")
    } else {
        navbar.classList.remove("site-nav-fixed");
    }
}

let navEls = navbar.getElementsByClassName("site-nav__el");
let currentURL = document.URL;

for (let i = 0; i < navEls.length; i++) {
    if (navEls[i].href + '/' === currentURL || navEls[i].href === currentURL) { navEls[i].className += " current-page" ;}
    else {navEls[i].className = navEls[i].className.replace(" current-page", "");}
}

// Site button
let sitebtn = document.getElementById("site-button");

sitebtn.addEventListener("click", function () {
    if (getComputedStyle(navbar).display === 'none') {
        navbar.style.display = 'flex';
        sitebtn.className += ' button-clicked';
    }
    else {
        navbar.style.display = 'none';
        sitebtn.className = '';
    }
});
