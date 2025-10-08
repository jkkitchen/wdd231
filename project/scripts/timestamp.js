//-----index.html/thanks.html page-----
//Set timestamp for when page was loaded
document.addEventListener("DOMContentLoaded", function () {
    const timestamp = document.querySelector("#form-timestamp");    
    timestamp.value = new Date().toLocaleString();  
});