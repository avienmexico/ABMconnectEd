// Function to scroll to the clicked section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}

// Function to add click event listeners to each section title
function addClickListenersToSections() {
    const sectionTitles = document.querySelectorAll("h2");
    sectionTitles.forEach((title) => {
        title.addEventListener("click", () => {
            scrollToSection(title.parentElement.id);
        });
    });
}

// Function to add click event listeners to options in the right side
function addClickListenersToOptions() {
    const options = document.querySelectorAll(".options a");
    options.forEach((option) => {
        option.addEventListener("click", (event) => {
            event.preventDefault();
            const sectionId = option.getAttribute("href").substring(1);
            scrollToSection(sectionId);
        });
    });
}

// Call the functions to add click listeners
addClickListenersToSections();
addClickListenersToOptions();

// Function to toggle the visibility of the aside menu
function toggleMenu() {
    const asideMenu = document.querySelector('.options');
    asideMenu.classList.toggle('show-menu');
}

// Add event listener to the menu button
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-toggle');
    menuButton.addEventListener('click', toggleMenu);
});

