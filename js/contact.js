document.addEventListener("DOMContentLoaded", () => {
    // Hide email and message initially
    document.getElementById("email").style.display = "none";
    document.getElementById("message").style.display = "none";

    setTimeout(() => {
        // Reset after animation
        document.querySelectorAll(".letter").forEach((letter) => {
            letter.classList.remove("animate");
        });

        document.getElementById("email").style.display = "block";
        document.getElementById("message").style.display = "block";

        const form = document.getElementById("contact_form");
        let sendEmailBtn = document.getElementById("sendEmail");

        // Event on send email
        sendEmailBtn.addEventListener("click", () => {
            const email = form.querySelector("#email");
            const message = form.querySelector("#message");

            // Validate email
            if (!validateEmail(email.value)) {
                alert("Please enter a valid email address");
                return;
            }

            // Validate email function
            function validateEmail(email) {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return regex.test(email);
            }

            // Validate message
            if (message.value.trim() === "") {
                alert("Please enter a message");
                return;
            }

            document.querySelectorAll(".letter").forEach((letter) => {
                letter.classList.add("animate");
            });

            document.getElementById("email").style.display = "none";
            document.getElementById("message").style.display = "none";


            sendEmailBtn.classList.add("animate");
            sendEmailBtn.value = "...";

            setTimeout(() => {
                sendEmailBtn.value = "Sent!";
                sendEmailBtn.removeAttribute("id");
            }, 2000);
        });
    }, 1000);
});
