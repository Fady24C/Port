/* =========================
   NAVBAR
========================= */

const header = document.querySelector(".header");

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

const navItems = document.querySelectorAll(".nav-links a");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


/* Close menu after clicking */

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


/* =========================
   HEADER SCROLL
========================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.id;

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(
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

    observer.observe(element);

});


/* =========================
   BACK TO TOP
========================= */

const backTop =
    document.querySelector(".back-top");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();
