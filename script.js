// Smooth fade-in on scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", checkSections);
checkSections();

function checkSections() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("fade-in");
    }
  });
}
