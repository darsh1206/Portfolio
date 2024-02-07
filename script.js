const nameContainer = document.querySelector(".intro-text");
const data = "Hi, I am Darsh Patel, a Software Developer.";
const animationDuration = 2000; // Adjust the duration as needed
const blinker = document.querySelector(".blink");
let currentTime = 0;

function animateText() {
  if (currentTime <= animationDuration) {
    const progress = currentTime / animationDuration;
    const animatedData = data.slice(0, Math.floor(progress * data.length));
    nameContainer.innerText = animatedData;
    currentTime += 50; // Adjust the interval as needed
    setTimeout(animateText, 50);
  }
}

const blinkIt = function () {
  if (blinker.style.opacity == 1) {
    blinker.style.opacity = 0;
  } else {
    blinker.style.opacity = 1;
  }
};
setInterval(blinkIt, 250);
setTimeout(animateText, 1000);
const navBtn = document.querySelector(".navbar-toggler");
const linkBtns = document.querySelectorAll(".nav-link");
const navBar = document.querySelector(".navbar-collapse");
console.log(linkBtns);
linkBtns.forEach((e) => {
  console.log("a");
  e.addEventListener("click", () => {
    console.log("b");
    navBar.classList.remove("show");
    navBtn.classList.add("collapsed");
    navBtn.setAttribute("aria-expanded", "false");
    linkBtns.forEach((btn) => btn.classList.remove("act"));
    e.classList.add("act");
  });
});

const sections = document.querySelectorAll("section");

sections.forEach((sec) => {
  sec.addEventListener("mouseover", function (e) {
    linkBtns.forEach((btn) => {
      if (sec.className === btn.innerHTML.toLowerCase()) {
        btn.classList.add("act");
      } else {
        btn.classList.remove("act");
      }
    });
  });
});

sections.forEach((sec) => sec.classList.add("section--hidden"));

const showSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(showSection, {
  root: null,
  threshold: 0.15,
});

sections.forEach((section) => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});
