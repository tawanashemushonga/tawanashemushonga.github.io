document.addEventListener("DOMContentLoaded", () => {
    // --- Intersection Observer for Sections and List Items ---
    const sections = document.querySelectorAll("section");

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate the section itself
                entry.target.classList.add("visible");

                // Animate list items within the section with a stagger
                const listItems = entry.target.querySelectorAll("ul li");
                listItems.forEach((item, index) => {
                    item.style.transitionDelay = `${index * 100}ms`;
                    item.classList.add("list-item-visible");
                });

                // Stop observing the section once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- Dark Mode Toggle ---
    const toggleBtn = document.getElementById("toggle-theme");
    const body = document.body;

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");
        toggleBtn.textContent = isDark ? "☀️" : "🌙";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });

    // --- Back to Top Button ---
    const backToTopBtn = document.getElementById("back-to-top");
    
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            if (backToTopBtn) backToTopBtn.style.display = "block";
        } else {
            if (backToTopBtn) backToTopBtn.style.display = "none";
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
