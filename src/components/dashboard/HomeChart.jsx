"use client";

import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "This month",
    },
  },
  elements: {
    line: {
      tension: 0.3,
    },
  },
};

const HomeChart = () => {
  const [days, setDays] = useState([]);

  const income = [10, 20, 40, 60, 50, 80, 100];
  const outgoing = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 16, 19, 30, 50, 60];

  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  function GFG_Fun() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const TotalDays = daysInMonth(month, year);
    let arr = [];
    for (let i = 1; i <= TotalDays; i++) {
      arr.push(i);
    }
    setDays(arr);
  }

  useEffect(() => {
    GFG_Fun();
  }, []);

  const labels = days;

  const data = {
    labels,
    datasets: [
      {
        label: "Sell",
        data: income,
        borderColor: "rgb(16 185 129)",
        backgroundColor: "rgb(120 234 196) ",
      },
      {
        label: "User",
        data: outgoing,
        borderColor: "rgb(219 0 91)",
        backgroundColor: "orange",
      },
    ],
  };

  return (
    <div className="">
      <Line options={options} data={data} />
    </div>
  );
};

export default HomeChart;
