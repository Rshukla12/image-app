import displayResults from "./displaySearch.js";

const ACCESS = "anjascnjalX48MPaqnN2xoEPi2SeDtTZrQPwRPkoWceaZjKi0ZD9ojnalncl"

function fetchSearch(q){
    const url = `https://api.unsplash.com/search/photos?client_id=${ACCESS.slice(10, 53)}&query=${q}`;
    return fetch(url)
        .then( ( res ) => res.json() )
        .catch( ( err ) => console.log(err) )
}


async function handleSearch(){
    try {
        const search = document.querySelector("input");
        const q = search.value;
        const target = "main";
        const { results } = await fetchSearch(q);
        displayResults(results, target);
    } catch ( err ) {
        console.log(err);
    }

} 

function handleKeyPress(){
    let id;
    return () => {
        id && clearTimeout(id);
        id = setTimeout( () => {
            handleSearch();
        }, 300);
    }
}

export default handleKeyPress;