// Dark mode toggle
document.getElementById("darkToggle").onclick = function() {
    document.body.classList.toggle("dark");
};

// Scroll animation
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

elements.forEach(el => observer.observe(el));

const toggle = document.createElement("button");
toggle.innerText = "🌙";
toggle.classList.add("dark-toggle");
document.body.appendChild(toggle);

toggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
});

