import React, {useState} from "react";
import cloud from './cloudy.jpg';
import rain from './rain.png';
import sunny from './sunny.png';

export default function WeatherApi(){
    const [weather, setWeather] = useState (null)

    React.useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3bf1cb0f4296db1a6d17a26f2884af24')
        .then((response) => response.json())
        .then((data) => setWeather(data))
        .catch((error) => console.log(error))
    })

    let name, temp, feels, weatherA, max, min
    if(weather){
        name = weather.name
        temp = weather.main.temp
        feels = weather.main.feels_like
        weatherA = weather.weather[0].main
        max = weather.main.temp_max
        min = weather.main.temp_min
    }

    else{
        name = ''
        temp = ''
        feels = ''
        weatherA = ''
        max = ''
        min = ''
    }

    let picture
    if(weatherA === "Clouds"){
        picture = <img src={cloud} alt={"clouds"}/>
    }

    else if(weatherA === "Rain"){
        picture = <img src={rain} alt={"rain"}/>
    }

    else {
        picture = <img src={sunny} alt={"sun"}/>
    }




    return(
        <div style={{border: "2px solid grey", width: "50%", margin: "auto", padding: "30px", backgroundColor: "lightcyan"}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                {picture}
                <h4>{JSON.stringify(weatherA)}</h4>
            </div>
            

            <h3>{JSON.stringify(name)}</h3>
            <h5 style={{color: "blueviolet"}}>Temperature:</h5>
            
            <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                <span>{JSON.stringify(Math.round(temp - 273.15))} &deg; C</span>
                <span style={{margin: "0 30px"}}>Max: {JSON.stringify(Math.round(max - 273.15))} &deg; C</span> 
                <span>Min: {JSON.stringify(Math.round(min - 273.15))} &deg; C</span>
            </div>
            
            <h5 style={{color: "blueviolet"}}>Feels Like</h5>
            <span style={{marginLeft: "70px"}}>{JSON.stringify(Math.round(feels- 273.15))} &deg; C</span>
           
            
        
        </div>
    )
}