const nav = document.querySelector("nav");
const openNav = document.querySelector(".nav-mobile-menu");
const closeNav = document.querySelector(".nav-mobile-close");
const mobileNav = document.querySelector(".nav-mobile");
const mobileNavLink = document.querySelectorAll(".nav-mobile-links li");

openNav.addEventListener("click", () => {
  mobileNav.classList.add("active");
});

closeNav.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

for (const mobileLink of mobileNavLink) {
  mobileLink.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
}

