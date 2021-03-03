import React, { useState, useEffect } from 'react'
import './WeatherApp.css'
import { getTimezone } from './get-timezone'

const WeatherApp = () => {
  const API_KEY = '97d38a2a2be5d12785fe434a802ee283';
  const API_ENDPOINT = 'https://api.openweathermap.org';

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');

  //helpers
  const toCelsius = (num) => Math.round(num - 273.1);
  const toKmh = (num) => +((num * 3.6).toFixed(1));

  async function getWeather(city) {
    const response = await fetch(`${API_ENDPOINT}/data/2.5/weather?q=${city}&appid=${API_KEY}`);

    if(!response.ok) {
      alert('City not found')
      return;
    }

    const data = await response.json();
    const weather = {
      icon: data.weather[0].icon,
      temp: toCelsius(data.main.temp),
      city: data.name,
      country: data.sys.country,
      timezone: getTimezone(data.timezone),
      weather: data.weather[0].main,
      humidity: data.main.humidity,
      wind: toKmh(data.wind.speed) 
    }

    return weather;
  }

  useEffect(() => {
    getWeather('Lima')
      .then(weather => setWeather(weather));
  }, [])

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!city) return; 
    getWeather(city)
      .then(weather => {
        if(weather) setWeather(weather)
      });
    setCity('');
  }

  return (
    <div className="weather-app">
        <h1>weather app</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={city} 
            onChange={(e) => setCity(e.target.value)}
            type="search" 
            placeholder="City"/>
          <input type="submit" value="search"/>
        </form>
        {!weather ? 'Loading...'
        : <div>
            <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="weather-icon"/>
            <p style={{fontSize: "3rem"}}>{`${weather.temp}°`}</p>
            <p>{`${weather.city + ', ' + weather.country}`}</p>
            <p>{weather.timezone}</p>
            <p><strong>Weather:</strong> {weather.weather}</p>
            <p><strong>Humidity:</strong> {weather.humidity}%</p>
            <p><strong>Wind:</strong> {weather.wind} km/h</p>
          </div>}
    </div>
  );
}

export default WeatherApp