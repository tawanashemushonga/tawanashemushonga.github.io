// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    }
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Trigger hero reveals immediately on load
window.addEventListener("load", () => {
  document.querySelectorAll(".hero .reveal").forEach((el) => el.classList.add("is-visible"));
});
