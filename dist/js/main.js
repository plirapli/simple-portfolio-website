// Navbar
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBrand = document.querySelector(".menu-brand");
const menuNav = document.querySelector(".menu-nav");
const navItem = document.querySelectorAll(".nav-item");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    menuBtn.classList.toggle("close");
    menu.classList.toggle("show");
    menuBrand.classList.toggle("show");
    menuNav.classList.toggle("show");
    navItem.forEach((item) => item.classList.toggle("show"));
}

// About Page
const aboutHeader = document.querySelectorAll("#aboutPage .header");

for (let i = 0; i < aboutHeader.length; i++) {
  aboutHeader[i].addEventListener("click", () => {
    aboutHeader[i].classList.toggle('show');
    aboutHeader[i].nextElementSibling.classList.toggle('show');
  });
}