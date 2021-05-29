// Variables
const burgerMenu = document.querySelector(".menu-icon");
const navMenu = document.querySelector("nav");
const scrollToProjects = document.querySelector(".scroll-to-projects");
const projectsContainer = document.getElementById("showcase");
const scrollToContacts = document.getElementById("scrollToContacts");
const contacts = document.querySelector("footer");
const header = document.querySelector("header");
// Functions
const smoothScroll = function (el) {
  const coords = el.getBoundingClientRect();

  window.scrollTo({
    left: coords.left + window.pageXOffset,
    top: coords.top + window.pageYOffset,
    behavior: "smooth",
  });
};

// Events
burgerMenu.addEventListener("click", function () {
  navMenu.classList.toggle("show-menu");
});

header.addEventListener("click", function (e) {
  if (e.target.classList.contains("scroll-to-projects")) {
    e.preventDefault();
    navMenu.classList.remove("show-menu");
    smoothScroll(projectsContainer);
  }
});

scrollToContacts.addEventListener("click", function (e) {
  e.preventDefault();
  navMenu.classList.remove("show-menu");
  smoothScroll(contacts);
});

projectsContainer.addEventListener("click", function (e) {
  if (e.target.querySelector(".fa-chevron-down")) {
    e.target.querySelector(".fa-chevron-down").classList.toggle("rotate-icon");
    e.target
      .querySelector(".additional-text")
      .classList.toggle("show-additional-text");
  }
});
