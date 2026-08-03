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

          boxWidth: 14,

          padding: 20,

          font: {

            size: 13,

          },

        },

      },

    },

  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 h-full flex flex-col">

      <h2 className="text-xl font-semibold text-gray-800">
        Task Overview
      </h2>

      <p className="text-gray-500 text-sm mt-1">
        Distribution of all your tasks.
      </p>

      <div className="flex-1 flex items-center justify-center mt-4">

        <div className="w-72 h-72">

          <Doughnut
            data={data}
            options={options}
          />

        </div>

      </div>

    </div>
  );
};

export default TaskChart;