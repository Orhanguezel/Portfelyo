// Dotların DOM'da seçilmesi
const dots = document.querySelectorAll(".dots > div"),
    headerSectionDots = document.querySelector("header"),  // Benzersiz ad
    recipeSection = document.querySelector(".recipes"),
    fixedImage1 = document.querySelector(".fixed-image1"),
    fixedImage2 = document.querySelector(".fixed-image2"),
    fixedImage3 = document.querySelector(".fixed-image3"),
    fixedImage4 = document.querySelector(".fixed-image4"),
    footerSection = document.querySelector("footer");

if (dots.length > 0) {
    // Dot navigasyonunu ve sayfa scroll işlemini kontrol et
    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY; // Sayfanın ne kadar aşağıya kaydırıldığını al
        dots.forEach(dot => dot.classList.remove("active")); // Tüm dotlardan "active" sınıfını kaldır

        // Her bölüm için dot'u aktif et
        if (scrollPosition < recipeSection.offsetTop * 0.5) {
            dots[0].classList.add("active");
        } else if (scrollPosition >= recipeSection.offsetTop * 0.5 && scrollPosition < fixedImage1.offsetTop) {
            dots[1].classList.add("active");
        } else if (scrollPosition >= fixedImage1.offsetTop && scrollPosition < fixedImage2.offsetTop) {
            dots[2].classList.add("active");
        } else if (scrollPosition >= fixedImage2.offsetTop && scrollPosition < fixedImage3.offsetTop) {
            dots[3].classList.add("active");
        } else if (scrollPosition >= fixedImage3.offsetTop && scrollPosition < fixedImage4.offsetTop) {
            dots[4].classList.add("active");
        } else {
            dots[5].classList.add("active");
        }
    });

    // Dots smooth scroll
    dots.forEach(dot => {
        dot.addEventListener("click", function () {
            const targetSection = document.querySelector(this.dataset.x);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100, // Hedef bölüme kaydır
                    behavior: "smooth" // Smooth scroll
                });
            }
        });
    });
}
