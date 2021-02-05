import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../../index.css";
import ReactDOM from "react-dom";

import React from "react";
import { Chart } from "primereact/chart";

const ComboChartDemo = () => {
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        borderColor: "#42A5F5",
        borderWidth: 2,
        fill: false,
        data: [50, 25, 12, 48, 56, 76, 42]
      },
      {
        type: "bar",
        label: "Dataset 2",
        backgroundColor: "#66BB6A",
        data: [21, 84, 24, 75, 37, 65, 34],
        borderColor: "white",
        borderWidth: 2
      },
      {
        type: "bar",
        label: "Dataset 3",
        backgroundColor: "#FFA726",
        data: [41, 52, 24, 74, 23, 21, 32]
      }
    ]
  };

  const lightOptions = {
    legend: {
      labels: {
        fontColor: "#495057"
      }
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: "#495057"
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: "#495057"
          }
        }
      ]
    }
  };

  return (
    <div className="card">
      <Chart type="bar" data={chartData} options={lightOptions} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<ComboChartDemo />, rootElement);
