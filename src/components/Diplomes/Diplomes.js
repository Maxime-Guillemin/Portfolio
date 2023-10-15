import React from "react";
import { Timeline } from "antd";

import "./Diplomes.css";

function Diplomes() {
  return (
    <div className="mainContainer">
      <Timeline
        mode="alternate"
        items={[
          {
            label: " 2016 - 2019",
            children: "Baccalauréat STI2D Laon",
            color: "#1554ad",
          },
          {
            label: "2019 - 2021",
            children: "DUT Informatique Amiens ",
            color: "#3c8618",
          },
          {
            label: "2021-2022",
            children: `Licence Pro RGI Amiens  `,
            color: "#3c8618",
          },
          {
            label: "2022-2024",
            children: "Master MIAGE Amiens  ",
            color: "#a02669",
          },
        ]}
      />
    </div>
  );
}

export default Diplomes;
