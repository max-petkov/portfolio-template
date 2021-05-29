"use strict";

// Variables
const burgerMenu = document.querySelector(".menu-icon");
const navMenu = document.querySelector("nav");
const scrollToProjects = document.querySelector("header");
const projectsContainer = document.querySelector(".project-cards");
const scrollToContacts = document.getElementById("scrollToContacts");
const contacts = document.querySelector("footer");

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

scrollToProjects.addEventListener("click", function (e) {
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
  let parent = e.target.closest(".about-project");
  if (parent) {
    parent
      .closest(".about-project")
      .querySelector(".bi-chevron-down")
      ?.classList.toggle("rotate-icon");
    e.target
      .closest(".project-info")
      .querySelector(".additional-text")
      .classList.toggle("show-additional-text");
  }
});

// Projects
const repository = [
  {
    repoName: "Monster HR",
    about: "Platform for publishing and searching for jobs",
    readMore:
      "Depends on user needs: <br>-Companies have dashboard where can publish jobs, remove jobs, create HR account, selecting candidates, messaging <br>-Candidate can search, apply for jobs, message HR",
    repoImg:
      "https://repository-images.githubusercontent.com/348018125/97fec780-c0e6-11eb-96e6-6617f6e78a59",
    code: "https://github.com/max-petkov/netit-backend-hr",
    view: "",
    languages: "css, bootstrap, sass, js, jquery, php, mysql",
  },
  {
    repoName: "Pig game",
    about: "2P game where you need to reach a 100 score",
    readMore:
      "You can check game rules here: https://en.wikipedia.org/wiki/Pig_(dice_game)",
    repoImg:
      "https://repository-images.githubusercontent.com/364683102/3a677c80-c0e0-11eb-84df-fc3a2c37451b",
    code: "https://github.com/max-petkov/Pig-Game",
    view: "https://max-petkov.github.io/Pig-Game/",
    languages: "js, css",
  },
];

// Render projects
repository.forEach(function (obj) {
  const projectContainer = document.querySelector(".project-cards");
  const html = `
  <div class="card-wrapper mt-6">
    <div class="primary-bck-color border-radius-top-8">
      <img src="${
        obj.repoImg
      }" class="border-radius-top-8" alt="php" width="100%">
    </div>
    <div class="project-info">
      <h3 class="text-title">${obj.repoName}</h3>
      <div class="chips flex-row mt-2">${obj.languages}</div>
      <div class="about-project mt-5 d-flex">
        <h4 class="text-semi-bold">${obj.about}</h4>
        <span class="extend-paragraph">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </span>
      </div>
      <div class="additional-text mt-2">
        <p class="my-2 p-line-height">${obj.readMore}</p>
      </div>
      <div class="project-buttons mt-6 d-flex">
      ${
        !obj.view
          ? ""
          : `
        <a href="${obj.view}" class="btn btn-demo flex-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff"
            class="mr-1 bi bi-eye" viewBox="0 0 16 16">
            <path
            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path
            d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
          <span>View</span>
        </a>`
      }
        <a href="${obj.code}" class="btn btn-code flex-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#3d3b8f"
          class="mr-1 bi bi-code-slash" viewBox="0 0 16 16">
          <path
          d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
          </svg>
          <span>Code</span>
      </a>
      </div>
  </div>
</div>`;

  projectContainer.insertAdjacentHTML("beforeend", html);
});

// TODO RENDER TAGS
