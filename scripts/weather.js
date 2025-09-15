//Select all HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const figureCaption = document.querySelector('figcaption');

//Create variables for the URL
const myKey = "815579dff197464b572575f1e2216f72";
const myLat = "49.75";
const myLong = "6.63";

//Link to openweathermap.org
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); // testing only
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

//Display the JSON Data onto web page
function displayResults(data) {          
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    figureCaption.textContent = `${desc}`;
};

//Run the program
apiFetch();
