//-----FOOTER-----
// Select the id for copyright year
const year = document.querySelector("#currentyear");

// Use the date object
const today = new Date();

//Output for Copyright Year
currentyear.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;

//Last Modified 
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;