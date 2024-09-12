// Tüm DOM elementlerini seçme
const menuImgs = document.querySelectorAll(".menu .menu-image-container img"),
    boxModel = document.querySelector(".menu .box-model"),
    boxModelArrows = document.querySelectorAll(".menu .box-model .arrow"), // Değişiklik: Tüm arrowları seçtik
    boxModelImage = document.querySelector(".menu .box-model img"),
    menuImageContainer = document.querySelector(".menu-image-container"),
    bodyElement = document.querySelector("body"); // body yerine daha açıklayıcı bir ad kullanıldı

// Box model gösterimi
menuImgs.forEach(img => {
    img.addEventListener("click", function() {
        const arr = Array.from(this.parentElement.parentElement.children);
        arr.forEach(div => div.classList.remove("active"));
        this.parentElement.classList.add("active");
        boxModel.classList.add("active");
        boxModelImage.src = this.src;
        bodyElement.classList.add("hide-scroll");
    });
});

// Box model işlevleri (Escape tuşu veya dışarıya tıklama ile kapatma)
function boxModelFun(e) {
    // Box modeli kapatma
    if (
        e.code === "Escape" || 
        e.target.classList.contains("close") || 
        (e.target.tagName === "DIV" && !e.target.classList.contains("arrow"))
    ) {
        boxModel.classList.remove("active");
        bodyElement.classList.remove("hide-scroll");
    }

    // Resimler arasında gezinme
    if (boxModel.classList.contains("active")) {
        const arr = Array.from(menuImageContainer.children);
        const active = arr.find(div => div.classList.contains("active"));

        if (e.code === "ArrowRight" || e.target.classList.contains("arrow-right")) {
            if (active.nextElementSibling === null) {
                active.parentElement.firstElementChild.classList.add("active");
                boxModelImage.src = active.parentElement.firstElementChild.firstElementChild.src;
            } else {
                active.nextElementSibling.classList.add("active");
                boxModelImage.src = active.nextElementSibling.firstElementChild.src;
            }
        } else if (e.code === "ArrowLeft" || e.target.classList.contains("arrow-left")) {
            if (active.previousElementSibling === null) {
                active.parentElement.lastElementChild.classList.add("active");
                boxModelImage.src = active.parentElement.lastElementChild.lastElementChild.src;
            } else {
                active.previousElementSibling.classList.add("active");
                boxModelImage.src = active.previousElementSibling.firstElementChild.src;
            }
        }
        active.classList.remove("active");
    }
}

// Klavye ve tıklama olaylarını dinleme
window.addEventListener("keydown", boxModelFun);
window.addEventListener("click", boxModelFun);

// Tüm oklar için tıklama olaylarını ekleme
boxModelArrows.forEach(arrow => {
    arrow.addEventListener("click", boxModelFun);
});
