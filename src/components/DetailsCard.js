import React, { useState } from 'react';
import axios from 'axios';
import { RiCelsiusLine } from "react-icons/ri";
import { WiDegrees } from "react-icons/wi";


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
        // console.log(response.data);
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
        alert('도시명을 영어로 작성해주세요. Ex) New York');
        window.history.back();
      })
  }
  getWeather(keyword);

  function timeConvert(utc) {
    let kst = new Date (utc * 1000)
    // let kst_str = `${kst.getHours()}시 ${kst.getMinutes()}분 ${kst.getSeconds()}초`;
    let kst_str = `${kst.getHours()}시 ${kst.getMinutes()}분`;
    return kst_str
  }

  return (
    <div className='details-container'>
      <div className='details-inner'>
      <p><i className='bx bx-check'></i>최저기온 : <span className='value'>{temp_min}</span><RiCelsiusLine className='temp-icon'/></p>
      <p><i className='bx bx-check'></i>최고기온 : <span className='value'>{temp_max}</span><RiCelsiusLine className='temp-icon'/></p>
      <p><i className='bx bx-check'></i>체감온도 : <span className='value'>{temp_feel}</span><RiCelsiusLine className='temp-icon'/></p>
      <br/>
      <p><i className='bx bx-check'></i>일출 : <span className='value'>{timeConvert(sunrise)}</span></p>
      <p><i className='bx bx-check'></i>일몰 : <span className='value'>{timeConvert(sunset)}</span></p>
      <br/>
      <p><i className='bx bx-check'></i>풍향 :  <span className='value'>{wind_deg}</span><WiDegrees className='degrees-icon'/></p>
      <p><i className='bx bx-check'></i>풍속 : <span className='value'>{wind_speed}</span><span className='unit'>m/s</span></p>
      <br/>
      <p><i className='bx bx-check'></i>기압 : <span className='value'>{pressure}</span><span className='unit'>hPa</span></p>
      <p><i className='bx bx-check'></i>습도 : <span className='value'>{humidity}</span><span className='unit'>%</span></p>
      <br/>
      <p><i className='bx bx-check'></i>구름 : <span className='value'>{clouds}</span><span className='unit'>%</span></p>
      <p><i className='bx bx-check'></i>가시거리 : <span className='value'>{visibility}</span><span className='unit'>km</span></p>
      <br/>
      { rain_1h && ( <p><i className='bx bx-check'></i>비 : <span className='value'>{rain_1h}</span><span className='unit'>mm/1h</span></p> )}
      { rain_3h && ( <p><i className='bx bx-check'></i>비 : <span className='value'>{rain_3h}</span><span className='unit'>mm/3h</span></p> )}
      { snow_1h && ( <p><i className='bx bx-check'></i>눈 : <span className='value'>{snow_1h}</span><span className='unit'>mm/1h</span></p> )}
      { snow_3h && ( <p><i className='bx bx-check'></i>눈 : <span className='value'>{snow_3h}</span><span className='unit'>mm/3h</span></p> )}
      </div>
    </div>
  );
}

export default DetailsCard;