//Constant variable that contains JSON data on the fabric collections at the shop
const fabricFile = 'data/fabric.json';

//Constant variable that links to the div element "fabric-collections" on the html file
const fabricDisplay = document.querySelector(".fabric-collections");

//Create an async defined function to fetch data from the JSON file using the await/fetch method
async function getFabricData() {
    const response = await fetch(fabricFile);

    //Convert the response to a JSON object and store the results
    const data = await response.json();

    //Store the list/card buttons as variables
    const allButton = document.querySelector("#all-btn");
    const fallButton = document.querySelector("#fall-btn");
    const halloweenButton = document.querySelector("#halloween-btn");
    const christmasButton = document.querySelector("#christmas-btn");

    //Set starting value for selectedCollections (default is all)
    const allFabrics = data.fabricCollections

    //Call function that creates the cards for default view
    displayFabricCollections(allFabrics);



    //Create click event for 'All' button that displays all fabric collections
    allButton.addEventListener('click', () => {

        //Display the all collections using the display function
        displayFabricCollections(allFabrics);
    });



    //Create click event for 'Fall' button displays collections with a 'fall' keyword
    fallButton.addEventListener('click', () => {

        //Filter array for only fall collections
        const fallFabrics = data.fabricCollections.filter(fabric => fabric.keyword === "Fall")

        //Display the fall collection using the display function
        displayFabricCollections(fallFabrics);
    });



    //Create click event for 'Halloween' button displays collections with a 'Halloween' keyword
    halloweenButton.addEventListener('click', () => {

        //Filter array for only Halloween collections
        const halloweenFabrics = data.fabricCollections.filter(fabric => fabric.keyword === "Halloween")

        //Display the fall collection using the display function
        displayFabricCollections(halloweenFabrics);
    });

    //Create click event for 'Christmas' button displays collections with a 'Christmas' keyword
    christmasButton.addEventListener('click', () => {

        //Filter array for only Christmas collections
        const christmasFabrics = data.fabricCollections.filter(fabric => fabric.keyword === "Christmas")

        //Display the fall collection using the display function
        displayFabricCollections(christmasFabrics);
    });
};


//Function to create and dispaly fabric collections information
function displayFabricCollections(fabrics) {
    //Clear existing content before creating new cards
    fabricDisplay.innerHTML = '';

    //Create a card for each collection
    fabrics.forEach((fabric) => {
        //Create elements
        let card = document.createElement("section");        
        let fabricName = document.createElement("h2");
        let fabricImage = document.createElement("img");        
        let fabricDesigner = document.createElement("p");
        let fabricBrand = document.createElement("p");
        let numberFabrics = document.createElement("p");

        //Add content to elements
        fabricName.textContent = fabric.name;
        fabricImage.setAttribute("src", fabric.image);
        fabricImage.setAttribute("alt", `${fabric.name} image`);
        fabricImage.setAttribute("loading", "lazy");
        fabricImage.setAttribute("height", "250")        
        fabricDesigner.textContent = `Created by ${fabric.designer}`;
        fabricBrand.textContent = `${fabric.brand}`;
        numberFabrics.textContent = `Number of Fabrics in Collection: ${fabric.numberFabrics}`;        

        //Add elements to section
        card.classList.add("fabric-card");
        card.appendChild(fabricName);
        card.appendChild(fabricImage);
        card.appendChild(fabricDesigner);
        card.appendChild(fabricBrand);
        card.appendChild(numberFabrics);

        //Add to html file
        fabricDisplay.appendChild(card);
    });
};

//Run the program
getFabricData();