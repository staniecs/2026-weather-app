import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">

        <h1 className="text-capitalize">{props.data.city}</h1>
        <ul>
            <li className="text-capitalize">
                <FormattedDate date={props.data.date} /></li>
            <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="d-flex">
                    <img src={props.data.icon_url} 
                    alt={props.data.description} 
                    className="float-left" />
                    <div className="float-left">
                    <WeatherTemperature  celsius={props.data.temperature}/>
                      
                        </div></div></div>
            <div className="col-6"><ul>
                <li>Pressure: {props.data.pressure} mb</li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind} km/h</li></ul></div>
        </div></div>

)
}