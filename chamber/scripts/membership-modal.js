//Constant variable that contains JSON data on the Chamber of Commerce membership levels
const membershipFile = 'data/memberships.json';

//Create an async defined function to fetch data from the JSON file using the await/fetch method
async function getMembershipData() {
    const response = await fetch(membershipFile);
    //Convert the response to a JSON object and store the results
    const data = await response.json();
    //Display the membership levels
    displayMembership(data.memberships);
};

//Call function
getMembershipData();

//Query Selectors for Modal
const membershipDialog = document.querySelector("#mydialog");
const membershipTitle = document.querySelector("#mydialog h3");
const membershipClose = document.querySelector("#close-button");
const membershipInfo = document.querySelector("#mydialog p");
const membershipBenefits = document.querySelector("#mydialog ul");

//Add event listener for closing modal
membershipClose.addEventListener("click", () => {
    membershipDialog.close();
});

//Create function to display information about each membership level and the dialog box
function displayMembership(membershipList) {
    //Select class from join.html
    const showMembershipsHere = document.querySelector("#membership-levels");

    //Clear before each button is pushed so new arrays can be made
    showMembershipsHere.innerHTML = '';

    //Create content
    membershipList.forEach(membership => {
        //Create div for each membership level
        let membershipsDiv = document.createElement("div");

        //Create name and "Learn More" button
        let membershipName = document.createElement("h3");
        membershipName.textContent = membership.level;
        const openButton = document.createElement("button");
        openButton.innerText = "Learn More";
        openButton.classList = "open-button";

        //Append name and button to div
        membershipsDiv.appendChild(membershipName);
        membershipsDiv.appendChild(openButton);

        //Add the membership div to the larger div in the html file
        showMembershipsHere.appendChild(membershipsDiv);

        //Add event listener for the open buttons and populate elements in dialog
        openButton.addEventListener("click", () => {
            membershipTitle.textContent = membership.level;
            membershipInfo.innerHTML = membership.cost;

            //Clear existing list of benefits:
            membershipBenefits.innerHTML = '';

            //Create list of benefits
            membership.benefits.forEach(benefit => {
                const li = document.createElement("li");
                li.textContent = benefit;
                membershipBenefits.appendChild(li);
            })

            //Display modal
            membershipDialog.showModal();
        });
    });
}