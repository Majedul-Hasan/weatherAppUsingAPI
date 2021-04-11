/*
 * Weather App
*/

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

// let API_KEY = "c5fc4af668117252d8c178bee5cc061b";

getWeatherData = (city) => {
  const url = "https://api.openweathermap.org/data/2.5/weather";
  const full_url = `${url}?q=${city}&appid=${API_KEY}&units=metric`
//   console.log(full_url)
const weatherPromise = fetch(full_url);
return weatherPromise.then((response)=>{
    // console.log(response)
    return response.json()
})
}
// console.log(getWeatherData('Dhaka'))

searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city).then((response)=>{
      console.log(response)
    showWeatherData(response)
  }).catch((error)=>{
    console.log(error)
  })
}

showWeatherData = (weatherData) => {
  document.getElementById('city-name').innerText= weatherData.name
  document.getElementById('weather-type').innerText= weatherData.weather[0].main
  document.getElementById('temp').innerText= weatherData.main.temp
  document.getElementById('feels').innerText= weatherData.main.feels_like
  document.getElementById('min-temp').innerText= weatherData.main.temp_min
  document.getElementById('max-temp').innerText= weatherData.main.temp_max
  document.getElementById('humidity').innerText= weatherData.main.humidity
  document.getElementById('wind-speed').innerText= weatherData.wind.speed  
}

