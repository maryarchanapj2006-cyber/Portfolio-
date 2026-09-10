// =====================================================
// MARY ARCHANA PJ — PORTFOLIO JAVASCRIPT
// =====================================================


// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");

                // Animate only once
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);


// Elements that should animate when entering the screen
const animatedElements = document.querySelectorAll(
    ".project, .skillgrid > div, .timeline > div, .card, .principles > div"
);


// Add reveal class and observe
animatedElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});


// =====================================================
// PROFILE IMAGE CHECK
// =====================================================

const profileImage = document.querySelector(".photo-slot img");

if (profileImage) {

    profileImage.addEventListener("load", () => {
        console.log("Profile image loaded successfully.");
    });

    profileImage.addEventListener("error", () => {
        console.log(
            "Profile image could not be loaded. " +
            "Make sure Profile.png is in the same folder as index.html."
        );
    });
}


// =====================================================
// PROJECT IMAGE CHECK
// =====================================================

const projectImages = document.querySelectorAll(".project-image img");

projectImages.forEach((image) => {

    image.addEventListener("load", () => {
        console.log(
            `Project image loaded successfully: ${image.getAttribute("src")}`
        );
    });

    image.addEventListener("error", () => {
        console.log(
            `Project image could not be loaded: ${image.getAttribute("src")}. ` +
            "Make sure the image is in the same folder as index.html."
        );
    });

});


// =====================================================
// SMOOTH NAVIGATION
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        // Ignore empty links
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


// =====================================================
// HEADER ACTIVE NAVIGATION
// =====================================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");


const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const currentId = entry.target.getAttribute("id");

                navLinks.forEach((link) => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        `#${currentId}`
                    ) {
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


// Observe every section
sections.forEach((section) => {
    sectionObserver.observe(section);
});


// =====================================================
// CONTACT EMAIL
// =====================================================

const emailLinks = document.querySelectorAll(
    'a[href^="mailto:"]'
);

emailLinks.forEach((link) => {

    link.addEventListener("click", () => {

        console.log(
            "Opening email application..."
        );

    });

});


// =====================================================
// PHONE LINKS
// =====================================================

const phoneLinks = document.querySelectorAll(
    'a[href^="tel:"]'
);

phoneLinks.forEach((link) => {

    link.addEventListener("click", () => {

        console.log(
            "Opening phone application..."
        );

    });

});


// =====================================================
// EXTERNAL LINKS
// =====================================================

document
    .querySelectorAll('a[target="_blank"]')
    .forEach((link) => {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


// =====================================================
// CV LINK
// =====================================================

// Your HTML should contain:
//
// <a href="Mary-Archana-PJ-CV.pdf"
//    target="_blank">
//    View CV
// </a>
//
// No extra JavaScript is required because
// the browser will open the PDF automatically.


// =====================================================
// PROJECT LINKS
// =====================================================

const projectLinks = document.querySelectorAll(
    ".project-content a"
);

projectLinks.forEach((link) => {

    link.addEventListener("click", () => {

        console.log(
            `Opening project: ${link.textContent.trim()}`
        );

    });

});


// =====================================================
// PAGE LOAD
// =====================================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "Mary Archana PJ Portfolio loaded successfully."
    );

});


// =====================================================
// OPTIONAL: BACK TO TOP ON PAGE REFRESH
// =====================================================

// Prevent browser from restoring an old scroll position
// when the page is refreshed.

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}


// =====================================================
// CONSOLE MESSAGE
// =====================================================

console.log(
    "✨ Welcome to Mary Archana PJ's Portfolio"
);
