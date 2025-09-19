//Constant variable that contains JSON data on the Chamber of Commerce members
const membersFile = 'data/members.json';

//Constant variable that links to the div element "random-business-cards" on the html file
const randomMembers = document.querySelector(".random-business-cards");

//Create an async defined function to fetch data from the JSON file using the await/fetch method
async function getMemberData() {
    const response = await fetch(membersFile);

    //Convert the response to a JSON object and store the results
    const data = await response.json();

    //Clear existing content
    randomMembers.innerHTML = '';

    //Filter array for only gold or silver members
    const goldAndSilverMembers = data.members.filter(member => member.membershiplevel === "Gold" || member.membershiplevel === "Silver")
    
    //Shuffle the array
    //...goldAndSilverMembers copies and spreads the filtered array elements into a new array (so we don't alter the original list)
    //.sort() takes a function that determines the sort order
    //() => 0.5 - Math.random() returns a random number between -0.5 and +0.5 which (when added to the current array index) 
    //      changes the order of the objects in the array
    const shuffledMembers = [...goldAndSilverMembers].sort(() => 0.5 - Math.random());

    //Slice the first 3 members from the shuffled array
    const selectedMembers = shuffledMembers.slice(0, 3);

    //Display the three random members using the display function
    displayMembers(selectedMembers);
};

//Function to create and dispaly member information, use if statement to determine whether the list or the cards are shown
function displayMembers(members) {
    //Create a card for each business
    members.forEach((member) => {
        //Create elements
        let card = document.createElement("section");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let companyLogo = document.createElement("img");
        let companyName = document.createElement("h2");
        let companyAddress = document.createElement("p");
        let companyPhone = document.createElement("p");
        let companyWebsite = document.createElement("p");
        let membershipLevel = document.createElement("p");

        //Add content to elements
        companyLogo.setAttribute("src", member.image);
        companyLogo.setAttribute("alt", `${member.name} logo`);
        companyLogo.setAttribute("loading", "lazy");
        companyLogo.setAttribute("height", "50")
        companyName.textContent = member.name;
        companyAddress.textContent = `Address: ${member.address}`;        
        companyPhone.textContent = `Phone: ${member.phonenumber}`;        
        companyWebsite.textContent = `URL: ${member.websiteurl}`;
        membershipLevel.textContent = `${member.membershiplevel} Level Member`;

        //Add elements to divs
        div2.classList.add("contact-info");
        div2.appendChild(companyAddress);
        div2.appendChild(companyPhone);
        div2.appendChild(companyWebsite);
        div2.appendChild(membershipLevel);
        div1.classList.add("logo-and-contact");
        div1.appendChild(companyLogo);
        div1.appendChild(div2);

        //Add elements to section
        card.classList.add("business-card");
        card.appendChild(companyName);
        card.appendChild(div1);

        //Add to html file
        randomMembers.appendChild(card);
    });
};


//Set default view

getMemberData();


