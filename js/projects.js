/* Classes */

class Project {
    constructor(name, iconsrc, shortDescription, longDescription, bgimgsrc) {
        // Properties
        this.name = name;
        this.iconsrc = iconsrc;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.bgimgsrc = bgimgsrc;

        // Methods
        // This is just an example, doesn't actually do anything
        this.function = (parameter) => {
            this.property = parameter;
        };
    }
}

const projectArray = new Array();

projectArray.push(new Project(
    "Touch Portal Plugin Helper",
    "/img/projects/tpph/touch-portal.png",
    "Short description of TouchPortalPluginHelper",
    "Longer description of how and why TouchPortalPluginHelper was made, and how it works",
    "/img/projects/tpph/touch-portal.gif"
));

projectArray.push(new Project(
    "PUBG Live Stats Tracker",
    "/img/projects/pubg-live-stats-tracker/helmet.png",
    "Short description of PUBG Live Stats Tracker",
    "Longer description of how and why PUBG Live Stats Tracker was made, and how it works"
));

projectArray.push(new Project(
    "CloudKey",
    "/img/projects/cloudkey/cloudkey.png",
    "Short description of CloudKey",
    "Longer description of how and why CloudKey was made, and how it works"
));

projectArray.push(new Project(
    "RAT",
    "/img/projects/rat/rat.png",
    "Short description of RAT",
    "Longer description of how and why RAT was made, and how it works"
));

projectArray.push(new Project(
    "Webshop",
    "/img/projects/webshop/webshop.png",
    "Short description of Webshop",
    "Longer description of how and why Webshop was made, and how it works",
    "/img/projects/webshop/screenshot.png"
));

projectArray.push(new Project(
    "CS:GO Bomb",
    "/img/projects/csgo-bomb/bomb.png",
    "Short description of CS:GO Bomb",
    "Longer description of how and why CS:GO Bomb was made, and how it works"
));

projectArray.push(new Project(
    "CS:GO Auto Accept",
    "/img/projects/csgo-auto-accept/csgo.png",
    "Short description of CS:GO Auto Accept",
    "Longer description of how and why CS:GO Auto Accept was made, and how it works"
));

projectArray.push(new Project(
    "Discord Bot",
    "/img/projects/discord-bot/discord.png",
    "Short description of Discord Bot",
    "Longer description of how and why Discord Bot was made, and how it works"
));

projectArray.push(new Project(
    "Keylogger",
    "/img/projects/keylogger/keylogger.png",
    "Short description of Keylogger",
    "Longer description of how and why Keylogger was made, and how it works"
));


window.addEventListener("load", () => {
    const projects = document.getElementById("projects");
    const projectsContainer = projects.querySelector("section.container");

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
        img.src = project.iconsrc;
        img.alt = `${project.name}`;

        // Create name
        let name = document.createElement("h3");
        name.innerText = project.name;

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

        // Append short description & button to content
        content.appendChild(shortDescription);
        content.appendChild(readMore);

        // Append content to bottom section
        bottom.appendChild(content);

        // Append bottom section to the card
        card.appendChild(bottom);

        projectsContainer.appendChild(card);
    });
});