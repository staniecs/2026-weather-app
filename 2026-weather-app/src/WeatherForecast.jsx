import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    const [forecast, setForecast] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
 
    if (loaded) {
        console.log(forecast);
        return (

        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                <WeatherForecastDay data={forecast[0]} />
            
             </div>
            </div>
            </div>
        )
 
    } else {       
        let apiKey=`b3b36of7f40tfb2fc5ea76728725e80c`;
        let city = props.city;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;

        axios.get(apiUrl).then(handleResponse);
        return null;}
    
}