import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState(`celsius`);
    function convertToF(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }
    if (unit == "celsius") {
    return (
        <div className="WeatherTemperature">
              <span className="temperature">{props.celsius}</span>
                        <span className="unit">°C | <a href="/" onClick={convertToF}>°F</a></span>
        </div>
    );}  else {return (<div className="WeatherTemperature">
              <span className="temperature">{props.celsius}</span>
                        <span className="unit"><a href="/" onClick={convertToF}>°C</a> | °F</span>
        </div>)}
}