import {
  FaTasks,
  FaCheckCircle,
  FaClock,
  FaSpinner,
} from "react-icons/fa";

const StatsCard = ({ title, value, color }) => {
  const icons = {
    "Total Tasks": <FaTasks size={22} />,
    Completed: <FaCheckCircle size={22} />,
    Pending: <FaClock size={22} />,
    "In Progress": <FaSpinner size={22} />,
  };

  return (
    <div className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      {/* Top Row */}
      <div className="flex justify-between items-center">

        <div>
          <p className="text-sm text-gray-500 font-medium">
            {title}
          </p>

          <h2 className={`text-4xl font-bold mt-3 ${color}`}>
            {value}
          </h2>
        </div>

        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${color.replace(
            "text",
            "bg"
          )}/10 ${color}`}
        >
          {icons[title]}
        </div>

      </div>

      {/* Bottom Accent */}
      <div
        className={`absolute bottom-0 left-0 h-1 w-full ${color.replace(
          "text",
          "bg"
        )}`}
      ></div>

    </div>
  );
};

export default StatsCard;