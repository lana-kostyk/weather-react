import React from "react";
import MDLeft from "./MDLeft";
import MDRight from "./MDRight";
import "./MiddleRow.css";

export default function MiddleRow() {
  return (
    <div className="row middle" id="this-day">
      <MDLeft />
      <MDRight />
    </div>
  );
}
