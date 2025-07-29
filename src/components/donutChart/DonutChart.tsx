import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import type { ChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
  data?: number[];
  labels?: string[];
}

const DonutChart: React.FC<DonutChartProps> = ({
  data = [65, 35],
  labels = ["Yes", "No"],
}) => {
  // Chart data configuration
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 205, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 2,
        cutout: "70%", // This creates the donut hole
      },
    ],
  };

  // Chart options with TypeScript typing
  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          padding: 20,
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.parsed;
            const total = context.dataset.data.reduce(
              (acc: number, val: number) => acc + val,
              0
            );
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-64 flex justify-center items-center">
      <div className="w-48 h-48">
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
};

export default DonutChart;
