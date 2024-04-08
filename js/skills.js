class Skill {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
}

const skills_section = document.querySelector("#skills");

const skills = [
    new Skill("HTML", 92),
    new Skill("CSS", 85),
    new Skill("JavaScript", 81),
    new Skill("SQL", 90),
    new Skill("C#", 95),
    new Skill("ASP.NET", 90),
    new Skill("Backend Design", 90),
    new Skill("Server Architecture", 85),
    new Skill("Database Design", 90),
    new Skill("Security", 90),
    // new Skill("Angular", 55),
    // new Skill("Vue", 72),
    // new Skill("Node.js", 60),
    // new Skill("C++", 60),
    // new Skill("C", 60),
    // new Skill("Rust", 78),
    // new Skill("PHP", 70),
    // new Skill("Dart", 60),
    // new Skill("Flutter", 58),
    // new Skill("WPF", 86),
    // new Skill("Python", 42),
    // new Skill("UI-Design", 50),
    // new Skill("UX-Design", 50),
    // new Skill("Cryptography", 86),
    // new Skill("Network", 87)
].sort((a, b) => b.level - a.level);

skills.forEach(skill => {
    const skillContainer = document.createElement("div");
    skillContainer.classList.add("skill-container");

    const skillName = document.createElement("h3");
    skillName.textContent = skill.name;

    const skillProgress = document.createElement("progress");
    skillProgress.value = 0;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animateProgress = () => {
                    if (skillProgress.value < skill.level) {
                        skillProgress.value += 1;
                        requestAnimationFrame(animateProgress);
                    }
                };
                animateProgress();
                observer.unobserve(entry.target);
            }
        });
    });
    observer.observe(skillContainer);
    skillProgress.max = 100;

    skillContainer.appendChild(skillName);
    skillContainer.appendChild(skillProgress);

    skills_section.appendChild(skillContainer);
});