import React, { useState } from 'react';
import axios from 'axios';
import { RiCelsiusLine } from "react-icons/ri";

function HourlyCard ({keyword}) {
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
    // getForecast(keyword);

    return (
        <div className="hourly-container">
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Weather</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>00:00</td>
                        <td>temp<RiCelsiusLine/></td>
                        {/* <td>temp_min<RiCelsiusLine/></td>
                        <td>temp_max<RiCelsiusLine/></td> */}
                    </tr>
                    <tr>
                        <td>3:00</td>
                        <td>temp<RiCelsiusLine/></td>
                    </tr>
                    <tr>
                        <td>6:00</td>
                        <td>temp<RiCelsiusLine/></td>
                    </tr>
                    <tr>
                        <td>9:00</td>
                        <td>temp<RiCelsiusLine/></td>
                    </tr>
                    <tr>
                        <td>12:00</td>
                        <td>temp<RiCelsiusLine/></td>
                    </tr>
                    <tr>
                        <td>15:00</td>
                        <td>temp<RiCelsiusLine/></td>
                    </tr>
                    <tr>
                        <td>18:00</td>
                        <td>temp<RiCelsiusLine/></td>
                    </tr>
                    <tr>
                        <td>21:00</td>
                        <td>temp<RiCelsiusLine/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default HourlyCard;