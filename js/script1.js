document.addEventListener("DOMContentLoaded", function() {
    const homeLinks = document.querySelectorAll("#home-link"); // Select all "Home" links
    homeLinks.forEach(link => {
        link.href = "Index.html"; // Set href for each
    });
});