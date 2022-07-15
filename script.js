var header = document.querySelector("header")

function navColor() {
    if (window.scrollY > 150) {
        header.classList.add("active");
    } else if (window.scrollY < 150) {
        header.classList.remove("active")
    }
}

window.addEventListener("scroll", navColor)