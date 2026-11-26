
/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const navLinks = document.querySelectorAll(".main-nav a");

function toggleMenu() {
  const isOpen = mainNav.classList.toggle("open");

  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
}

menuToggle.addEventListener("click", toggleMenu);

// Close menu after clicking any navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

// Close menu if user clicks outside it
document.addEventListener("click", (event) => {
  const clickedInsideNav = mainNav.contains(event.target);
  const clickedMenuButton = menuToggle.contains(event.target);

  if (!clickedInsideNav && !clickedMenuButton) {
    mainNav.classList.remove("open");
    menuToggle.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }
});

// Close menu with Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    mainNav.classList.remove("open");
    menuToggle.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }
});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("main section[id]");

function updateActiveNav() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionBottom
    ) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    const linkSection = link.getAttribute("href").substring(1);

    link.classList.toggle(
      "active",
      linkSection === currentSection
    );
  });
}

window.addEventListener("scroll", updateActiveNav);


/* =========================
   BACK TO TOP BUTTON
========================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


/* =========================
   DYNAMIC FOOTER YEAR
========================= */

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


/* =========================
   INITIALIZATION
========================= */

updateActiveNav();
