const menuIcons = document.querySelector(".menu-icons");
const menuResponsive = document.querySelector("nav");
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");

function navMobile() {
  openIcon.style.display = "none";
  closeIcon.style.display = "block";
  menuResponsive.style.display = "block";
}

function closeNav() {
  closeIcon.style.display = "none";
  openIcon.style.display = "block";
  menuResponsive.style.display = "none";
}
