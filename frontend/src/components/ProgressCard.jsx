import {
  FaCheckCircle,
  FaClipboardList,
  FaChartLine,
} from "react-icons/fa";

const ProgressCard = ({ completed, total }) => {
  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  const remaining = total - completed;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 h-full flex flex-col">

      <div className="flex justify-between items-center">

        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Progress
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Keep completing your daily tasks.
          </p>
        </div>

        <div className="text-4xl font-bold text-indigo-600">
          {percentage}%
        </div>

      </div>

      <div className="mt-8">

        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

          <div
            className="h-full bg-indigo-600 rounded-full transition-all duration-700"
            style={{ width: `${percentage}%` }}
          />

        </div>

      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">

        <div className="bg-green-50 rounded-xl p-4">

          <div className="flex items-center gap-2 text-green-600">

            <FaCheckCircle />

            <span className="text-sm font-medium">
              Completed
            </span>

          </div>

          <h3 className="text-2xl font-bold mt-3">
            {completed}
          </h3>

        </div>

        <div className="bg-orange-50 rounded-xl p-4">

          <div className="flex items-center gap-2 text-orange-600">

            <FaClipboardList />

            <span className="text-sm font-medium">
              Remaining
            </span>

          </div>

          <h3 className="text-2xl font-bold mt-3">
            {remaining}
          </h3>

        </div>

      </div>

      <div className="mt-auto flex items-center gap-2 text-gray-500 text-sm pt-6">

        <FaChartLine />

        <span>
          {completed} of {total} tasks completed
        </span>

      </div>

    </div>
  );
};

export default ProgressCard;