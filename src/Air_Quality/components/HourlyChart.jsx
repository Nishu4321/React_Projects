// HourlyChart.js

import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const HourlyChart = ({ hours }) => {
  // Extract labels and data
  const labels = hours.map((hour) =>
    new Date(hour).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  const data = hours.map((_, index) => Math.floor(Math.random() * 100)); // Replace with actual data

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Hourly Data",
        data: data,
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  useEffect(() => {
    // Cleanup the chart on unmount
    return () => {
      const charts = Chart.instances;
      for (let i = 0; i < charts.length; i++) {
        charts[i].destroy();
      }
    };
  }, []);

  return <Line data={chartData} />;
};

export default HourlyChart;
