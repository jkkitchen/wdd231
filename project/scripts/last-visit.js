//Use local storage to determine how long since the user's last visit and display a message.

//Set an event listener so the current time will be recorded when the page loads
document.addEventListener('DOMContentLoaded', () => {
    //Set variable to tie back to html
    const loadingMessage = document.querySelector('.last-visit-date');
    const returnMessage = document.createElement('p');

    //Set key value for localStorage
    const lastVisitKey = 'lastVisitDate';

    //Get last visit date from localStorage and convert to a number
    const lastVisitDateString = localStorage.getItem(lastVisitKey);
    const lastVisitDate = Number(lastVisitDateString);

    //Get today's date
    const todayDate = Date.now();

    //Calculate the difference between the two dates and display a message based on the result
    if (lastVisitDateString) { //Checks if there is a value in localStorage, if there's not a value stored then it means this is the first visit   

        //Calculate the difference in milliseconds and convert to days
        const visitDifference = Math.floor((todayDate - lastVisitDate) / (1000 * 60 * 60 * 24));

        if (visitDifference < 1) {
            returnMessage.textContent = "Welcome back! We're glad you're here!"
        } else if (visitDifference == 1) {
            returnMessage.textContent = `Welcome back! You last visited 1 day ago!`;
        } else {
            returnMessage.textContent = `Welcome back! It's been ${visitDifference} days since your last visit!`;
        };
    } else {
        returnMessage.textContent = "Welcome to Piece and Love Quilt Shop! We're glad you're here!"
    };

    //Append the returnMessage content to .last-visit-date
    loadingMessage.appendChild(returnMessage);

    //Store the current visit time in localStorage for next time
    localStorage.setItem(lastVisitKey, todayDate);
});