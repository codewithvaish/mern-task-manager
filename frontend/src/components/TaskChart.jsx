import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const TaskChart = ({ stats }) => {
  const total =
    stats.completed +
    stats.pending +
    stats.inProgress;

  const data = {
    labels: [
      "Completed",
      "Pending",
      "In Progress",
    ],

    datasets: [
      {
        data: [
          stats.completed,
          stats.pending,
          stats.inProgress,
        ],

        backgroundColor: [
          "#22c55e",
          "#f59e0b",
          "#3b82f6",
        ],

        borderWidth: 0,
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    cutout: "72%",

    plugins: {
      legend: {
        position: "bottom",

        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 10,
          padding: 24,

          font: {
            size: 13,
          },
        },
      },

      tooltip: {
        padding: 12,
      },

      animation: {
        animateRotate: true,
        animateScale: true,
        duration: 1000,
      },
    },
  };

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-slate-800">
          Task Overview
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Distribution of your tasks by status.
        </p>
      </div>

      {/* Chart */}
      <div className="relative mt-6 flex flex-1 items-center justify-center">
        <div className="relative h-64 w-64 sm:h-72 sm:w-72">
          <Doughnut
            data={data}
            options={options}
          />

          {/* Center Text */}
          <div className="pointer-events-none absolute inset-0 flex -translate-y-8 flex-col items-center justify-center">            <span className="text-3xl font-bold text-slate-800">
            {total}
          </span>

            <span className="text-sm text-slate-500">
              Total Tasks
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskChart;