function fetchWeather(city) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + " &units=metric&appid=" + apikey)
    .then(res => {
      return res.json()
    })
    .then(data => dWeather(data))
}
function dWeather(data) {
  const { name } = data
  const { icon, description } = data.weather[0]
  const { temp, humidity } = data.main
  const { speed } = data.wind
  console.log(name, icon, description, temp, humidity, speed)
  document.querySelector(".city").innerHTML = name
  document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
  document.querySelector(".temp").innerHTML = Math.floor(temp) + "°C"
  document.querySelector(".description").innerHTML = description
  document.querySelector(".humidity").innerHTML = "Humidity : " + humidity + " % "
  document.querySelector(".wind").innerHTML = "Wind Speed : " + speed + "Km/h"
}

function search() {
  fetchWeather(document.querySelector("#input").value)
}

document.querySelector("#button").addEventListener("click", function () {
  search()
})

fetchWeather("london")
