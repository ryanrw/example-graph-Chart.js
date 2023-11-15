import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
  },
};

// const labels = [
//   "10 Nov 23",
//   "11 Nov 23",
//   "12 Nov 23",
//   "13 Nov 23",
//   "14 Nov 23",
//   "15 Nov 23",
//   "16 Nov 23",
// ]; // 7 days

const labels = [
  "01 Nov 23",
  "02 Nov 23",
  "03 Nov 23",
  "04 Nov 23",
  "05 Nov 23",
  "06 Nov 23",
  "07 Nov 23",
  "08 Nov 23",
  "09 Nov 23",
  "10 Nov 23",
  "11 Nov 23",
  "12 Nov 23",
  "13 Nov 23",
  "14 Nov 23",
  "15 Nov 23",
  "16 Nov 23",
  "17 Nov 23",
  "18 Nov 23",
  "19 Nov 23",
  "20 Nov 23",
  "21 Nov 23",
  "22 Nov 23",
  "23 Nov 23",
  "24 Nov 23",
  "25 Nov 23",
  "26 Nov 23",
  "27 Nov 23",
  "28 Nov 23",
  "29 Nov 23",
]; //

export const data = {
  labels,
  datasets: [
    {
      label: "pre-auth",
      data: [
        3, 15, 8, 4, 0, 7, 13, 8, 12, 31, 23, 28, 18, 40, 17, 45, 13, 27, 37,
        16, 12, 47, 25, 14, 19, 38, 33, 11, 22, 46,
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "reversal",
      data: [
        6, 18, 9, 5, 1, 10, 16, 9, 14, 23, 28, 11, 33, 19, 25, 47, 38, 14, 31,
        41, 12, 20, 26, 15, 44, 39, 18, 10, 35, 30, 46,
      ],
      borderColor: "rgb(0, 48, 122)",
      backgroundColor: "rgba(0, 48, 122, 0.5)",
    },
    {
      label: "completed",
      data: [
        11, 20, 7, 3, 2, 12, 17, 7, 13, 30, 16, 40, 13, 14, 25, 22, 23, 19, 18,
        15, 24, 11, 31, 38, 27, 42, 45, 48, 10, 49, 26,
      ],
      borderColor: "rgb(84, 66, 91)",
      backgroundColor: "rgba(84, 66, 91, 0.5)",
    },
  ],
};

export function App() {
  return <Line options={options} data={data} />;
}
