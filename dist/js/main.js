// Navbar
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBrand = document.querySelector(".menu-brand");
const menuNav = document.querySelector(".menu-nav");
const navItem = document.querySelectorAll(".nav-item");

let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBrand.classList.add("show");
    menuNav.classList.add("show");
    navItem.forEach((item) => item.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBrand.classList.remove("show");
    menuNav.classList.remove("show");
    navItem.forEach((item) => item.classList.remove("show"));

    showMenu = false;
  }
}

// About Page
const aboutHeader = document.querySelectorAll("#aboutPage .header");

let showAbout = false;

for (let i = 0; i < aboutHeader.length; i++) {
  aboutHeader[i].addEventListener("click", () => {
    aboutHeader[i].classList.toggle('show');
    aboutHeader[i].nextElementSibling.classList.toggle('show');
  });
}


function dropdownAbout() {
  // aboutHeader.classList.toggle('show');
  // aboutContent.forEach(e => e.classList.toggle('show'));
}