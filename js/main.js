// document.documentElement.style.setProperty('--root-level-variable', 'value');
const navLinks = document.querySelectorAll("body nav ul li a");

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", changeActiveLink, navLink);
});

function changeActiveLink(e) {
    const target = e.target;

    if (target.classList.contains("hover")) {

        navLinks.forEach((navLink) => {
            navLink.className = "underline hover from-middle";
        });
        target.className = "underline gradient";
    }
}