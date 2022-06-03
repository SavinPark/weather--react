// import axios from "axios";

// const api = {
//     key: process.env.REACT_APP_OPENWEATHERMAP_APPID,
//     base_URL: "https://api.openweathermap.org/data/2.5/"
// }

/* --- FAVCARD --- */
// const [city, setCity] = useState('0');
// const [country, setCountry] = useState('0');
// const [temp, setTemp] = useState(0);
// const [imgCode, setImgCode] = useState('');
/* 오늘 날씨 */
// function getWeather(CITY) {
//   // axios.get(`${api.base_URL}weather?q=${CITY}&appid=${api.key}&units=metric`)
//   fetch(`${api.base_URL}weather?q=${CITY}&appid=${api.key}&units=metric`)
//     .then((response) => {
//       setCity(response.data.name);
//       setCountry(response.data.sys.country);
//       setTemp(response.data.main.temp);
//       setImgCode(response.data.weather[0].icon);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
// }
// getWeather(fav);
// axios.get(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=${process.env.REACT_APP_OPENWEATHERMAP_APPID}&units=metric`)
//   .then((response) => {
//     console.log(response.data)
//   })
//   .catch((error) => {
//     console.log(error);
//   })


/* --- INFOCARD --- */
// const [city, setCity] = useState(null);
// const [country, setCountry] = useState(null);

// const [temp, setTemp] = useState(null);
// const [temp_min, setTemp_min] = useState(null);
// const [temp_max, setTemp_max] = useState(null);
// const [temp_feel, setTemp_feel] = useState(null);

// const [sunrise, setSunrise] = useState(null);
// const [sunset, setSunset] = useState(null);

// const [wind_speed, setWind_speed] = useState(null);
// const [wind_deg, setWind_deg] = useState(null);

// const [humidity, setHumidity] = useState(null);
// const [pressure, setPressure] = useState(null);

// const [rain_1h, setRain_1h] = useState(null);
// const [rain_3h, setRain_3h] = useState(null);
// const [snow_1h, setSnow_1h] = useState(null);
// const [snow_3h, setSnow_3h] = useState(null);

// const [clouds, setClouds] = useState(null);
// const [visibility, setVisibility] = useState(null);

// const [imgCode, setImgCode] = useState(null);
// async function getDetails(keyword)  {
//   // const response = await axios.get(`${api.base_URL}weather?q=${keyword}&appid=${api.key}&units=metric`);
//   await axios.get(`${api.base_URL}weather?q=${keyword}&appid=${api.key}&units=metric`)
//   .then((response) => {
//     // console.log(response.data);
//     // 위치
//     setCity(response.data.name);
//     setCountry(response.data.sys.country);
//     // 온도
//     setTemp(response.data.main.temp);
//     setTemp_min(response.data.main.temp_min);
//     setTemp_max(response.data.main.temp_max);
//     setTemp_feel(response.data.main.feels_like);
//     // 일출/일몰
//     setSunrise(response.data.sys.sunrise);
//     setSunset(response.data.sys.sunset);
//     // 바람
//     setWind_speed(response.data.wind.speed);
//     setWind_deg(response.data.wind.deg);
//     //습도/기압
//     setHumidity(response.data.main.humidity);
//     setPressure(response.data.main.pressure);
//     // 비/눈
//     if (response.data.rain || response.data.snow) {
//       setRain_1h(response.data.rain['1h']);
//       setRain_3h(response.data.rain['3h']);
//       setSnow_1h(response.data.snow['1h']);
//       setSnow_3h(response.data.snow['3h']);
//     }
//     // 구름(흐림정도)/가시거리
//     setClouds(response.data.clouds.all);
//     setVisibility(response.data.visibility);

//     // setImgCode(response.data.weather[0].icon);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
// }

