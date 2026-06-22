// Reveal Animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(
    "section, .card, .project-card, .timeline-item, .stat"
);

hiddenElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});

// Navbar Shadow

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.boxShadow =
        "0 4px 20px rgba(0,0,0,0.4)";
    }
    else{
        navbar.style.boxShadow = "none";
    }
});
