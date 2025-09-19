//Select all HTML elements
//Current weather
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDescription = document.querySelector('#weather-description');
const highTemp = document.querySelector('#high-temp');
const lowTemp = document.querySelector('#low-temp');
const humidity = document.querySelector('#humidity');
//Forecast
const forecastToday = document.querySelector('#forecast-today');
const forecastTomorrow = document.querySelector('#forecast-next-day');
const forecastTwoDays = document.querySelector('#forecast-two-days');


//Create variables for the URL
const myKey = "815579dff197464b572575f1e2216f72";
const myLat = "34.85";
const myLong = "-82.40";

//Link to openweathermap.org
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;
const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;



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
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    currentTemp.innerHTML = `Temperature: ${data.main.temp}&deg;F`;    
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

//Sort through the data for forecasts and find the maximum temperature for each day
function getMaxTempsPerDay(data) {
    const dailyTemps = {};

    data.list.forEach(entry => {
        const date = new Date(entry.dt_txt);

        //Extract the day string
        const day = date.toISOString().split('T')[0];

        //Checks if there is already an array for that day and creates a new array for each day to store temperatures
        if (!dailyTemps[day]) {
            dailyTemps[day] = [];
        }

        dailyTemps[day].push(entry.main.temp_max);
    });

    //Find max temp for each day
    const maxTemps = {};
    for (const day in dailyTemps) {
        maxTemps[day] = Math.max(...dailyTemps[day]);
    }

    return maxTemps;
}

//Display the JSON Data onto web page
function displayForecastResults(data) {
    //Call max temps function
    const maxTemps = getMaxTempsPerDay(data);

    //Get the dates and sort them
    const days = Object.keys(maxTemps).sort();

    //Set the 3 days
    const today = days[0];
    const tomorrow = days[1];
    const twoDaysOut = days[2];

    //Format weekday names    
    const tomorrowName = new Date(tomorrow).toLocaleDateString('en-US', { weekday: 'long' });
    const twoDaysOutName = new Date(twoDaysOut).toLocaleDateString('en-US', { weekday: 'long' });
      
    //Display the day and temperature data
    forecastToday.innerHTML = `Today: ${maxTemps[today]}&deg;F`;    
    forecastTomorrow.innerHTML = `${tomorrowName}: ${maxTemps[tomorrow]}&deg;F`;
    forecastTwoDays.innerHTML = `${twoDaysOutName}: ${maxTemps[twoDaysOut]}&deg;F`;
};



//Run the program
apiFetchCurrentWeather();
apiFetchForecast();