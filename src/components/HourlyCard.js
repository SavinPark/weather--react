import React, { useState } from 'react';
import axios from 'axios';
import { RiCelsiusLine } from "react-icons/ri";

function HourlyCard ({keyword}) {

    let [forecast, setForecast] = useState([]);

    // AXIOS
    function getForecast($location) {
      const api = {
        key: process.env.REACT_APP_OPENWEATHERMAP_APPID,
        base_URL: "https://api.openweathermap.org/data/2.5/"
      }

      axios.get(`${api.base_URL}forecast?q=${$location}&appid=${api.key}&units=metric`)
        .then((response) => {
            // console.log(response.data.list)
            setForecast([...response.data.list])
        })
        .catch((error) => {
          console.log(error);
          alert('도시명을 영어로 작성해주세요. Ex) New York');
          window.history.back();
        }) 
    }
    getForecast(keyword);

    function rendering() {
          const result = [];
          let temp_date = '';
          for (let idx=0; idx < forecast.length; idx++) {
              if (temp_date !== forecast[idx].dt_txt.substr(0,10)) {
                result.push(
                    <div className='row' key={idx}>
                        <p className='date'><i className='bx bx-calendar-heart'></i>{forecast[idx].dt_txt.substr(0,10)}</p>
                        <div className='row-inner'>
                            <span className='row-time'>{forecast[idx].dt_txt.substr(11, 5)}</span>
                            <img className="row-icon" src={require(`../images/weahter/${forecast[idx].weather[0].icon}.png`)} alt="weather-icon"/>
                            <span className='row-temp'>{forecast[idx].main.temp}<RiCelsiusLine className="row-temp-icon"/></span>
                        </div>
                    </div>
                );
                temp_date = forecast[idx].dt_txt.substr(0,10);
              } else {
                result.push(
                    <div className='row' key={idx}>
                        <div className='row-inner'>
                            <span className='row-time'>{forecast[idx].dt_txt.substr(11, 5)}</span>
                            <img className="row-icon" src={require(`../images/weahter/${forecast[idx].weather[0].icon}.png`)} alt="weather-icon"/>
                            <span className='row-temp'>{forecast[idx].main.temp}<RiCelsiusLine className="row-temp-icon"/></span>
                        </div>
                    </div>
                );
              }
          }
        return result;
    }

    return (
        <div className="hourly-container">
            <div className='table'>

                { rendering() }

                {/* {forecast.forEach(ele => {
                    return (
                        <div className='row'>
                            <p className='date'><i className='bx bx-calendar-heart'></i>{ele.dt_txt.substr(0,10)}</p>
                            <div>
                            <span className='row-time'>{ele.dt_txt.substr(11)}</span>
                            <img className="info-weather-icon" src={require(`../images/weahter/${ele.weather[0].icon}.png`)} alt="weather-icon"/>
                            <span className='row-temp'>{ele.main.temp}<RiCelsiusLine/></span>
                            </div>
                        </div>
                    )
                })} */}
            </div>
        </div>
    );
}
export default HourlyCard;