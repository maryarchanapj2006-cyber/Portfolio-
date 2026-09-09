// ================================
// SCROLL REVEAL ANIMATION
// ================================

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);


// ================================
// ELEMENTS TO ANIMATE
// ================================

const animatedElements = document.querySelectorAll(
    ".project, .skillgrid > div, .timeline > div, .card, .principles > div"
);

animatedElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});


// ================================
// PROFILE IMAGE CHECK
// ================================

const profileImage = document.querySelector(".photo-slot img");

if (profileImage) {
    profileImage.addEventListener("error", () => {
        console.log(
            "Profile image could not be loaded. Make sure Profile.png is in the same folder as index.html."
        );
    });

    profileImage.addEventListener("load", () => {
        console.log("Profile image loaded successfully.");
    });
}


// ================================
// SMOOTH NAVIGATION
// ================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ================================
// HEADER ACTIVE LINK
// ================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute("id");

                navLinks.forEach((link) => {
                    link.classList.remove("active");

                    if (link.getAttribute("href") === `#${currentId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    },
    {
        threshold: 0.35
    }
);

sections.forEach((section) => {
    sectionObserver.observe(section);
});


// ================================
// CV BUTTON
// ================================
// The CV button is handled by the HTML link:
//
// href="Mary-Archana-PJ-CV.pdf"
// target="_blank"
//
// No additional JavaScript is required.


// ================================
// CONTACT EMAIL
// ================================

const emailLinks = document.querySelectorAll(
    'a[href^="mailto:"]'
);

emailLinks.forEach((link) => {
    link.addEventListener("click", () => {
        console.log("Opening email application...");
    });
});


// ================================
// EXTERNAL LINKS
// ================================

document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    link.setAttribute("rel", "noopener noreferrer");
});


// ================================
// PAGE LOAD
// ================================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    console.log(
        "Mary Archana PJ Portfolio loaded successfully."
    );
});