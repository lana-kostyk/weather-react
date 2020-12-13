import React from "react";
import "./MDRight.css";

export default function MDRight() {
  return (
    <div className="col-6">
      <div className="current-details">
        <div className="row">
          <div className="col">humidity:</div>
          <div className="col">
            <span id="humidity">90</span>%
          </div>
        </div>
        <div className="row">
          <div className="col">wind:</div>
          <div className="col">
            <span id="wind">2</span> km/hr
          </div>
        </div>
        <div className="row">
          <div className="col">feels like:</div>
          <div className="col">
            <span id="feels-like">0</span> deg.
          </div>
        </div>
      </div>
    </div>
  );
}
