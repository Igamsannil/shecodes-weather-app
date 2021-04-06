let now = new Date();
let day = now.getDay();
let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[now.getDay()];

let todayDate = `${currentDay}`;

let currentTime = `${hours}:${minutes}`;

realTime.innerHTML = `${todayDate}, ${currentTime}`;

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCityLocation(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

function displayWeather(response) {
  document.querySelector(".city").innerHTML = response.data.name;
  document.querySelector(".weather-now").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchCityLocation(city) {
  let apiKey = `a3fd89d3a1c0dce20e75a4e9ea8dc63c`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#weather-now");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#weather-now");
  temperatureElement.innerHTML = -4;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
