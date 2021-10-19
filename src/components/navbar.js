function createCategories(){
    const categoryArr = [ "3D Renders", "Architecture & Interior", "Current Events", "Experimental", "Fashion", "Film", "Food & Drink", "Health & Wellness", "Nature", "People", "Street Photography" ];
    
    const div = document.createElement("div");

    const com1 = document.createElement("div");
    const com2 = document.createElement("div");

    const t1 = document.createElement("div");
    const t2 = document.createElement("div"); 
    
    t1.textContent = "Editorial";
    t2.textContent = "Following";

    div.id = "category";
    com1.id = "main-category";
    com2.id = "sub-category";
    
    for ( const category of categoryArr ){
        const cate = document.createElement("div");
        cate.textContent = category;
        com2.append(cate);
    }

    com1.append( t1, t2 );
    div.append( com1, com2 );
    return div;
}

function createSearchBar(){
    const searchBar = document.createElement("div");
    const searchIcon = document.createElement("div");
    const input = document.createElement("input");
    const capture = document.createElement("div");

    searchBar.id = "search-bar";

    searchBar.append( searchIcon, input, capture );
    return searchBar;
}

function createNavbar(){
    const container = document.createElement("div");
    const logo = document.createElement("div");
    const search = createSearchBar();
    const div = document.createElement("img");
    const category = createCategories();

    container.id = "navbar";

    container.append( logo, search, div, category );
    
    return container;
}

export default createNavbar;