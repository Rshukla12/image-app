import createNavbar from "./components/navbar.js";
import handleKeyPress from "./components/search.js";

window.addEventListener("load", () => {
    document.querySelector("nav").append(createNavbar());
    const search = document.querySelector("input");
    search.onkeydown = handleKeyPress();
})
