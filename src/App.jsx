import React from "react";
import cars from "./practice";

const [honda, tesla] = cars;
const [hondaTopColour, hondaOtherColour] = honda.coloursByPopularity;

const [teslaTopColour, teslaOtherColour] = tesla.coloursByPopularity;

const {
  topSpeed: hondaTopSpeed,
  zeroToSixty: hondaZeroToSixty
} = honda.speedStats;
const {
  topSpeed: teslaTopSpeed,
  zeroToSixty: teslaZeroToSixty
} = tesla.speedStats;

function App() {
  return (
    <div>
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
