/* Classes */

class Project {
    constructor(name, cardImg, shortDescription, longDescription, modalScreenshot, modalIcon, date, url) {
        // Properties
        this.name = name;
        this.cardImg = cardImg;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.modalScreenshot = modalScreenshot;
        this.modalIcon = modalIcon;
        this.date = date;
        this.url = url;

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
    "TPPH (Touch Portal Plugin Helper) is a WPF application, made to ease the process of creating a plugin for TouchPortal, a mobile app that lets you control your desktop software and machine remotely from your mobile phone.",
    "The project started back in 2019, but was first introduced in 2020, when I asked to develop plugins for the guys running Touch-Portal, over on their Discord server. I had some ideas to improve their app, and they already supported plugins to extend the functionality of the app. However, the process of making said plugins, was a bit of a hassle, as you had to create an 'entry.tp' file, which was their version of a JSON structured file. The application's (TPPH) purpose is to ease the process of creating said file, by making a GUI, that's easy & intuitive to use.",
    "/img/projects/tpph/screenshot.png",
    "/img/projects/tpph/touch-portal.gif",
    new Date("15 Aug 2020"),
    "https://github.com/tsgsOFFICIAL/TouchPortal-Plugin-Helper"
));

projectArray.push(new Project(
    "PUBG Live Stats Tracker",
    "/img/projects/pubg-live-stats-tracker/helmet.png",
    "The goal is simple: Take a screencapture, store it in its memory and then read the text on said screencapture by using an OCR engine, aswell as uploading the results in real-time to make live statistics available.",
    "PUBG Live Stats Tracker is a .NET framework project. I made it when I was streaming on twitch, and wanted my statistics online, live. It's a simple application, the real beauty is fine tuning the OCR to get better results, no matter the input.",
    "/img/projects/pubg-live-stats-tracker/screenshot.png",
    "",
    new Date("19 Aug 2020"),
    "https://github.com/tsgsOFFICIAL/PUBG-Live-stats"
));

projectArray.push(new Project(
    "CloudKey",
    "/img/projects/cloudkey/cloudkey.png",
    "CloudKey is a security focused password manager, first introduced as a web project with a simple database, later 'upgraded' to include a browser extension for all modern browsers, including Chrome, Opera, Firefox & Edge, to name a few.",
    "Would you trust big corporations to keep you safe & secure online? I don't entirely, and that's why I created my own security focused password manager.",
    "/img/projects/cloudkey/screenshot.png",
    "",
    new Date("22 Mar 2021"),
    "https://cloudkey.live"
));

projectArray.push(new Project(
    "RAT",
    "/img/projects/rat/rat.png",
    "I built my own Remote Access Trojan (RAT), to prank my friends, when they left their pc's unattended. No harm was done, and the code is private to make it stay that way.",
    "Have you ever wanted to prank your friends, by blasting loud music or other sounds? ( ͡~ ͜ʖ ͡°)<br>I have, and so I did, I created my own RAT to prank my friends, when they left their pc's unattended.<br>It's harmless, in the way that I also had full control over updating the RAT from my own server, and had the ability to remove it completely without accessing the pc.<br>This made for a great prank on some of my friends & fellow students, when suddenly their pc would start \"talking\" to them, or taking control over their cursor.. ¯\\_(ツ)_/¯<br>In the end, it was uninstalled from all that had been affected by it, and the project was put down. To avoid any malicious actions I also privated the code on Github, where it still remains.",
    "/img/projects/rat/code.png",
    "",
    new Date("1 Sep 2020")
));

projectArray.push(new Project(
    "Webshop",
    "/img/projects/webshop/webshop.png",
    "A webshop I made for a customer, using Umbraco, all private information is either censored or removed completely.",
    "I made this webshop for a customer, where I used to work, all private information is either censored or removed completely.<br>It's built with plain HTML, CSS & JS, and made easy to manage with Umbraco CMS.",
    "/img/projects/webshop/screenshot.png",
    "",
    new Date("19 Oct 2021")
));

projectArray.push(new Project(
    "CS:GO Bomb",
    "/img/projects/csgo-bomb/bomb.png",
    "I made the bomb from Counter Strike! As a school project, NO explosives ~_~",
    "In class, as a project, we got to work on a project that we chose.<br>Only requirement: Include Arduino (Embedded micro controller).<br>So I wanted to replicate the bomb from CS:GO in real life, no explosives, of course!<br>I built a shell out of cardboard, cut holes for the screen and the wires necessary to run the numpad, I installed the parts, wired it up & programmed it all using C++.<br>For my presentation, I also had a simple console application on Windows, used to play sounds as it recieved specific signals over a serial connection. It can be found <a href=\"https://github.com/tsgsOFFICIAL/ArduinoBombSerialConnection\" class=\"underline hover from-left\" target=\"_blank\">here</a>.",
    "/img/projects/csgo-bomb/bomb.jpg",
    "",
    new Date("17 May 2021"),
    "https://github.com/tsgsOFFICIAL/csgo-bomb-arduino"
));

projectArray.push(new Project(
    "CS:GO Auto Accept",
    "/img/projects/csgo-auto-accept/csgo.png",
    "Using my previous experience with capturing the screen & reading it using OCR, I made a console application that automatically accepts a match found in Counter Strike.",
    "In Counter Strike, you \"queue up\" for a match, when one is found, you hear a beeping sound in your ears, and then you have to look over, move your cursor over the \"ACCEPT\" button, and press it.<br>This got boring really quick, and using my previous experience with screen capturing & optical character recognition (OCR), I quickyl made a console application, that performs this very tedious task for me!<br>Now I can finally lean back, and WAIT. I still hear the sound, and thats my clue to start. I don't have to hurry, I don't have to do anything! And isn't that the beauty of it, being lazy, coming up with solutions to problems as you encounter them? I think so!",
    "/img/projects/csgo-auto-accept/screen.png",
    "",
    new Date("16 May 2021"),
    "https://github.com/tsgsOFFICIAL/CS_AUTO_ACCEPT_CONSOLE"
));

projectArray.push(new Project(
    "Discord Bot",
    "/img/projects/discord-bot/discord.png",
    "I made my first Discord bot back in August 2020. Since then I have made a few silly bots. I also made one for CloudKey!",
    "I've made several bots for Discord over the time, recently I made one for my class Discord, and is still working on it. It's a simple bot, made to entertain and make it easier to see class related activities.",
    "/img/projects/discord-bot/screen.png",
    "/img/projects/discord-bot/granny.png",
    new Date("9 Feb 2022")
));

projectArray.push(new Project(
    "Twitch Bot",
    "/img/projects/twitch-bot/twitch.png",
    "I made a Twitch bot along with my PUBG Live Stats Tracker, the bots goal is simple, collect the data from the tracker, and show it when someone issues a specific set of commands.",
    "Here is a short demonstration of how it worked, it's been taken down for now, as I no longer play games, and I also don't stream on Twitch anymore. Lack of time, simply put. Maybe I'll be back? <a href=\"https://twitch.tv/tsgsOFFICIAL\" target=\"_blank\" class=\"underline hover from-left\">My Twitch</a> is still up ^_^",
    "/img/projects/twitch-bot/demo.gif",
    "/img/projects/twitch-bot/twitch.gif",
    new Date("13 May 2020")
));

projectArray.push(new Project(
    "Keylogger",
    "/img/projects/keylogger/keylogger.png",
    "Along with a RAT, I also made my own keylogger, this was never shared to anyone, and was only for personal use/training. No harm was done, and the code is private to make it stay that way.",
    "I programmed a keylogger in C#, because it's just one of those things I've always wanted to program, or atleast attempt. This was never a malicious activity, and is kept private to stay that way. I have no intentions of sharing the code with bad people. It was just a personal challenge of mine.",
    "/img/projects/keylogger/code.png",
    "/img/projects/keylogger/icon.gif",
    new Date("18 Oct 2020")
));

projectArray.push(new Project(
    "CSS Credit Card",
    "/img/projects/css-credit-card/card.png",
    "Front-end design of a credit card, all in pure CSS, no SASS, SCSS, etc.",
    "I made this front-end design of a credit card for CloudKey, as it can also store credit cards, and I like to make everything myself.",
    "/img/projects/css-credit-card/card.gif",
    "",
    new Date("22 Nov 2021"),
    "https://codepen.io/tsgsOFFICIAL/full/eYEeGXa"
));

projectArray.push(new Project(
    "Kilgharrah",
    "/img/projects/kilgharrah/dragon.png",
    "Kilgharrah means a dragon in hungarian, and was a team project in school, with some hungarian students as well. It's a game about the solar system, to help children learn in a more entertaining way.",
    "We were in a group of 5 students, 3 hungarians, and 2 danes.<br>We got the assignment to program/develop a website, or someting similar, that could help children learn about the solar system, and our planets.<br>We had to include some sort of Arduino or Raspberry Pi, so we decided to make a replica of the solar system, with a tiny UFO, all controlled through the Arduino, and the website, sending TCP signals back and forth (WebSocket / TCP Listeners).",
    "/img/projects/kilgharrah/logo.png",
    "",
    new Date("30 Mar 2022"),
    "https://github.com/tsgsOFFICIAL/Kilgharrah"
));

projectArray.push(new Project(
    "raavarerne",
    "/img/projects/raavarerne/logo.png",
    "Raavarerne is a Progressive Web App (PWA), that can help you cut down on your CO<sup>2</sup> usage.",
    "Raavarene is made with Angular as a front-end framework, and PWA technology, to have better smartphone support, both iOS and Android.",
    "/img/projects/raavarerne/screen.jpg",
    "",
    new Date("01 Jul 2022"),
    "https://raavarerne.dk/"
));

projectArray.push(new Project(
    "My Portfolio",
    "/img/selfie_rounded.png",
    "Obviously I made this portfolio, and I'm actually quite proud of it! It shows some of my work, and accomplishments!",
    "I made this portfolio to increase my chances of landing a job in tech, and possible as a developer (Score!).<br>It all worked out, as I know work for a Danish company as a software developer.<br>It's available on Github!",
    "/img/selfie.png",
    "",
    new Date("5 Dec 2021"),
    "https://github.com/tsgsOFFICIAL/Portfolio"
));

const projects = document.getElementById("projects");
const projectsContainer = projects.querySelector("section.container");
const modal = document.getElementById("project-modal");
const modal_close_btn = document.getElementById("project-modal-close-btn");

// Sort the array, show the newest projects first
projectArray.sort(CompareFunction('date', 'desc'));

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
    shortDescription.innerHTML = project.shortDescription;

    // Create read more button
    const readMore = document.createElement("button");
    readMore.type = "button";
    readMore.innerText = `Read more`;
    readMore.title = `Click here to read more about ${project.name}`;
    readMore.addEventListener("click", () => {
        document.querySelector("body").style.overflow = "hidden"; // Disable scroll on the body
        modal.classList.add("open");

        const modalHeader = modal.querySelector(".header h3");

        modalHeader.querySelector(".animatedIcon").src = `${project.modalIcon == "" ? project.cardImg : project.modalIcon}`;
        modalHeader.querySelector("span").innerText = project.name;

        const modalContent = modal.querySelector(".content");

        // modalContent.style.backgroundImage = `url("${project.modalImg}")`;
        // modalContent.style.backgroundRepeat = "no-repeat";
        // modalContent.style.backgroundPosition = "center";
        modalContent.querySelector("p.date").innerText = `Date: ${project.date.getDate()}/${project.date.getMonth() + 1}/${project.date.getFullYear()}`;
        // modalContent.querySelector("p.short").innerText = project.shortDescription;
        modalContent.querySelector("img.screenshot").src = project.modalScreenshot;
        modalContent.querySelector("img.screenshot").alt = `Screenshot from ${project.name}`;
        modalContent.querySelector("img.screenshot").title = `${project.name}`;
        modalContent.querySelector("p.long").innerHTML = project.longDescription;
        if (project.url) {
            modalContent.querySelector("a.codeUrl").classList.add("underline");
            modalContent.querySelector("a.codeUrl").classList.add("hover");
            modalContent.querySelector("a.codeUrl").classList.add("from-left");
            modalContent.querySelector("a.codeUrl").href = project.url;
            modalContent.querySelector("a.codeUrl").innerHTML = "See the project here";
        } else {
            modalContent.querySelector("a.codeUrl").innerHTML = "This project doesn't have a URL yet, or maybe it's private.";
            modalContent.querySelector("a.codeUrl").removeAttribute("href");
            modalContent.querySelector("a.codeUrl").className = "codeUrl";
        }
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
# projectArray.sort(CompareFunction('name')); // asc is the default
# projectArray.sort(CompareFunction('name', 'desc'));
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

        try {
            if (varA.trim() === '' && varB.trim() !== '') {
                return 1;
            } else if (varB.trim() === '') {
                return 0;
            }
        } catch (error) { }


        return (order === 'desc') ? comparison * -1 : comparison;
    };
}