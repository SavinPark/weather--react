import React, { useState, useEffect } from 'react';
import { RiCelsiusLine } from "react-icons/ri";


function DetailsCard ({keyword}) {

  const [rain, setRain] = useState(false);
  const [snow, setSnow] = useState(false);

  
  return (
    <div className='details-container'>
      <p className=''>최저기온 : temp<RiCelsiusLine className='temp-icon'/></p>
      <p className=''>최고기온 : temp<RiCelsiusLine className='temp-icon'/></p>
      <p className=''>체감온도 : temp<RiCelsiusLine className='temp-icon'/></p>
      <br/>
      <p className=''>일출 : temp<RiCelsiusLine className='temp-icon'/></p>
      <p className=''>일몰 : temp<RiCelsiusLine className='temp-icon'/></p>
      <br/>
      <p className=''>풍향 :  <span className='unit'>degrees</span></p>
      <p className=''>풍속 : <span className='unit'>meter/sec</span></p>
      <br/>
      <p className=''>기압 : <span className='unit'>hPa</span></p>
      <p className=''>습도 : <span className='unit'>%</span></p>
      <br/>
      { !rain && (
        <p className=''>비 : <span className='unit'>mm</span></p>
      )}
      { !snow && (
        <p className=''>눈 : <span className='unit'>mm</span></p>
      )}
    </div>
  );
}

export default DetailsCard;