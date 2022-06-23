// Menu responsivo

let show = true;

const menu = document.querySelector(".menu");
const menuToggle = menu.querySelector(".menu__toggle");
const main = document.querySelector("main");

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial";
    main.style.display = show ? "none" : "block";

    menu.classList.toggle("active" , show);
    show = !show;
})