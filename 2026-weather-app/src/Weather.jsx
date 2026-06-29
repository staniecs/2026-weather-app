import React from "react";
import "./Weather.css"

export default function Weather() {
    return (<div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" /></div>
           <div className="col-3"> <input type="submit" value="Search" className="btn btn-primary"/></div></div>
        </form>
        <h1>Wroclaw</h1>
        <ul>
            <li>Monday 9:00</li>
            <li>Mostly Sunny</li>
        </ul>
        <div className="row">
            <div className="col-6">(sunshine) 6 deg.</div>
            <div className="col-6"><ul>
                <li>Precipitation</li>
                <li>Humidity</li>
                <li>Wind</li></ul></div>
        </div>
    </div>)
}