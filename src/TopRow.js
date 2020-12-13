import React from "react";
import "./TopRow.css";

export default function TopRow() {
  return (
    <div className="row align-items-center" id="top">
      <div className="col">
        <h2 className="current-city-time">
          <span id="current-city">Krakow </span>
          <span id="current-time">22:18</span>
        </h2>
        <h3 className="current-date" id="current-info">
          Sunday 6 September 2020
        </h3>
      </div>
      <div className="col" id="search">
        <form id="search-form">
          <input
            className="input"
            type="text"
            placeholder="Search for a city"
            autoComplete="off"
            autoFocus="on"
            id="search-city-input"
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
}
