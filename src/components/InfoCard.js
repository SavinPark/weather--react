import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RiCelsiusLine } from "react-icons/ri";



function InfoCard ({keyword}) {

  const [city, setCity] = useState('0');
  const [country, setCountry] = useState('0');
  const [temp, setTemp] = useState(0);
  const [imgCode, setImgCode] = useState('09d');

  // AXIOS
  function getWeather($location) {
    const api = {
      key: process.env.REACT_APP_OPENWEATHERMAP_APPID,
      base_URL: "https://api.openweathermap.org/data/2.5/"
    }
    axios.get(`${api.base_URL}weather?q=${$location}&appid=${api.key}&units=metric`)
      .then((response) => {
        // console.log(response.data);
        setCity(response.data.name);
        setCountry(response.data.sys.country);
        setTemp(response.data.main.temp);
        setImgCode(response.data.weather[0].icon);
      })
      .catch((error) => {
        console.log(error);
        alert('도시명을 영어로 작성해주세요. Ex) New York');
        window.history.back();
      })
  }
  getWeather(keyword);
  
    
  return (
    <div className='info-container'>
      <img className="info-weather-icon" src={require(`../images/weahter/${imgCode}.png`)} alt="weather-icon"/>
      <div className='info-inner'>
        <p className='info-location'>{city}, {country}</p>
        <p className='info-temp'>{temp}<RiCelsiusLine className='temp-icon'/></p>
      </div>
    </div>
  );
}

export default InfoCard;