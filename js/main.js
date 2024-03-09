let navbar = document.querySelector(".navbar");

// when the scroll is higher than 20 viewport height, add the sticky classs to the tag with a class navbar
window.onscroll = () => {
  this.scrollY > -0.5
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

/*===== Nav Toggler =====*/
const navMenu = document.querySelector(".small");
navToggle = document.querySelector(".menu-btn");
navClose = document.querySelector(".close-menu-btn");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("active");
    navClose.classList.add("active");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navClose.classList.remove("active");
  });
}

const navLink = document.querySelectorAll(".small-navlink");
function linkAction() {
  const navMenu = document.querySelector(".small");
  navMenu.classList.remove("active");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// FAQS
// show  faq answers on click
let accordionItems = document.querySelectorAll(".accordion-item");

for (let item of accordionItems) {
  let title = item.querySelector(".accordion-title");
  let icon = title.querySelector(".icon");
  let content = item.querySelector(".accordion-content");

  title.addEventListener("click", function () {
    content.classList.toggle("show");
    if (content.classList.contains("show")) {
      icon.innerHTML = "&#9660;"; // change icon to up arrow
      title.style.borderBottom = "none";
    }
  });
}

// toggle faq accordion on click to rotate
function toggleIcon(element) {
  element.classList.toggle("rotate");
}

// Hero images

const images = [
  'url("images/background_images/happy1.webp")',
  'url("images/background_images/happy2.jpg")',
  'url("images/background_images/happy4.webp")',
];
let currentIndex = 0;

setInterval(() => {
  const element = document.querySelector(".landing_image");
  element.style.backgroundImage = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}, 4000);

//Alternate Movement animation for logo
const logo = document.querySelectorAll(".logo");
const alternateMovement = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(
        "move-left-and-right",
        entry.isIntersecting
      );
    });
  },
  {
    threshold: 1,
  }
);

logo.forEach((item) => {
  alternateMovement.observe(item);
});

// Intersection Observer animation for News and Events Section on view
const storiesAndEvents = document.querySelectorAll(
  ".story, .events-body, accordion-title"
);

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.3,
  }
);

storiesAndEvents.forEach((el) => {
  fadeObserver.observe(el);
});
