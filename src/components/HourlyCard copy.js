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
            console.log(response.data.list)
        })
        .catch((error) => {
          console.log(error);
        }) 
    }
    getForecast(keyword); 

    // function rendering() {
    //       const result = [];
    //       for (let key in forecast) { 
    //         result.push(
    //             <div className='row' key={key}>
    //                 <p className='date'><i className='bx bx-calendar-heart'></i>{key}</p>
    //                 {forecast[key].forEach(ele => {console.log(ele)})}
    //                     <div>
    //                         <span className='row-time'>ele.time</span>
    //                         <img className="row-icon" src={require(`../images/weahter/09d.png`)} alt="weather-icon"/>
    //                         <span className='row-temp'>ele.temp<RiCelsiusLine/></span>
    //                     </div>
    //             </div>
    //         );
    //       }
    //      return result;
    // }
    // let forecastKeys = Object.keys(forecast);
    // console.log(forecast)

    return (
        <div className="hourly-container">
            <div className='table'>
                {/* { rendering() } */}
                <div className='row'>
                    <p className='date'><i className='bx bx-calendar-heart'></i>2022-06-03</p>
                    <div>
                        <span className='row-time'>09:00</span>
                        {/* <img className="info-weather-icon" src={require(`../images/weahter/${imgCode}.png`)} alt="weather-icon"/> */}
                        <img className="row-icon" src={require(`../images/weahter/09d.png`)} alt="weather-icon"/>
                        <span className='row-temp'>temp<RiCelsiusLine/></span>
                    </div>
                    <div>
                        <span className='row-time'>09:00</span>
                        {/* <img className="info-weather-icon" src={require(`../images/weahter/${imgCode}.png`)} alt="weather-icon"/> */}
                        <img className="row-icon" src={require(`../images/weahter/09d.png`)} alt="weather-icon"/>
                        <span className='row-temp'>temp<RiCelsiusLine/></span>
                    </div>
                    <div>
                        <span className='row-time'>09:00</span>
                        {/* <img className="info-weather-icon" src={require(`../images/weahter/${imgCode}.png`)} alt="weather-icon"/> */}
                        <img className="row-icon" src={require(`../images/weahter/09d.png`)} alt="weather-icon"/>
                        <span className='row-temp'>temp<RiCelsiusLine/></span>
                    </div>
                </div>
                <div className='row'>
                    <p className='date'><i className='bx bx-calendar-heart'></i>2022-06-03</p>
                    <div>
                        <span className='row-time'>09:00</span>
                        {/* <img className="info-weather-icon" src={require(`../images/weahter/${imgCode}.png`)} alt="weather-icon"/> */}
                        <img className="row-icon" src={require(`../images/weahter/09d.png`)} alt="weather-icon"/>
                        <span className='row-temp'>temp<RiCelsiusLine/></span>
                    </div>
                    <div>
                        <span className='row-time'>09:00</span>
                        {/* <img className="info-weather-icon" src={require(`../images/weahter/${imgCode}.png`)} alt="weather-icon"/> */}
                        <img className="row-icon" src={require(`../images/weahter/09d.png`)} alt="weather-icon"/>
                        <span className='row-temp'>temp<RiCelsiusLine/></span>
                    </div>
                    <div>
                        <span className='row-time'>09:00</span>
                        {/* <img className="info-weather-icon" src={require(`../images/weahter/${imgCode}.png`)} alt="weather-icon"/> */}
                        <img className="row-icon" src={require(`../images/weahter/09d.png`)} alt="weather-icon"/>
                        <span className='row-temp'>temp<RiCelsiusLine/></span>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default HourlyCard;