document.addEventListener("DOMContentLoaded", function () {
    animateHeader();
});

function animateHeader() {
    const header = document.getElementById("main-header");

    header.style.opacity = 0;
    header.style.transform = "translateY(-20px)";
    
    setTimeout(function() {
        header.style.opacity = 1;
        header.style.transform = "translateY(0)";
        header.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    }, 500);
}
