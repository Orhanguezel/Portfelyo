// Select DOM Elements
const nav = document.querySelector("header nav"),
    navToggle = document.querySelector("header nav .toggle"),
    navNavigationBar = document.querySelector("header nav .navigation-bar"),
    navNavigationBarLi = document.querySelectorAll("header nav .navigation-bar li"),
    logoImage = document.querySelector("header nav .logo img"),
    headerSection = document.querySelector("header");

// Function to toggle the hamburger menu
navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navNavigationBar.classList.toggle("show");
});

// Function to update the active navigation item
navNavigationBarLi.forEach(li => {
    li.addEventListener("click", () => {
        navNavigationBarLi.forEach(li => li.classList.remove("active"));
        li.classList.add("active");
    });
});

// Function to handle scroll events
window.onscroll = function () {
    if (window.scrollY > headerSection.offsetHeight - 75) {
        nav.classList.add("active");
        logoImage.src = "assets/web-Logo.png"; // Tam dosya yolunu kullan
    } else {
        nav.classList.remove("active");
        logoImage.src = "assets/web-Logo.png"; // Tam dosya yolunu kullan
    }
};


// Optional: Fix image loading issue by checking if the logo image path is correct
if (!logoImage.complete || logoImage.naturalHeight === 0) {
    console.error("Logo image failed to load, please check the image path: ", logoImage.src);
}

// Scroll event listener
window.addEventListener("scroll", function() {
    const headerText = document.querySelector("header .text");
    const headerHeight = document.querySelector("header").offsetHeight;

    // Sayfa kaydırma miktarını ve header'ın boyutunu baz alarak opacity ayarı
    const scrollPosition = window.scrollY;
    const opacityValue = 1 - (scrollPosition / (headerHeight / 2));

    // Opacity değerini en fazla 0 yap
    if (opacityValue >= 0) {
        headerText.style.opacity = opacityValue;
    } else {
        headerText.style.opacity = 0;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // SVG ve arrow-down div'ine tıklanma olayını ekle
    const svgDown = document.querySelector('.svg-down');
    const arrowDown = document.querySelector('.arrow-down');

    if (svgDown && arrowDown) {
        svgDown.addEventListener('click', function() {
            document.getElementById('about').scrollIntoView({
                behavior: 'smooth'
            });
        });

        arrowDown.addEventListener('click', function() {
            document.getElementById('about').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});


