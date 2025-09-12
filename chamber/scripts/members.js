//Constant variable that contains JSON data on the Chamber of Commerce members
const membersFile = 'data/members.json';

//Constant variable that links to the div element "business-display" on the html file
const businessDisplay = document.querySelector(".business-display");

//Create an async defined function to fetch data from the JSON file using the await/fetch method
async function getMemberData() {
    const response = await fetch(membersFile);
    
    //Convert the response to a JSON object and store the results
    const data = await response.json();

    //Clear existing content
    businessDisplay.innerHTML = '';


    //Display the data, use if statement to determine if you use the list or grid view
    if (businessDisplay.classList.contains('list-view')) {
        displayMembersList(data.members);
    } else {
        displayMembersGrid(data.members);    
    }
};

//Store the list/card buttons as variables
const cardsButton = document.querySelector("#cards-btn");
const listButton = document.querySelector("#list-btn");

//Create click event for buttons that determine whether a list or the member cards are displayed
cardsButton.addEventListener('click', () => {
    businessDisplay.classList.remove('list-view');
    businessDisplay.classList.add('grid-view');
    getMemberData();
});

listButton.addEventListener('click', () => {
    businessDisplay.classList.remove('grid-view');
    businessDisplay.classList.add('list-view');
    getMemberData();
});

//Function to create and dispaly member information, use if statement to determine whether the list or the cards are shown
function displayMembersGrid(members) {
    //Create a card for each business
    members.forEach((member) => {
        //Create elements
        let card = document.createElement("section");        
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let companyLogo = document.createElement("img");
        let companyName = document.createElement("h2");
        let companyAddress = document.createElement("address");
        let companyPhone = document.createElement("a");
        let companyWebsite = document.createElement("a");

        //Add content to elements
        companyLogo.setAttribute("src", member.image);
        companyLogo.setAttribute("alt", `${member.name} logo`);
        companyLogo.setAttribute("loading", "lazy");
        companyName.textContent = member.name;
        companyAddress.textContent = `Address: ${member.address}`;
        companyPhone.setAttribute("href", `tel:${member.phonenumber}`);
        companyPhone.textContent = `Phone: ${member.phonenumber}`;
        companyWebsite.setAttribute("href", member.websiteurl);
        companyWebsite.textContent = `URL: ${member.websiteurl}`;

        //Add elements to divs
        div2.classList.add("contact-info");
        div2.appendChild(companyAddress);
        div2.appendChild(companyPhone);
        div2.appendChild(companyWebsite);
        div1.classList.add("logo-and-contact");
        div1.appendChild(companyLogo);
        div1.appendChild(div2);

        //Add elements to section
        card.classList.add("business-card");        
        card.appendChild(companyName);
        card.appendChild(div1);

        //Add to html file
        businessDisplay.appendChild(card);
    });
};

function displayMembersList(members) {
    //Create a table of businesses and information
    members.forEach((member) => {        
        let companyName = document.createElement("h2");

        //Add content
        companyName.textContent = member.name;

        //Add to html file
        businessDisplay.appendChild(companyName);
    })
};

//Set default view
businessDisplay.classList.add('grid-view');
getMemberData();


