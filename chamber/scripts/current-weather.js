//Select all HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDescription = document.querySelector('#weather-description');
const highTemp = document.querySelector('#high-temp');
const lowTemp = document.querySelector('#low-temp');
const humidity = document.querySelector('#humidity');
const forecastToday = document.querySelector('#forecast-today');
const forecastTomorrow = document.querySelector('#forecast-next-day');
const forecastTwoDays = document.querySelector('#forecast-two-days');

//Create variables for the URL
const myKey = "815579dff197464b572575f1e2216f72";
const myLat = "34.85";
const myLong = "-82.40";

//Link to openweathermap.org
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;
const forecastWeatherUrl = `https://api.openweathermap.org/data/3.0/onecall/overview?lat=${myLat}&lon=${myLong}&appid=${myKey}`;

//Current Weather Functions
async function apiFetchCurrentWeather() {
    try {
        const response = await fetch(currentWeatherUrl);
        if (response.ok) {
            const currentWeatherData = await response.json();            
            displayCurrentWeatherResults(currentWeatherData);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

//Display the JSON Data onto web page
function displayCurrentWeatherResults(data) {          
    let desc = data.weather[0].description;
    const iconsrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;    
    weatherDescription.textContent = `${desc}`;
    highTemp.innerHTML = `High: ${data.main.temp_max}&deg;F`;
    lowTemp.innerHTML = `Low: ${data.main.temp_min}&deg;F`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
};

//Weather Forecast Functions
async function apiFetchForecast() {
    try {
        const response = await fetch(forecastWeatherUrl);
        if (response.ok) {
            const forecastData = await response.json();
            console.log(forecastData);
            displayForecastResults(forecastData);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

//Display the JSON Data onto web page
function displayForecastResults(data) {
    const forecastToday = data.highTemp;
};


//Run the program
apiFetchCurrentWeather();
apiFetchForecast();