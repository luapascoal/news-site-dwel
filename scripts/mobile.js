const doc = document;

const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

// mobile
menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay-active");
});

menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay-active");
});
