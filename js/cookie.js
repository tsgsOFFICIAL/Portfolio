window.addEventListener("load", () => {
    let cookieBanner = document.getElementById("cookie-banner");

    if (!isCookieConsent()) {
        document.addEventListener("click", closeCookiePopup);

        cookieBanner.classList.add("visible");
    }
})

// set a cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// get a cookies content
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];

        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }

    }
    return "";
}

function acceptCookies() {
    setCookie("cookie_consent", "true", 365);

    cookieBanner.classList.remove("visible");

    cookieBanner.remove();

    window.location.reload();
}

function denyCookies() {
    setCookie("cookie_consent", "false", 365);

    document.removeEventListener("click", closeCookiePopup);

    cookieBanner.classList.remove("visible");
}

function closeCookiePopup(e) {
    try {
        const x = e.clientX;
        const y = e.clientY;

        const elementMouseIsOver = document.elementFromPoint(x, y);

        if (elementMouseIsOver.classList.contains("cookie-item")) {
            // Do nothing
        } else {
            // Accept cookies
            acceptCookies();
        }
    } catch (err) {
        //console.error(err);
    }
}

// Check cookie consent
function isCookieConsent() {
    return getCookie("cookie_consent") == "true" ? true : false;
}