"use client";

import React from "react";
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
import { data, options } from "@/components/LineWidget";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const DataChart = ({
  labels,
  solidLine1Data,
  solidLine2Data,
  solidLine3Data,
  dashedLine1Data,
  dashedLine2Data,
  dashedLine3Data,
  data,
  options,
}: {
  labels: any;
  solidLine1Data: any;
  solidLine2Data: any;
  solidLine3Data: any;
  dashedLine1Data: any;
  dashedLine2Data: any;
  dashedLine3Data: any;
  data: any;
  options: any;
}) => {
  //   const labels = [
  //     "Q1 2022",
  //     "Q1 2023",
  //     "Q2 2022",
  //     "Q2 2023",
  //     "Q3 2022",
  //     "Q3 2023",
  //     "Q4 2022",
  //     "Q4 2023",
  //     "Q1 2024",
  //     "Q2 2024",
  //     "Q3 2024",
  //     "Q4 2024",
  //     "Q1 2025",
  //     "Q2 2025",
  //     "Q3 2025",
  //     "Q4 2025",
  //     "Q1 2026",
  //     "Q2 2026",
  //   ];
  //   const solidLine1Data = [
  //     750000,
  //     550000,
  //     580000,
  //     540000,
  //     440000,
  //     720000,
  //     700000,
  //     600000,
  //     ,
  //   ];
  //   const solidLine2Data = [, , , , 720000, 690000, 630000, 650000, 580000];
  //   const solidLine3Data = [
  //     530000, 550000, 570000, 590000, 610000, 630000, 650000, 670000, 690000,
  //   ];
  //   const dashedLine1Data = [
  //     ,
  //     ,
  //     ,
  //     ,
  //     ,
  //     ,
  //     ,
  //     ,
  //     ,
  //     640000,
  //     640000,
  //     550000,
  //     520000,
  //     590000,
  //     610000,
  //     630000,
  //     590000,
  //     570000,
  //   ];
  //   const dashedLine2Data = [
  //     ,
  //     ,
  //     ,
  //     ,
  //     ,
  //     ,
  //     ,
  //     ,
  //     ,
  //     ,
  //     ,
  //     550000,
  //     500000,
  //     590000,
  //     ,
  //     ,
  //     ,
  //     ,
  //   ];
  //   const dashedLine3Data = [
  //     ,
  //     ,
  //     ,
  //     ,
  //     ,
  //     ,
  //     ,
  //     ,
  //     400000,
  //     420000,
  //     450000,
  //     420000,
  //     430000,
  //     440000,
  //     460000,
  //     440000,
  //     570000,
  //     590000,
  //   ];

  //   const data = {
  //     labels: labels,
  //     datasets: [
  //       {
  //         label: "AI FORECAST",
  //         data: solidLine1Data,
  //         borderColor: "rgba(255, 99, 132, 1)", // Red color for solid line
  //         borderWidth: 1,
  //         fill: false,
  //         pointRadius: 0,
  //       },
  //       {
  //         label: "FINAL FORECAST",
  //         data: solidLine2Data,
  //         borderColor: "rgba(54, 162, 235, 1)", // Blue color for solid line
  //         borderWidth: 1,
  //         fill: false,
  //         pointRadius: 0,
  //       },
  //       {
  //         label: "CONSUMPTION",
  //         data: solidLine3Data,
  //         borderColor: "rgba(75, 192, 192, 1)", // Green color for solid line
  //         borderWidth: 1,
  //         fill: false,
  //         pointRadius: 0,
  //       },
  //       {
  //         label: "Ai Forecast",
  //         data: dashedLine1Data,
  //         borderColor: "rgba(255, 99, 132, 1)", // Red color for dashed line
  //         borderWidth: 1,
  //         borderDash: [5, 5], // Define a dashed line
  //         fill: false,
  //         pointRadius: 0,
  //       },
  //       {
  //         label: "Final Forecast",
  //         data: dashedLine2Data,
  //         borderColor: "rgba(54, 162, 235, 1)", // Blue color for dashed line
  //         borderWidth: 1,
  //         borderDash: [5, 5], // Define a dashed line
  //         fill: false,
  //         pointRadius: 0,
  //       },
  //       {
  //         label: "Previous Quarter Final Forecast",
  //         data: dashedLine3Data,
  //         borderColor: "rgba(75, 192, 192, 1)", // Green color for dashed line
  //         background: "rgba(75, 192, 192, 1)", // Green color for dashed line
  //         borderWidth: 1,
  //         borderDash: [5, 5], // Define a dashed line
  //         fill: false,
  //         pointRadius: 0,
  //       },
  //     ],
  //   };

  //   const options = {
  //     responsive: true,
  //     showLines: true,
  //     axis: {
  //       color: "#fff",
  //     },
  //     scales: {
  //       x: {
  //         id: "x-axis",
  //         display: true,
  //         color: "#fff",
  //         grid: {
  //           display: true,
  //           lineWidth: 2,
  //           tickColor: "#fff",
  //           drawOnChartArea: true,
  //         },
  //         ticks: {
  //           padding: 10,
  //           minRotation: 0,
  //           maxRotation: 0,
  //         },
  //       },
  //       y: {
  //         beginAtZero: true,
  //         max: 900000,
  //         display: true,
  //         grid: {
  //           display: true,
  //           lineWidth: 1,
  //           tickColor: "#fff",
  //           drawOnChartArea: true,
  //         },
  //         ticks: {
  //           callback: function (value: any) {
  //             return value / 1000;
  //           },
  //           padding: 10,
  //         },
  //         title: {
  //           display: true,
  //           padding: 20,
  //           text: "CONSUMPTION, (FT: IN THOUSANDS)",
  //         },
  //       },
  //     },
  //     plugins: {},
  //   };

  return (
    <div className="min-w-lg">
      <Line data={data} options={options} />
    </div>
  );
};
