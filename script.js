// Dark mode toggle
const toggle = document.createElement("button");
toggle.innerText = "🌙";
toggle.classList.add("dark-toggle");
toggle.setAttribute("aria-label", "Toggle dark mode");
document.body.appendChild(toggle);

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.innerText = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Stop observing once shown
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.querySelectorAll(".project-card, .timeline-item, .hero-content").forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
});

// Project filter function
function filterProject(category) {
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
            setTimeout(() => {
                project.style.opacity = '1';
                project.style.transform = 'scale(1)';
            }, 10);
        } else {
            project.style.opacity = '0';
            project.style.transform = 'scale(0.8)';
            setTimeout(() => {
                project.style.display = 'none';
            }, 300);
        }
    });
}

// Initialize filter buttons
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.style.opacity = '0.7');
            btn.style.opacity = '1';
        });
    });
});
