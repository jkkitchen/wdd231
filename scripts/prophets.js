//Constant variable that contains the URL string of the JSON data on Latter-day Prophets
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

//Variable that links to the div element "cards" on the html file
const cards = document.querySelector("#cards");

//Create an async defined function to fetch data from the JSON source url using the await/fetch method
async function getProphetData() {
    const response = await fetch(url);
    //Convert the response to a JSON object and store the results
    const data = await response.json();
    //Output the data to the console window
    //console.table(data.prophets);
    displayProphets(data.prophets);
};

//Create function to create prophet cards
function displayProphets(prophets) {
    //Create a card for each prophet
    prophets.forEach((prophet) => {
        //Create elements
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let birthDate = document.createElement("p");
        let placeOfBirth = document.createElement("p");
        let portrait = document.createElement("img");

        //Add content
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        //Add content to newly created section
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(placeOfBirth);
        card.appendChild(portrait);

        //Add section to html document
        cards.appendChild(card);
    })
};

//Run function
getProphetData();