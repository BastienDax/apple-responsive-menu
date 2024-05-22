const linkNav = document.querySelector(".links-nav");
const overlay = document.querySelector(".overlay");

overlay.addEventListener("click", () => {
  linkNav.classList.remove("hide");
  overlay.classList.remove("show");
});

// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
  navContainer.classList.toggle("active");
});
