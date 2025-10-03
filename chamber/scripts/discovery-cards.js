//Import data from places.mjs
import { places } from '../data/places.mjs';

//Link to 'local-attractions' class in html
const localAttractions = document.querySelector('.local-attractions');

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

        //Add class to img to make hover effect easier
        locationImage.classList.add('picture-hover-effect');

        //Add content to elements
        locationName.textContent = location.name;
        locationImage.setAttribute("src", location.picture);
        locationImage.setAttribute("alt", `${location.name} Picture`);
        locationImage.setAttribute("width", 500);
        locationImage.setAttribute("height", 227);
        locationImage.setAttribute("loading", "lazy");       
        locationAddress.textContent = location.address;
        locationDescription.textContent = location.description;

        //Add elements to section
        card.classList.add("location-card");
        card.appendChild(locationName);
        card.appendChild(locationImage);
        card.appendChild(locationAddress);
        card.appendChild(locationDescription);

        //Add to html file
        localAttractions.appendChild(card);
    });
};

//Call function
displayAttractions(places);