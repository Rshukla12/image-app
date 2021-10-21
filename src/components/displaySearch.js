import dispalyImageDetails from "./displayImageDetails.js";

function createImageCard(data){
    const container = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", data.urls.regular );
    img.id = data.id;
    container.className = "img-cont"

    container.append(img);
    return container;
}


function displayResults(data, target){
    const container = document.getElementById(target);
    const frag = new DocumentFragment()
    for ( let i = 0; i < data.length - 1; i++ ){
        const img = createImageCard(data[i]);
        frag.append(img);
    }
    container.innerHTML = null;
    container.append(frag);
    container.addEventListener("click", () => {
        dispalyImageDetails( event.target.id );
    })
    
}

export default displayResults;