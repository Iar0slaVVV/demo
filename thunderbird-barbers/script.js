// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    const navLinks = document.querySelectorAll("#navMenu a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

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

} else {

    // Fallback for older browsers

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


// ===============================
// FOOTER YEAR
// ===============================

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


// ===============================
// HERO PARALLAX
// ===============================

const heroImage =
    document.querySelector(".hero-image");


if (heroImage) {

    let ticking = false;


    window.addEventListener(
        "scroll",
        () => {

            if (ticking) return;


            window.requestAnimationFrame(() => {

                const scrollPosition =
                    window.scrollY;


                if (
                    scrollPosition <
                    window.innerHeight
                ) {

                    heroImage.style.transform =
                        `scale(1.03) translateY(${scrollPosition * 0.12}px)`;

                }


                ticking = false;

            });


            ticking = true;

        },
        { passive: true }
    );

}