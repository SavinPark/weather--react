import React, { useState } from 'react';
import './scss/style.scss';
import styled, { createGlobalStyle } from 'styled-components';
import { MdSearch, MdPlaylistAdd, MdClose, MdEdit, MdEditOff, MdRemove } from 'react-icons/md';

import axios from 'axios';

/* Components */
import FavCard from './components/FavCard.js';
import InfoCard from './components/InfoCard.js';
import DetailsCard from './components/DetailsCard.js';
import HourlyCard from './components/HourlyCard.js';

const GlobalStyle = createGlobalStyle`
  *{  
    box-sizing: border-box;
  }
  html {
    font-size : 10px;
  }
  body {
    width: 100%;
    margin: 0;
    color: #000;
  }
`;
const Search = styled.input`
  width: 36rem;
  height: 4rem;
  padding: 2rem;
  background: #fff;
  border-radius: 2rem;
  border: none;
  outline: none;
`;
const EditBtn = styled.div`
  width: 6rem;
  height: 6rem;
  background: #fff;
  border-radius: 3rem;
  &:hover {
    color: aqua;
  }
`
const CancelBtn = styled.div`
  width: 6rem;
  height: 6rem;
  background: #fff;
  border-radius: 3rem;
  &:hover {
    color: red;
  }
`
const DeleteBtn = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  color: #000;
  background: #fff;
  border-radius: 50%;
  &:hover {
    color: #fff;
    background: red;
  }
`
const SearchPopup = styled.div`
  width: 36rem;
  height: 64rem;
  padding: 2rem;
  color: #000;
  background: #fff;
  border-radius: 1rem;
`;

function App() {
  // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=${process.env.REACT_APP_OPENWEATHERMAP_APPID}&units=metric`)
  // .then((response) => {
  //   console.log(response.data)
  // })
  // .catch((error) => {
  //   console.log(error);
  // })

  // 즐겨찾기 목록
  const [favlist, setFavlist] = useState(['gwacheon', 'seoul', 'london', 'tokyo']);
  
  // 수정
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => setEdit(!edit);
  
  // 삭제
  const onDelete = (event) => {
    setFavlist(favlist.filter(fav => fav !== event.target.getAttribute('fav')));
  }
  
  // 검색 팝업창
  const [popup, setPopup] = useState(false);
  const togglePopup = () => {
    setPopup(!popup);
    if (detailsView === true) {
      setDetailsView(false);
    }
  }

  // 검색
  const [keyword, setKeyword] = useState('');
  const onSearch = () => {
      const $keyword = document.querySelector('.Search').value;
      if ($keyword === '') {
        alert('도시 이름을 입력하세요.')
      } else {
        setKeyword($keyword);
        setPopup(true);
      }
      document.querySelector('.Search').value = null;
  }
  const onKeyPressSearch = () => {
    if (window.event.keyCode === 13) {
      onSearch();
    }
  }

  // 즐겨찾기 추가
  const addFav = () => {
    if (favlist.includes(keyword) === false) {
      setFavlist([...favlist, keyword]);
    } else {
      alert('이미 즐겨찾기에 등록되어 있습니다.');
    }
    // console.log(favlist)
    setPopup(false);
  }

  // 즐겨찾기 상세보기
  const [detailsView, setDetailsView] = useState(false);
  const showDetails = (event) => {
    if (!edit) {
      const $key = event.target.parentNode.getAttribute('id')
      console.log(`즐겨찾기 상세보기: ${$key}`)
      if ($key) {
        setPopup(true);
        setDetailsView(true);
        setKeyword($key);
      }
    }
  }

  // 검색 & 즐겨찾기 submenu
  const [detailsOn, setDetailsOn] = useState(true);
  const [hourlyOn, setHourlyOn] = useState(false);
  function detailsCardOn() {
    setDetailsOn(true);
    setHourlyOn(false);
    document.querySelector('#menu-details').classList.add('active');
    document.querySelector('#menu-hourly').classList.remove('active');
  }
  function hourlyCardOn() {
    setHourlyOn(true);
    setDetailsOn(false);
    document.querySelector('#menu-hourly').classList.add('active');
    document.querySelector('#menu-details').classList.remove('active');
  }


  return (
    <div className="App">
      <GlobalStyle />
      <div className="container">
        <div className='search-container'>
          <Search className="Search" placeholder='Search' onKeyPress={onKeyPressSearch}/>
          <MdSearch className='search-icon' onClick={onSearch}/>
        </div>
        <div className='fav-container'>
          { favlist.map(fav => {
            return <div className='favcard-group' key={fav} id={fav} onClick={showDetails}>
                      <FavCard fav={fav} edit={edit}/> 
                      { edit && (<DeleteBtn className='delete-btn' onClick={onDelete}>
                                  <MdRemove className='delete-icon' fav={fav}/>
                                </DeleteBtn>)
                      }
                   </div>
            }) 
          }
        </div>
        { !edit && (<EditBtn className='edit-btn' onClick={toggleEdit}><MdEdit className='edit-icon'/></EditBtn>) }
        { edit && (<CancelBtn className='cancel-btn' onClick={toggleEdit}><MdEditOff className='cancel-icon'/></CancelBtn>) }
        { popup && (
          <SearchPopup className='search-popup'>
            <MdClose className='popup-close' onClick={togglePopup}/>
            <InfoCard className='info-card' keyword={keyword}/>
            {!detailsView && (<MdPlaylistAdd className='search-add' onClick={addFav}/>)}
            <div className='menu-tab'>
              <div className='menu active' id='menu-details' onClick={detailsCardOn}>Details<i className='bx bxs-message-detail'></i></div>
              <div className='menu' id='menu-hourly' onClick={hourlyCardOn}>Hourly<i className='bx bxs-time-five'></i></div>
            </div>
            {( detailsOn && <DetailsCard className='details-card' keyword={keyword}/> )}
            {( hourlyOn && <HourlyCard className='hourly-card' keyword={keyword}/> )}
          </SearchPopup>
        )}
      </div>
    </div>
  );
}

export default App;
