

/* ========================================
   1. MOBILE NAVIGATION MENU
======================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    // Open and close the menu when clicked
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        // Update accessibility information
        const isExpanded = navLinks.classList.contains("active");
        menuToggle.setAttribute("aria-expanded", isExpanded);
    });

    // Close the menu after clicking a navigation link
    const navigationLinks = navLinks.querySelectorAll("a");

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    // Close the menu when the user clicks outside it
    document.addEventListener("click", function (event) {
        if (
            !menuToggle.contains(event.target) &&
            !navLinks.contains(event.target)
        ) {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
}


/* ========================================
   2. AUTOMATIC FOOTER YEAR
======================================== */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
