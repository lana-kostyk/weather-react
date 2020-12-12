import React from "react";
import axios from 'axios';

export default function Weather (props) {
    function handleResponse(response) {
     alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}°C`)   
    } 
    let units = "metric";
    let apiKey = "b4d8edf093296b9aa93443470450c3f6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return (
        <h1>Weather</h1>
    );
};