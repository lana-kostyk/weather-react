import React from "react";
import "./MDLeft.css";

export default function MDLeft() {
  return (
    <div className="col-6">
      <div className="current-weather">
        <div className="col">
          <div>
            <strong id="temperature-now">14</strong>°
            <span className="active">
              <a id="celsius-link" href="#0" >C</a>
              <span id="dash">|</span>
              <a id="fahrenheit-link" href="#0">F</a>
            </span>
          </div>
          <div className="row">
            <div className="col">
              <span>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="Clear"
                  id="icon"
                />
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col" id="description">
              clear sky
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
