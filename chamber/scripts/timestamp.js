//-----join.html page-----
//Set timestamp for when page was loaded
document.addEventListener("DOMContentLoaded", function () {
    const timestamp = document.querySelector("#form-timestamp");
    //Use if statement so it will only work on join.html where #form-timestamp exists
    if (timestamp) {
        timestamp.value = new Date().toLocaleString();
    }

});