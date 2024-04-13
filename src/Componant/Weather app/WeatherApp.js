import React, { useState } from 'react';
import './../../Componant/Weather app/WeatherApp.css';
import clear from './../../Componant/Weather app/weather img/clear.png';
import clouds from './../../Componant/Weather app/weather img/clouds.png';
import drizzle from './../../Componant/Weather app/weather img/drizzle.png';
import humidity from './../../Componant/Weather app/weather img/humidity.png';
import mist from './../../Componant/Weather app/weather img/mist.png';
import rain from './../../Componant/Weather app/weather img/rain.png';
import snow from './../../Componant/Weather app/weather img/snow.png';
import search from './../../Componant/Weather app/weather img/search.png';
import wind from './../../Componant/Weather app/weather img/wind.png';

function Weather() {
  const [weatherIconSrc, setWeatherIconSrc] = useState(rain);
  const [city, setCity] = useState('Nagpur');
  const [temp, setTemp] = useState('22°C');
  const [humidityValue, setHumidityValue] = useState('50%');
  const [windSpeed, setWindSpeed] = useState('15 km/h');

  const apiKey = "f652964084c552e8c0492237a3fabd9c";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  async function checkWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    setCity(data.name);
    setTemp(`${Math.round(data.main.temp)}°C`);
    setHumidityValue(`${data.main.humidity}%`);
    setWindSpeed(`${data.wind.speed} km/h`);

    switch (data.weather[0].main) {
      case "Clouds":
        setWeatherIconSrc(clouds);
        break;
      case "Clear":
        setWeatherIconSrc(clear);
        break;
      case "Rain":
        setWeatherIconSrc(rain);
        break;
      case "Drizzle":
        setWeatherIconSrc(drizzle);
        break;
      case "Mist":
        setWeatherIconSrc(mist);
        break;
      default:
        setWeatherIconSrc(rain);
    }
  }

  return (
    <div className="Weather-card">
      <div className="weather">
        <img src={weatherIconSrc} className="weather-icon" alt="Weather Icon"/>
        <h1 className="temp">{temp}</h1>
        <h2 className="city">{city}</h2>
      </div>
      <div className="search">
        <input type="text" placeholder="enter city name" spellCheck="false" />
        <button className="btn" onClick={() => checkWeather(document.querySelector(".search input").value)}>
          <img src={search} alt="Search Icon" />
        </button>
      </div>
      <div className="details">
        <div className="cols">
          <img src={humidity} alt="Humidity Icon"/>
          <div>
            <p className="humidity">{humidityValue}<br />Humidity</p>
          </div>
        </div>
        <div className="cols">
          <img src={wind} alt="Wind Icon"/>
          <div>
            <p className="wind">{windSpeed}<br />Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
