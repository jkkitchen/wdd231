//-----join.html page-----
//Set timestamp for when page was loaded
document.addEventListener("DOMContentLoaded", function () {
    const timestamp = document.querySelector("#form-timestamp");
    //Use if statement so it will only work on join.html where #form-timestamp exists
    if (timestamp) {
        timestamp.value = new Date().toLocaleString();
    }
    
});

//-----FOOTER-----
// Select the id for copyright year
const year = document.querySelector("#currentyear");

// Use the date object
const today = new Date();

//Output for Copyright Year
currentyear.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;

//Last Modified 
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;