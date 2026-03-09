export function renderWeather(data){

let current=data.forecast.list[0]

document.getElementById("temp").innerText=
Math.round(current.main.temp)+"°C"

document.getElementById("condition").innerText=
current.weather[0].main

document.getElementById("location").innerText=
data.forecast.city.name

document.getElementById("humidity").innerText=
current.main.humidity+"%"

document.getElementById("wind").innerText=
current.wind.speed+" km/h"

document.getElementById("visibility").innerText=
current.visibility/1000+" km"

document.getElementById("pressure").innerText=
current.main.pressure+" mb"

setAnimatedIcon(current.weather[0].main)

renderForecast(data)

renderHourly(data)

}

function setAnimatedIcon(weather){

const player=document.getElementById("weatherAnimation")

let src=""

switch(weather){

case "Clear":
src="https://assets2.lottiefiles.com/packages/lf20_xlky4kvh.json"
break

case "Clouds":
src="https://lottie.host/ea009255-95a7-409b-aef3-8cceccf90e1a/H43Lbd2vfT.json"
break

case "Rain":
src="https://lottie.host/3c137a81-1d86-4c0c-bddc-c9f55dee9c57/KQbxexxjcZ.json"
break

case "Snow":
src="https://lottie.host/9654c905-0041-4c0f-8221-a74a1213b69d/YS1oNh7Fz4.json"
break

case "Thunderstorm":
src="https://lottie.host/d8e8d307-b6a9-4290-b0b0-d89982608af8/GNSYl5q3XA.json"
break

default:
src="https://assets5.lottiefiles.com/packages/lf20_t24tpvcu.json"

}

player.load(src)

}

function renderForecast(data){

const forecast = document.getElementById("forecast")

forecast.innerHTML = ""

if(!Array.isArray(data.daily)) return

data.daily.slice(0,10).forEach(day => {

let card = document.createElement("div")

card.className = "card forecast-card"

card.innerHTML = `
<p>${new Date(day.dt * 1000).toLocaleDateString()}</p>

<img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">

<h3>${Math.round(day.temp.day)}°</h3>
`

forecast.appendChild(card)

})

}

function renderHourly(data){

const dropdown=document.getElementById("hourlyDropdown")

dropdown.innerHTML=""

dropdown.style.display="flex"
dropdown.style.gap="15px"
dropdown.style.overflowX="auto"

for(let i=0;i<12;i++){

let hour=data.forecast.list[i]

let card=document.createElement("div")

card.className="hour-card"

card.innerHTML=`

<div>${new Date(hour.dt_txt).getHours()}:00</div>

<img src="https://openweathermap.org/img/wn/${hour.weather[0].icon}.png">

<div>${Math.round(hour.main.temp)}°</div>

`

dropdown.appendChild(card)

}

}