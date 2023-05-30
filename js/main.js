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


window.addEventListener('load', Setup);

function Setup() {
    if (location.hash.includes('#')) {
        const activeLinkName = location.hash.substring(1);

        navLinks.forEach((navLink) => {
            if (navLink.innerText.toLowerCase() == activeLinkName) {
                navLink.className = "underline gradient";
            } else {
                navLink.className = "underline hover from-middle";
            }
        });
    } else {
        navLinks[0].className = "underline gradient";
    }

    // Change current year
    document.getElementById("currentYear").innerText = new Date().getFullYear();
}