// Toggle menu
const menuBtn = document.querySelector("#menu-btn");
const sideMenu = document.querySelector("aside");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// Day/Night Switch
const themeToggler = document.querySelector(".theme-toggler");
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("i:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("i:nth-child(2)").classList.toggle("active");
});
