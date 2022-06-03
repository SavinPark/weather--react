import React, { useState } from 'react';
import axios from 'axios';
import { RiCelsiusLine } from "react-icons/ri";


function DetailsCard ({keyword}) {

  const [temp_min, setTemp_min] = useState(0);
  const [temp_max, setTemp_max] = useState(0);
  const [temp_feel, setTemp_feel] = useState(0);

  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');

  const [wind_speed, setWind_speed] = useState(0);
  const [wind_deg, setWind_deg] = useState(0);

  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);
  
  const [clouds, setClouds] = useState(0);
  const [visibility, setVisibility] = useState(0);
  
  const [rain_1h, setRain_1h] = useState(null);
  const [rain_3h, setRain_3h] = useState(null);
  const [snow_1h, setSnow_1h] = useState(null);
  const [snow_3h, setSnow_3h] = useState(null);

  // AXIOS
  function getWeather($location) {
    const api = {
      key: process.env.REACT_APP_OPENWEATHERMAP_APPID,
      base_URL: "https://api.openweathermap.org/data/2.5/"
    }
    axios.get(`${api.base_URL}weather?q=${$location}&appid=${api.key}&units=metric`)
      .then((response) => {
        console.log(response.data);
        setTemp_min(response.data.main.temp_min);
        setTemp_max(response.data.main.temp_max);
        setTemp_feel(response.data.main.feels_like);
        setSunrise(response.data.sys.sunrise);
        setSunset(response.data.sys.sunset);
        setWind_speed(response.data.wind.speed);
        setWind_deg(response.data.wind.deg);
        setHumidity(response.data.main.humidity);
        setPressure(response.data.main.pressure);
        setClouds(response.data.clouds.all);
        setVisibility(response.data.visibility/1000);
        if (response.data.rain) {
          if (response.data.rain['1h']) {
            setRain_1h(response.data.rain['1h']);
          } else {
            setRain_3h(response.data.rain['3h']);
          }
        }
        if (response.data.snow) {
          if (response.data.snow['1h']) {
            setSnow_1h(response.data.snow['1h']);
          } else {
            setSnow_3h(response.data.snow['3h']);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
  // getWeather(keyword);

  return (
    <div className='details-container'>
      <p className=''>최저기온 : {temp_min}<RiCelsiusLine className='temp-icon'/></p>
      <p className=''>최고기온 : {temp_max}<RiCelsiusLine className='temp-icon'/></p>
      <p className=''>체감온도 : {temp_feel}<RiCelsiusLine className='temp-icon'/></p>
      <br/>
      <p className=''>일출 : {sunrise}<RiCelsiusLine className='temp-icon'/></p>
      <p className=''>일몰 : {sunset}<RiCelsiusLine className='temp-icon'/></p>
      <br/>
      <p className=''>풍향 :  {wind_deg}<span className='unit'>degrees</span></p>
      <p className=''>풍속 : {wind_speed}<span className='unit'>meter/sec</span></p>
      <br/>
      <p className=''>기압 : {pressure}<span className='unit'>hPa</span></p>
      <p className=''>습도 : {humidity}<span className='unit'>%</span></p>
      <br/>
      <p className=''>구름 : {clouds}<span className='unit'>%</span></p>
      <p className=''>가시거리 : {visibility}<span className='unit'>km</span></p>
      <br/>
      { rain_1h && ( <p className=''>비 : <span className='unit'>mm/1h</span></p> )}
      { rain_3h && ( <p className=''>비 : <span className='unit'>mm/3h</span></p> )}
      { snow_1h && ( <p className=''>눈 : <span className='unit'>mm/1h</span></p> )}
      { snow_3h && ( <p className=''>눈 : <span className='unit'>mm/3h</span></p> )}
    </div>
  );
}

export default DetailsCard;