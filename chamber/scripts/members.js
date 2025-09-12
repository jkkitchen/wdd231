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
        companyLogo.setAttribute("height", "50")
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
    //Create a list of businesses and information
    members.forEach((member) => {
        //Create elements
        let listItem = document.createElement("div");
        let companyName = document.createElement("h2");
        let companyAddress = document.createElement("address");
        let companyPhone = document.createElement("a");
        let companyWebsite = document.createElement("a");

        //Add content
        companyName.textContent = member.name;
        companyAddress.textContent = `Address: ${member.address}`;
        companyPhone.setAttribute("href", `tel:${member.phonenumber}`);
        companyPhone.textContent = `Phone: ${member.phonenumber}`;
        companyWebsite.setAttribute("href", member.websiteurl);
        companyWebsite.textContent = `URL: ${member.websiteurl}`;

        //Add elements to div
        listItem.classList.add("list-items")
        listItem.appendChild(companyName);
        listItem.appendChild(companyAddress);
        listItem.appendChild(companyPhone);
        listItem.appendChild(companyWebsite);

        //Add div to html
        businessDisplay.appendChild(listItem);
    })
};

//Possible option of displaying list in a table
// function displayMembersList(members) {
//     //Create table
//     const table = document.createElement("table");
//     const thead = document.createElement("thead");
//     const tbody = document.createElement("tbody");

//     //Header row
//     const headerRow = document.createElement("tr");
//     const headers = ["Name", "Address", "Phone", "Website"];
//     //Add items in headers to row
//     headers.forEach(text => {
//         const th = document.createElement("th");
//         th.textContent = text;
//         headerRow.appendChild(th);
//     });
//     //Add the headerRow to the thead
//     thead.appendChild(headerRow);
    
    
//     //Add data to table
//     members.forEach((member) => {
//         const row = document.createElement("tr");

//         //Create data constants
//         const companyNameCell = document.createElement("td");
//         const companyAddressCell = document.createElement("td");
//         const companyPhoneCell = document.createElement("td");
//         const phoneLink = document.createElement("a");
//         const companyWebsite = document.createElement("td");
//         const websiteLink = document.createElement("a");
        
//         //Add content
//         companyNameCell.textContent = member.name;
//         companyAddressCell.textContent = member.address;
//         phoneLink.setAttribute("href", `tel:${member.phonenumber}`);
//         phoneLink.textContent = member.phonenumber;
//         companyPhoneCell.appendChild(phoneLink);
//         websiteLink.setAttribute("href", member.websiteurl);
//         websiteLink.textContent = member.websiteurl;
//         companyWebsite.appendChild(websiteLink);

//         //Add to row
//         row.appendChild(companyNameCell);
//         row.appendChild(companyAddressCell);
//         row.appendChild(companyPhoneCell);
//         row.appendChild(companyWebsite);

//         //Add row to table body
//         tbody.appendChild(row);
//     });

//     //Combine the head and body into the table
//     table.appendChild(thead);
//     table.appendChild(tbody);

//     //Add a class for styling the table in CSS
//     table.classList.add("member-table");

//     //Add the table to the html page
//     businessDisplay.appendChild(table);
// };

//Set default view
businessDisplay.classList.add('grid-view');
getMemberData();


