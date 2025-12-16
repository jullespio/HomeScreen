const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temperature-value p');
const descElement = document.querySelector('.temperature-description p');

// App data
const weather = {};
weather.temperature = {
  unit: 'celsius',
};

// Change to 'F' for Fahrenheit
var tempUnit = config.weather.tempUnit;

const KELVIN = 273.15;
// Use your own key for the Weather, Get it here: https://openweathermap.org/
const key = config.weather.apiKey;

// Set Position function
setPosition();

function setPosition(position) {
  // Here you can change your position
  // You can use https://www.latlong.net/ to get it! (I use San Francisco as an example)
  let latitude = config.weather.latitude;
  let longitude = config.weather.longitude;


  getWeather(latitude, longitude);
}

// Get the Weather data
function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(function (data) {
            let celsius = Math.floor(data.main.temp - KELVIN);
            weather.temperature.value =
                tempUnit == 'C' ? celsius : (celsius * 9) / 5 + 32;
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            displayWeather();
        })
        .catch(function (error) {
            console.log('Error fetching weather data:', error);
            tempElement.innerHTML = `- °<span class="darkfg">${tempUnit}</span>`;
            descElement.innerHTML = 'Weather unavailable';
        });
}

// Display Weather info
function displayWeather() {
  iconElement.innerHTML = `<img src="icons/OneDark/${weather.iconId}.png"/>`;
  tempElement.innerHTML = `${weather.temperature.value}°<span class="darkfg">${tempUnit}</span>`;
  descElement.innerHTML = weather.description;
}
