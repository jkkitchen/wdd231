//Import data from places.mjs
import { places } from '../data/places.mjs';

//Link to 'local-attractions' class in html
const localAttractions = document.querySelector('.local-attractions');

places.forEach((place) => {
    console.log(place.url);
});


//Create "cards" for each local attraction
function displayAttractions(locations) {
    //Create a card for each location
    locations.forEach((location) => {
        //Create elements
        let card = document.createElement("section");        
        let locationName = document.createElement("h2");
        let locationImage = document.createElement("img");        
        let locationAddress = document.createElement("address");        
        let locationDescription = document.createElement("p");
        let learnMore = document.createElement("button");       

        //Add content to elements
        locationName.textContent = location.name;
        locationImage.setAttribute("src", location.picture);
        locationImage.setAttribute("alt", `${location.name} Picture`);
        locationImage.setAttribute("width", 500);
        locationImage.setAttribute("height", 227);
        locationImage.setAttribute("loading", "lazy");
        locationImage.classList.add('picture-hover-effect');
        locationAddress.textContent = location.address;
        locationDescription.textContent = location.description;
        learnMore.textContent = 'Learn More';        
        learnMore.classList.add('button-class');

        //Add an event listener to the 'Learn More' button
        learnMore.addEventListener('click', function () {
            window.location.href = location.url;
        });

        //Add elements to section
        card.classList.add("location-card");
        card.appendChild(locationName);
        card.appendChild(locationImage);
        card.appendChild(locationAddress);
        card.appendChild(locationDescription);
        card.appendChild(learnMore);

        //Add to html file
        localAttractions.appendChild(card);
    });
};

//Call function
displayAttractions(places);