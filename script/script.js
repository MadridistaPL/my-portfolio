// --------menu--------

let menu = document.getElementById("menu");
function openmenu() {
  menu.style.right = "0";
}
function closemenu() {
  menu.style.right = "-200px";
}

// --------active scroll--------

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// --------home--------

let messageArray = ["Future Full-stack Developer"];
let textPosition = 0;
let speed = 200;

typewriter = () => {
  document.querySelector("#animation").innerHTML =
    messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";

  if (textPosition++ != messageArray[0].length) setTimeout(typewriter, speed);
};

window.addEventListener("load", typewriter);

// --------skills--------

const skillsSection = document.getElementById("skills");

const progressBars = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", () => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 2;

  if (sectionPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
});

function showProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}

function hideProgress() {
  progressBars.forEach((p) => {
    p.style.opacity = 0;
    p.style.width = 0;
  });
}

// --------contact--------

const contactSection = document.getElementById("contact");

window.addEventListener("scroll", () => {
  const sectionPos = contactSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 2;

  if (sectionPos < screenPos) {
    changeClass();
  } else {
    resetClass();
  }
});

function changeClass() {
  contactSection.firstElementChild.classList.remove("inner2");
  contactSection.firstElementChild.classList.add("inner");
  clearInterval(interval);
}

function resetClass() {
  contactSection.firstElementChild.classList.remove("inner");
  contactSection.firstElementChild.classList.add("inner2");
  clearInterval(interval);
}
