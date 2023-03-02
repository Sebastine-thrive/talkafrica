
let navbar = document.querySelector(".navbar");
// when the scroll is higher than 20 viewport height, add the sticky classs to the tag with a class navbar 
window.onscroll = () => {
    this.scrollY > -0.5 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

/*===== Nav Toggler =====*/
const navMenu = document.querySelector(".small");
navToggle = document.querySelector(".menu-btn");
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("active");
    })
}
// closing menu when link is clicked
const navLink = document.querySelectorAll(".small-navlink");
function linkAction() {
    const navMenu = document.querySelector(".small");
    navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))





// FAQS
let accordionItems = document.querySelectorAll('.accordion-item');

for (let item of accordionItems) {
    let title = item.querySelector('.accordion-title');
    let icon = title.querySelector('.icon');
    let content = item.querySelector('.accordion-content');

    icon.addEventListener('click', function () {
        content.classList.toggle('show');
        if (content.classList.contains('show')) {
            icon.innerHTML = '&#9650;'; // change icon to up arrow
            title.style.borderBottom = 'none';
        } else {
            icon.innerHTML = '&#9660;'; // change icon back to down arrow
            title.style.borderBottom = '1px solid #ccc';
        }
    });
}

