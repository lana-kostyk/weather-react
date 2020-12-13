import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopRow from "./TopRow";
import MiddleRow from "./MiddleRow";



export default function App() {
  return (
    <div>
      <div className="App">
        <TopRow />
      <MiddleRow />
      </div>
      <footer>
    Open-source code by {" "}
    <a hRef="https://github.com/lamoureuxmarie/react-weather-app" Target="_blank">Svitlana Kostyk</a>
    </footer>
    </div>
  );
}



