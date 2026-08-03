import {
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaCalendarAlt,
  FaTag,
  FaFlag,
} from "react-icons/fa";

const TaskCard = ({
  task,
  onDelete,
  onComplete,
  onEdit,
}) => {
  const priorityStyle = {
    High: {
      badge: "bg-red-100 text-red-700",
      border: "border-l-red-500",
    },
    Medium: {
      badge: "bg-amber-100 text-amber-700",
      border: "border-l-amber-500",
    },
    Low: {
      badge: "bg-emerald-100 text-emerald-700",
      border: "border-l-emerald-500",
    },
  };

  const statusStyle = {
    Pending: "bg-gray-100 text-gray-700",
    "In Progress": "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
  };

  const dueDate = task.dueDate
    ? new Date(task.dueDate)
    : null;

  const today = new Date();

  const isOverdue =
    dueDate &&
    dueDate < today &&
    task.status !== "Completed";

  return (
    <div
      className={`bg-white rounded-2xl border border-gray-200 border-l-4 ${
        priorityStyle[task.priority].border
      } shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6`}
    >
      {/* Header */}

      <div className="flex justify-between items-start gap-5">

        <div className="flex-1">

          <h2 className="text-xl font-bold text-gray-800">
            {task.title}
          </h2>

          <p className="mt-2 text-gray-500 leading-6">
            {task.description || "No description provided."}
          </p>

        </div>

        <div
          className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${
            priorityStyle[task.priority].badge
          }`}
        >
          <FaFlag size={12} />
          {task.priority}
        </div>

      </div>

      {/* Meta */}

      <div className="flex flex-wrap items-center gap-3 mt-6">

        <div className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-2 rounded-full text-sm">
          <FaTag size={12} />
          {task.category}
        </div>

        <div
          className={`px-3 py-2 rounded-full text-sm font-medium ${
            statusStyle[task.status]
          }`}
        >
          {task.status}
        </div>

        <div
          className={`ml-auto flex items-center gap-2 text-sm ${
            isOverdue
              ? "text-red-600 font-semibold"
              : "text-gray-500"
          }`}
        >
          <FaCalendarAlt />

          {task.dueDate
            ? new Date(task.dueDate).toLocaleDateString()
            : "No Due Date"}
        </div>

      </div>

      <div className="border-t border-gray-100 my-5"></div>

      {/* Footer */}

      <div className="flex justify-end gap-3">

        {task.status !== "Completed" && (
          <button
            onClick={() => onComplete(task._id)}
            className="w-10 h-10 rounded-xl bg-green-50 hover:bg-green-100 text-green-600 flex items-center justify-center transition"
            title="Complete"
          >
            <FaCheckCircle />
          </button>
        )}

        <button
          onClick={() => onEdit(task)}
          className="w-10 h-10 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center transition"
          title="Edit"
        >
          <FaEdit />
        </button>

        <button
          onClick={() => onDelete(task._id)}
          className="w-10 h-10 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 flex items-center justify-center transition"
          title="Delete"
        >
          <FaTrash />
        </button>

      </div>
    </div>
  );
};

export default TaskCard;