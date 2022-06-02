import React, { useState } from 'react';
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

    return (
        <Card className='favcard' id={fav} edit={edit} >
            <p className='location'>{fav}, country</p>
            <img className="weather-icon" src={img_01d} alt="weather-icon"/>
            <p className='temp'>temp<RiCelsiusLine className='temp-icon'/></p>
        </Card>
    );
}

export default FavCard;