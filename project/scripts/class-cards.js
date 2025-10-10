//Import data from places.mjs
import { classes } from '../data/classes.mjs';

//Link to 'class-cards' class in html
const classCards = document.querySelector('.class-cards-section');

//Create "cards" for each class--using "courses" and "course" in the function because "class" has a meaning in js and can't be used
function displayClasses(courses) {
    //Create a card for each location
    courses.forEach((course) => {
        //Create elements
        let card = document.createElement("section");        
        let className = document.createElement("h2");
        let classImage = document.createElement("img");        
        let classDate = document.createElement("p");
        let classTime = document.createElement("p");
        let classCost = document.createElement("p");
        let learnMore = document.createElement("button");       

        //Add content to elements
        className.textContent = course.name;
        classImage.setAttribute("src", course.image);
        classImage.setAttribute("alt", `${course.name} Picture`);
        classImage.setAttribute("width", 500);        
        classImage.setAttribute("loading", "lazy");        
        classDate.classList.add("class-date");
        classDate.textContent = `Date: ${course.date}`;
        classTime.classList.add("class-time");
        classTime.textContent = `Time: ${course.time}`;
        classCost.classList.add("class-cost");
        classCost.textContent = `Cost: ${course.cost}`;
        learnMore.textContent = 'Learn More';        
        learnMore.classList.add('button-class');

        //Create dialog element that will open when the "Learn More" button is clicked
        let dialog = document.createElement("dialog");
        dialog.innerHTML = `
            <h3>${course.name}</h3>
            <p>Date: ${course.date}</p>
            <p>Time: ${course.time}</p>
            <p>Cost: ${course.cost}</p>
            <p>Pattern Designer: ${course.patternDesigner}</p>
            <p>Skill Level Required: ${course.skillLevel}</p>
            <br>
            <p>${course.description}</p>
            <button class="close-btn">Close</button>`;        
        
        //Add elements to section
        card.classList.add("class-card");
        card.appendChild(className);
        card.appendChild(classImage);
        card.appendChild(classDate);
        card.appendChild(classTime);
        card.appendChild(classCost);
        card.appendChild(learnMore);
        card.appendChild(dialog);

        //Add to html file
        classCards.appendChild(card);

        //Add an event listener to the 'Learn More' button
        learnMore.addEventListener('click', function () {
            dialog.showModal();
        });

        //Add event listener for close button inside dialog
        dialog.querySelector(".close-btn").addEventListener('click', function () {
            dialog.close();
        });

    });
};

//Call function
displayClasses(classes);