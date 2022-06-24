// Menu responsivo

let show = true;

const menu = document.querySelector(".menu");
const menuToggle = menu.querySelector(".menu__toggle");

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial";

    menu.classList.toggle("active" , show);
    show = !show;
})