const header = document.querySelector("header")
const hamBtn = document.querySelector(".ham-btn")
const hamIcon = document.querySelector(".ham-btn img")
const hamMenu = document.querySelector(".ham-menu")
const body = document.querySelector("body")

function navColor() {
    if (window.scrollY > 150) {
        header.classList.add("active");
    } else if (window.scrollY < 150) {
        header.classList.remove("active")
    }
}

window.addEventListener("scroll", navColor)

hamBtn.onclick = () => {
    if (hamBtn.classList.contains("ham-btn")) {
        hamBtn.classList.remove("ham-btn")
        hamBtn.classList.add("close-btn")
        hamIcon.src = "./images/close-menu.svg"
        hamMenu.style.display = "block";
        body.style.overflowY = "hidden"
    } else if (hamBtn.classList.contains("close-btn")) {
        hamBtn.classList.remove("close-btn")
        hamBtn.classList.add("ham-btn")
        hamIcon.src = "./images/hamburger-menu.svg"
        hamMenu.style.display = "none";
        body.style.overflowY = "scroll"
    }
}