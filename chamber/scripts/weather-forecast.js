//Select all HTML elements
const forecastToday = document.querySelector('#forecast-today');
const forecastTomorrow = document.querySelector('#forecast-next-day');
const forecastTwoDays = document.querySelector('#forecast-two-days');

//Create variables for the URL
const myKey = "815579dff197464b572575f1e2216f72";
const myLat = "34.85";
const myLong = "-82.40";

//Link to openweathermap.org
const url = `https://api.openweathermap.org/data/3.0/onecall/overview?lat=${myLat}&lon=${myLon}&appid=${myKey}`

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
    forecastToday.innerHTML = `${data.temp}&deg;F`;
    const iconsrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    figureCaption.textContent = `${desc}`;
};

//Run the program
apiFetch();
