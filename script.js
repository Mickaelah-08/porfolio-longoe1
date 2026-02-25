// Mode sombre
const toggleBtn = document.getElementById("theme-toggle");

if(toggleBtn){
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}

// Animation compétences
window.addEventListener("load", () => {
    const fills = document.querySelectorAll(".fill");

    fills.forEach(fill => {
        fill.style.width = fill.dataset.width;
    });
});
