import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        setWeatherData({
                        ready: true,
            temperature: Math.round(response.data.temperature.current),
            wind: 12,
            pressure: response.data.temperature.pressure,
            humidity: Math.round(response.data.temperature.humidity),
            city: response.data.city,
            icon_url: response.data.condition.icon_url,
            description: response.data.condition.description,
            date: "today"})
            ;
    }
    if (weatherData.ready) {
        return (<div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/></div>
           <div className="col-3"> <input type="submit" value="Search" className="btn btn-primary w-100"/></div></div>
        </form>
        <h1 className="text-capitalize">{weatherData.city}</h1>
        <ul>
            <li className="text-capitalize">{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="d-flex">
                    <img src={weatherData.icon_url} 
                    alt={weatherData.description} 
                    className="float-left" />
                    <div className="float-left">
                        <span className="temperature">{weatherData.temperature}</span>
                        <span className="unit">°C</span>
                        </div></div></div>
            <div className="col-6"><ul>
                <li>Pressure: {weatherData.pressure} mb</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li></ul></div>
        </div>
    </div>);} else {    
        const apiKey="b3b36of7f40tfb2fc5ea76728725e80c";
        
     let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`
     axios.get(apiUrl).then(handleResponse);

        return (<div>The App is loading...</div>)}

    
}