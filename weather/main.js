import { background } from "./background";
import { fetchdata } from "./data";
import { imgfetchdata } from "./data";
const weather = document.querySelector('.weather');
const Dialog = document.querySelector('dialog');
const temprature = document.querySelector('.temprature');
const clock = document.querySelector('.clock');
const location = document.querySelector('.location');
const weatherVisual = document.querySelector('.weather-visual');
const reset = document.querySelector('.reset');
reset.addEventListener('click',()=>{
  window.location.reload();
})
let time = 0;

Dialog.innerHTML = `<input class="location-input" placeholder="Enter a Location"></input><button class="submit-btn">Sumbit</button>`;
const submitBtn = document.querySelector('.submit-btn');
Dialog.showModal();

submitBtn.addEventListener('click', async () => {
  const input = document.querySelector('.location-input');
  const value = input.value;
  document.querySelector('body').removeChild(Dialog);
  
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
    const date = new Date(currentLocation.localtime);
    const formattedTime = date.toLocaleTimeString('en-US',{ hour12: false });
    time = formattedTime.split(":")[0];
    background(time);
    pexelApi(weatherText);
  } catch (err) {
    weather.innerHTML = `Failed to fetch data due to ${err}`;
  }
})
async function pexelApi(weatherText){
try {
  const pexelData = await imgfetchdata(weatherText);
  weatherVisual.style.backgroundImage=`url(${pexelData.photos[0].src.landscape})`
} catch (err) {
  console.error(err);
} 
}