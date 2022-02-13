import React from "react";
import cars from "./practice";

const [honda, tesla] = cars.map((x) => x);
const [hondaTopColour, hondaOtherColour] = honda.coloursByPopularity.map(
  (x) => x
);

const [teslaTopColour, teslaOtherColour] = tesla.coloursByPopularity.map(
  (x) => x
);

const hondaTopSpeed = honda.speedStats.topSpeed;
const teslaTopSpeed = tesla.speedStats.topSpeed;

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
