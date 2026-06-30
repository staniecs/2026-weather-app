import React from "react";
import "./Weather.css"

export default function Weather() {
    return (<div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/></div>
           <div className="col-3"> <input type="submit" value="Search" className="btn btn-primary w-100"/></div></div>
        </form>
        <h1>Wroclaw</h1>
        <ul>
            <li>Monday 9:00</li>
            <li>Mostly Sunny</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="d-flex">
                    <img src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg" 
                    alt="cloudy" 
                    className="float-left" />
                    <div className="float-left">
                        <span className="temperature">28</span>
                        <span className="unit">°C</span>
                        </div></div></div>
            <div className="col-6"><ul>
                <li>Precipitation</li>
                <li>Humidity</li>
                <li>Wind</li></ul></div>
        </div>
    </div>)
}