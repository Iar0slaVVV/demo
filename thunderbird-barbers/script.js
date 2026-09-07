// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});


const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });
});


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


// ===============================
// FOOTER YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ===============================
// HERO PARALLAX
// ===============================

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        heroImage.style.transform =
            `scale(1.03) translateY(${scrollPosition * 0.12}px)`;

    }

});