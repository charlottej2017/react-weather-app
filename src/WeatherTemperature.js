import React, { useState } from "react";

export default function weatherTemperature(props) {
  const [unit, Setunit] = useState("celsius");
  if (unit === "celsius") {
    return (
      <div className="weatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          {" "}
          C° | <a href="/">F°</a>{" "}
        </span>
      </div>
    );
  } else {
    return "F";
  }
}
