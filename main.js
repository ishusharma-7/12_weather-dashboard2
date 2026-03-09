import {getWeather} from "./js/api.js"
import {renderWeather} from "./js/ui.js"
import {startAnimation} from "./js/background.js"
import {setupSearch} from "./js/search.js"

const popup=document.getElementById("popup")
const weatherCard=document.getElementById("weatherCard")

weatherCard.onclick=()=>{

document.getElementById("hourlyDropdown").classList.toggle("hidden")

}

document.getElementById("allowLocation").onclick=()=>{

navigator.geolocation.getCurrentPosition((pos)=>{

let lat=pos.coords.latitude
let lon=pos.coords.longitude

localStorage.setItem("lat",lat)
localStorage.setItem("lon",lon)

loadWeather(lat,lon)

popup.style.display="none"

})

}

document.getElementById("cancelLocation").onclick=()=>{

let lat=localStorage.getItem("lat")||28.6139
let lon=localStorage.getItem("lon")||77.2090

loadWeather(lat,lon)

popup.style.display="none"

}

document.getElementById("useLocation").onclick=()=>{

navigator.geolocation.getCurrentPosition((pos)=>{

loadWeather(pos.coords.latitude,pos.coords.longitude)

})

}

async function loadWeather(lat,lon){

const data=await getWeather(lat,lon)

renderWeather(data)

startAnimation(data.forecast.list[0].weather[0].main)

}

setupSearch(loadWeather)