import React, { useState } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { RiCelsiusLine } from "react-icons/ri";

import img_01d from '../images/weahter/01d.png';


const Card = styled.div`
  width: 17rem;
  height: 17rem;
  margin: 0.5rem auto;
  padding: 1rem;
  text-align: center;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  ${props => !props.edit &&
    css`
    cursor: pointer;
    &:hover {
      width: 17.5rem;
      height: 17.5rem;
      background: rgba(255, 255, 255, 0.35);
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    }`
  }
`

function FavCard({fav, edit}) {

  const [city, setCity] = useState('0');
  const [country, setCountry] = useState('0');
  const [temp, setTemp] = useState(0);
  const [imgCode, setImgCode] = useState('01d');

  // AXIOS
  function getWeather($location) {
    const api = {
      key: process.env.REACT_APP_OPENWEATHERMAP_APPID,
      base_URL: "https://api.openweathermap.org/data/2.5/"
    }
    axios.get(`${api.base_URL}weather?q=${$location}&appid=${api.key}&units=metric`)
      .then((response) => {
        console.log(response.data);
        setCity(response.data.name);
        setCountry(response.data.sys.country);
        setTemp(response.data.main.temp);
        setImgCode(response.data.weather[0].icon);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  // getWeather(fav);

    return (
        <Card className='favcard' id={fav} edit={edit} >
            <p className='location'>{city}, {country}</p>
            <img className="weather-icon" src={require(`../images/weahter/${imgCode}.png`)} alt="weather-icon"/>
            <p className='temp'>{temp}<RiCelsiusLine className='temp-icon'/></p>
        </Card>
    );
}

export default FavCard;