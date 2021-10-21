import createNavbar from "./components/navbar.js";
import { handleSearch, handleKeyPress } from "./components/search.js";

const handleClick = () => {
    const target = event.target;
    if ( target.parentNode.parentNode.id == "category" ){
        document.querySelector("input").value = target.textContent;
        handleSearch();
    }
}

const randQuery = ["car", "bike", "truck", "nature", "tea", "coffee", "office", "beach", "mountain", "sunrise",
                    "sunset", "icecream", "sun", "moon", "space", "wallpaper"]


const handlePageLoad = () => {
    document.querySelector("nav").append(createNavbar());
    const search = document.querySelector("input");
    
    search.value = randQuery[Math.floor(Math.random() * randQuery.length)];
    handleSearch();

    search.value = "";
    search.onkeydown = handleKeyPress();

    document.body.addEventListener("click", handleClick);
}

window.addEventListener("load", () => {
    handlePageLoad();
})
