import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";


ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Filler);

const data = {
  labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
  datasets: [
    {
      label: "Foiz",
      data: [20, 50, 70, 30, 40, 60, 90],
      borderColor: "#FFC107",
      backgroundColor: "#FFC107",
      pointBackgroundColor: "#FFC107",
      pointBorderColor: "#FFC107",
      pointRadius: 6,
      pointHoverRadius: 8,
      fill: false,
      tension: 0.3,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // Bu responsivening asosiy kaliti
  plugins: {
    tooltip: {
      enabled: true,
      backgroundColor: "#FFC107",
      titleColor: "#000",
      bodyColor: "#000",
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#FFC107",
        font: {
          size: 16,
          weight: "bold",
        },
      },
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 20,
        color: "#FFC107",
        font: {
          size: 16,
          weight: "bold",
        },
        callback: (value) => value + "%",
      },
      grid: {
        color: "#555",
      },
    },
  },
};

const ChartComponent = () => {
  return (
    <section>
      <div className="Chart__general">
        <h2 className="chart-title text-[50px] text-[#FFC107] font-bold max-[1150px]:text-[30px] max-[800px]:text-[20px] max-[525px]:text-[15px] max-[280px]:text-[10px]">Bizning yillik muvaffaqiyat foizimiz</h2>
        <div className="w-full relative h-[250px] sm:h-[300px] md:h-[400px]">
          <Line data={data} options={options} />
        </div>
      </div>
    </section>
  );
};

export default ChartComponent;
