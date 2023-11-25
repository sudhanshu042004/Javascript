import { fetchdata } from "./data";
import { imgfetchdata } from "./data";
const weather = document.querySelector('.weather');
const Dialog = document.querySelector('dialog');
const temprature = document.querySelector('.temprature');
const clock = document.querySelector('.clock');
const location = document.querySelector('.location');
const weatherVisual = document.querySelector('.weather-visual');
Dialog.innerHTML = `<input class="location-input" placeholder="Enter a Location"></input><button class="submit-btn">Sumbit</button>`;
const submitBtn = document.querySelector('.submit-btn');
Dialog.showModal();

submitBtn.addEventListener('click', async () => {
  const input = document.querySelector('.location-input');
  const value = input.value;
  
  Dialog.close();
  Dialog.innerHTML = "";
  try {
    const weatherData = await fetchdata(value);
    let currentWeather = await weatherData.current;
    let currentLocation = await weatherData.location;
    let weatherText = currentWeather.condition.text;
    let country = currentLocation.country;
    weather.innerHTML = `<img src=${currentWeather.condition.icon}></img><span>${weatherText}</span>`;
    temprature.innerHTML=`${currentWeather.temp_c}°C`
    clock.innerHTML = currentLocation.localtime;
    location.innerHTML = `${currentLocation.name}, ${country}`
    pexelApi(weatherText,country);
  } catch (err) {
    weather.innerHTML = `Failed to fetch data due to ${err}`;
  }
})
async function pexelApi(weatherText,country){
try {
  const pexelData = await imgfetchdata(weatherText);
  console.log(pexelData);
  weatherVisual.style.backgroundImage=`url(${pexelData.photos[0].src.landscape})`
} catch (err) {
  console.error(err);
} 
}