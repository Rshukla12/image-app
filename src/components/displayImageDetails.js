const ACCESS = "anjascnjalX48MPaqnN2xoEPi2SeDtTZrQPwRPkoWceaZjKi0ZD9ojnalncl";

const fetchImageDetails = (id) => {
    const url = `https://api.unsplash.com/photos/${id}?client_id=${ACCESS.slice(10, 53)}`;
    return fetch( url )
        .then ( ( res ) => res.json() )
        .catch ( err => console.log(err) )
}


const createImageDetails = (data) => {
    const container = document.createElement("div");
    const img = document.createElement("img");
    const details = document.createElement("div");
    const likes = document.createElement("h3");
    const down = document.createElement("h3");
    const desc = document.createElement("h5");

    container.id = "img-details";
    details.id = "detail";

    img.src = data.urls.full;
    likes.textContent = "Total Views - " + data.likes;
    down.textContent = "Total Downloads - " +  data.downloads;
    desc.textContent = data.description;

    details.append( likes, down, desc );
    container.append( img, details );

    return container;
}


const dispalyImageDetails = async ( id ) => {
    try {
        const res = await fetchImageDetails(id);
        const details = createImageDetails(res);
        document.body.append( details );
        document.body.addEventListener( "click", () => {
            document.body.removeChild( details );
        })
        console.log(res)
    } catch ( err ) {
        console.log( err );
    }
}

export default dispalyImageDetails;