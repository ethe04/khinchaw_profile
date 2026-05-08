// Toggle mobile menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

// Show selected section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.classList.remove("active");
    });

    // Show selected section
    document.getElementById(sectionId).classList.add("active");

    // Close mobile menu after click
    document.getElementById("menu").classList.remove("show");
}

// Toggle dark/light theme
function toggleTheme() {
    document.body.classList.toggle("dark");

    // Change button icon
    const themeButton = document.querySelector("nav button");

    if (document.body.classList.contains("dark")) {
        themeButton.innerHTML = "<i class=\"fa-regular fa-sun\"></i>";
    } else {
        themeButton.innerHTML = "<i class=\"fa-regular fa-moon\"></i>";
    }
}

