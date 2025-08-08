const main = document.querySelector("main");
const sections = main.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveLink(id) {
    navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("text-slate-100", "border-slate-100", 'text-lg', 'font-medium');
            link.classList.remove("text-slate-500", "border-transparent");
        } else {
            link.classList.remove("text-slate-100", "border-slate-100", 'text-lg', 'font-medium');
            link.classList.add("text-slate-500", "border-transparent");
        }
    });
}

main.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = main.scrollTop + main.clientHeight / 3;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    if (current) {
        setActiveLink(current);
    }
});

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
            setActiveLink(targetId);
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash || '#about';  // default if no hash
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        if (link.getAttribute('href') === hash) {
            link.classList.add('border-slate-100', 'text-slate-100', 'text-lg', 'font-medium');
            link.classList.remove('border-transparent', 'text-slate-500');
        } else {
            link.classList.add('border-transparent', 'text-slate-500');
            link.classList.remove('border-slate-100', 'text-slate-100', 'text-lg', 'font-medium');
        }
    });
});