const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temperature-value p');
const feelsLikeElement = document.querySelector('#feels-like');
const descElement = document.querySelector('.temperature-description p');
const lastUpdatedElement = document.querySelector('#last-updated');
const sunElement = document.querySelector('#sun');

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

// Automated Sensor Sweep: Refreshes every 20 minutes
setInterval(function() {
    console.log("Commencing scheduled atmospheric scan...");
    setPosition();
}, 1200000);

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
            let temp_base_k = data.main.temp;
            let temp_feels_k = data.main.feels_like;

            const processTemp = (kelvin) => {
                let celsius = Math.floor(kelvin - KELVIN);
                return tempUnit === 'C' ? celsius : (celsius * 9) / 5 + 32;
            };
            
            weather.temperature.value = processTemp(temp_base_k);
            weather.temperature.feelsLike = processTemp(temp_feels_k);

            let sunrise_base = data.sys.sunrise;
            let sunset_base = data.sys.sunset;

            const formatTime = (timestamp) => {
                // JavaScript expects milliseconds, but OWM provides seconds
                let date = new Date(timestamp * 1000);
                return date.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    hour12: true // Set to true for AM/PM format
                });
            };

            weather.description = data.weather[0].description;
            weather.humidity = data.main.humidity;
            weather.iconId = data.weather[0].icon;

            weather.sunrise = formatTime(sunrise_base);
            weather.sunset = formatTime(sunset_base);
            
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
  
  // Main Temperature
  tempElement.innerHTML = `${weather.temperature.value}°<span class="darkfg">${tempUnit}</span>`;
  
  // Dedicated "Feels Like" display
  if (feelsLikeElement) {
    feelsLikeElement.innerHTML = `feels like ${weather.temperature.feelsLike}° | humidity: ${weather.humidity}%`;
  }

  if (lastUpdatedElement) {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        lastUpdatedElement.innerHTML = `last scan: ${timeString}`;
    }

    if (sunElement) {
        sunElement.innerHTML = `sunrise: ${weather.sunrise} | sunset: ${weather.sunset}`;
    }

  descElement.innerHTML = weather.description;
}
