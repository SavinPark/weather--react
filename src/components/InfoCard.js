import React, { useState, useEffect } from 'react';
import { RiCelsiusLine } from "react-icons/ri";

import img_01d from '../images/weahter/01d.png';


function InfoCard ({keyword}) {

  
    
  return (
    <div className='info-container'>
      <img className="info-weather-icon" src={img_01d} alt="weather-icon"/>
      <div className='info-inner'>
        <p className='info-location'>{keyword}, country</p>
        <p className='info-temp'>temp<RiCelsiusLine className='temp-icon'/></p>
      </div>
    </div>
  );
}

export default InfoCard;