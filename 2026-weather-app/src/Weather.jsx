import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: Math.round(response.data.temperature.current),
            wind: Math.round(response.data.wind.speed * 3.6),
            pressure: response.data.temperature.pressure,
            humidity: Math.round(response.data.temperature.humidity),
            city: response.data.city,
            icon_url: response.data.condition.icon_url,
            description: response.data.condition.description,
            date: new Date(response.data.time * 1000)})
            ;
    }
    function search() {
        const apiKey="b3b36of7f40tfb2fc5ea76728725e80c";
        let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
        axios.get(apiUrl).then(handleResponse);

    }
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    function handleCityChange(event) {
        setCity(event.target.value);

    }

    if (weatherData.ready) {
        return (<div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange}/></div>
           <div className="col-3"> <input type="submit" value="Search" className="btn btn-primary w-100"/></div></div>
        </form>

        <WeatherInfo data={weatherData}/>
        <WeatherForecast city={weatherData.city}/>

    </div>);} else {    
            search();
            return (<div>The App is loading...</div>)}

    
}