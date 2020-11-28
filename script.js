function showTemp(response) {
  let temperature = `${Math.round(response.data.main.temp)}`;
  let tempNow = document.querySelector("#cel");
  tempNow.innerHTML = ` its ${temperature}℃`;
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
  let changeCity = document.querySelector(".display-2");
  changeCity.innerHTML = `The weather in ${fillCity.value} is...`;
  let apiKey = "a4a59d6f5e1d126fd66ccd575a9311a3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${fillCity.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
let tell = document.querySelector("#city-form");
tell.addEventListener("submit", city);
