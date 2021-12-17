/* Classes */

class Project {
    constructor(name, cardImg, shortDescription, longDescription, modalScreenshot, modalAnimatedIcon, date) {
        // Properties
        this.name = name;
        this.cardImg = cardImg;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.modalScreenshot = modalScreenshot;
        this.modalAnimatedIcon = modalAnimatedIcon;
        this.date = date;

        // Methods
        // This is just an example, doesn't actually do anything
        // this.sort = (property, direction) => {
        //     projectArray.sort(CompareFunction(property, direction));
        // };
    }
}

const projectArray = new Array();

projectArray.push(new Project(
    "Touch Portal Plugin Helper",
    "/img/projects/tpph/touch-portal.png",
    "I made this application to ease the process of creating a plugin for TouchPortal",
    "Longer description of how and why TouchPortalPluginHelper was made, and how it works",
    "/img/projects/tpph/screenshot.png",
    "/img/projects/tpph/touch-portal.gif",
    new Date("15 Aug 2020")
));

projectArray.push(new Project(
    "PUBG Live Stats Tracker",
    "/img/projects/pubg-live-stats-tracker/helmet.png",
    "This application is one of my favourites, its not quite done yet, as there is a lot of fine tuning in the OCR, but the end result will be great! Its purpose is to take a screencapture, store it in its memory and then read the text on said screencapture by using an OCR engine, aswell as uploading the results in real-time to make live statistics available.",
    "Longer description of how and why PUBG Live Stats Tracker was made, and how it works",
    "/img/projects/pubg-live-stats-tracker/screenshot.png",
    "",
    new Date("19 Aug 2020")
));

projectArray.push(new Project(
    "CloudKey",
    "/img/projects/cloudkey/cloudkey.png",
    "Short description of CloudKey",
    "Longer description of how and why CloudKey was made, and how it works",
    "",
    "",
    new Date("22 Mar 2021")
));

projectArray.push(new Project(
    "RAT",
    "/img/projects/rat/rat.png",
    "Short description of RAT",
    "Longer description of how and why RAT was made, and how it works",
    "",
    "",
    new Date("1 Sep 2020")
));

projectArray.push(new Project(
    "Webshop",
    "/img/projects/webshop/webshop.png",
    "Short description of Webshop",
    "Longer description of how and why Webshop was made, and how it works",
    "/img/projects/webshop/screenshot.png",
    "",
    new Date("19 Oct 2021")
));

projectArray.push(new Project(
    "CS:GO Bomb",
    "/img/projects/csgo-bomb/bomb.png",
    "Short description of CS:GO Bomb",
    "Longer description of how and why CS:GO Bomb was made, and how it works",
    "",
    "",
    new Date("17 May 2021")
));

projectArray.push(new Project(
    "CS:GO Auto Accept",
    "/img/projects/csgo-auto-accept/csgo.png",
    "Short description of CS:GO Auto Accept",
    "Longer description of how and why CS:GO Auto Accept was made, and how it works",
    "",
    "",
    new Date("4 Apr 2021")
));

projectArray.push(new Project(
    "Discord Bot",
    "/img/projects/discord-bot/discord.png",
    "Short description of Discord Bot",
    "Longer description of how and why Discord Bot was made, and how it works",
    "",
    "",
    new Date("14 Aug 2020")
));

projectArray.push(new Project(
    "Twitch Bot",
    "/img/projects/twitch-bot/twitch.png",
    "Short description of Twitch Bot",
    "Longer description of how and why Twitch Bot was made, and how it works",
    "/img/projects/twitch-bot/demo.gif",
    "",
    new Date("13 May 2020")
));

projectArray.push(new Project(
    "Keylogger",
    "/img/projects/keylogger/keylogger.png",
    "Short description of Keylogger",
    "Longer description of how and why Keylogger was made, and how it works",
    "",
    "",
    new Date("17 Nov 2020")
));

projectArray.push(new Project(
    "CSS Credit Card",
    "/img/projects/css-credit-card/card.png",
    "Short description of CSS Credit Card",
    "Check out my <a href=\"https://cdpn.io/tsgsOFFICIAL/full/eYEeGXa/GnAnbXPpPymA\" target=\"_blank\" class=\"underline hover from-middle\">CSS Credit Card</a> on CodePen",
    "",
    "",
    new Date("2 Nov 2020")
));



const projects = document.getElementById("projects");
const projectsContainer = projects.querySelector("section.container");
const modal = document.getElementById("project-modal");
const modal_close_btn = document.getElementById("project-modal-close-btn");

// Add every project to the HTML
projectArray.forEach((project) => {
    // Create card
    const card = document.createElement("article");
    card.className = "card";

    // Create top section
    const top = document.createElement("section");
    top.className = "top";

    // Create content
    let content = document.createElement("div");
    content.className = "content";

    // Create img
    let img = document.createElement("img");
    img.src = project.cardImg != "" ? project.cardImg != null ? project.cardImg : "https://via.placeholder.com/150/000/FFF/?text=Project" : "https://via.placeholder.com/150/000/FFF/?text=Project";
    img.alt = `${project.name}`;

    // Create name
    let name = document.createElement("h3");
    name.innerText = project.name;
    name.className = "overflow-dots";

    // Append img & name to content
    content.appendChild(img);
    content.appendChild(name);

    // Append content to top section
    top.appendChild(content);

    // Append top section to the card
    card.appendChild(top);

    // Create bottom section
    const bottom = document.createElement("section");
    bottom.className = "bottom";

    // Edit content
    content = document.createElement("div");
    content.className = "content";

    // Create short description
    const shortDescription = document.createElement("p");
    shortDescription.innerText = project.shortDescription;

    // Create read more button
    const readMore = document.createElement("button");
    readMore.type = "button"
    readMore.innerText = `Read more`;
    readMore.title = `Click here to read more about ${project.name}`
    readMore.addEventListener("click", () => {
        document.querySelector("body").style.overflow = "hidden"; // Disable scroll on the body
        modal.classList.add("open");

        const modalHeader = modal.querySelector(".header h3");

        modalHeader.querySelector(".animatedIcon").src = project.modalAnimatedIcon;
        modalHeader.querySelector("span").innerText = project.name;

        const modalContent = modal.querySelector(".content");

        // modalContent.style.backgroundImage = `url("${project.modalImg}")`;
        // modalContent.style.backgroundRepeat = "no-repeat";
        // modalContent.style.backgroundPosition = "center";
        modalContent.querySelector("p.date").innerText = `Date: ${project.date.getDate()}/${project.date.getMonth() + 1}/${project.date.getFullYear()}`;
        // modalContent.querySelector("p.short").innerText = project.shortDescription;
        modalContent.querySelector("img.screenshot").src = project.modalScreenshot;
        modalContent.querySelector("p.long").innerHTML = project.longDescription;
    });

    // Append short description & button to content
    content.appendChild(shortDescription);
    content.appendChild(readMore);

    // Append content to bottom section
    bottom.appendChild(content);

    // Append bottom section to the card
    card.appendChild(bottom);

    projectsContainer.appendChild(card);
});

modal_close_btn.addEventListener("click", () => {
    modal.classList.add("closing");

    document.querySelector("body").style = ""; // Reset body styling

    modal.addEventListener("animationend", animationEnd);
});

// Functions

function animationEnd() {
    modal.classList.remove("open");
    modal.classList.remove("closing");

    modal.removeEventListener("animationend", animationEnd);
}

/*
# USAGE
# passwords.sort(CompareFunction('name')); // asc is the default
# passwords.sort(CompareFunction('name', 'desc'));
*/
function CompareFunction(key, order = 'asc') {
    return function innerSort(a, b) {
        // Convert toUpperCase if its a string, to ignore case
        const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

        // Sort / Move them, or if equal don't sort / move them
        let comparison =
            varA > varB ? 1 :
            varA < varB ? -1 :
            0;

        // If either of them are null, just return 0 (Don't move them)
        if (varA === null && varB !== null) {
            return 1;
        } else if (varB === null) {
            return 0;
        }

        if (varA.trim() === '' && varB.trim() !== '') {
            return 1;
        } else if (varB.trim() === '') {
            return 0;
        }

        return (order === 'desc') ? comparison * -1 : comparison;
    };
}