function showTemp(response) {
  temperature = `${Math.round(response.data.main.temp)}`;
  let tempNow = document.querySelector("#cel");
  tempNow.innerHTML = ` its ${temperature}℃`;
  let changeCity = document.querySelector(".display-2");
  changeCity.innerHTML = `It's going to be ${response.data.weather[0].description} in ${response.data.name}`;
  let wind = document.querySelector("#speed");
  wind.innerHTML = `Wind speed: ${Math.round(response.data.wind.speed)}km/h`;
  let humidity = document.querySelector("#prec");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;

  let changeIcon = document.querySelector(`#icon`);
  changeIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  changeIcon.setAttribute("alt", `${response.data.weather[0].description}`);
}

function formatDate(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];
  let hour = date.getHours();
  let minute = date.getMinutes();
  let formattedDate = `Today is ${day}, ${hour}:${minute}`;
  return formattedDate;
}
let live = document.querySelector(".display-4");
live.innerHTML = formatDate(new Date());

function city(event) {
  event.preventDefault();
  let fillCity = document.querySelector("#inlineFormInput");

  let apiKey = "a4a59d6f5e1d126fd66ccd575a9311a3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${fillCity.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
let tell = document.querySelector("#city-form");
tell.addEventListener("submit", city);

function fahrTemp(event) {
  event.preventDefault();
  let fahrenheit = Math.round(temperature * (9 / 5) + 32);
  document.querySelector("#cel").innerHTML = `${fahrenheit}°F`;
}

let temperature = null;

let fahrenheitButton = document.querySelector(`.fahrenheit`);
fahrenheitButton.addEventListener("click", fahrTemp);
