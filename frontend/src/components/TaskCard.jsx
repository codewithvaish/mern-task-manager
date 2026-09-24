import {
  Pencil,
  Trash2,
  CheckCircle2,
  CalendarDays,
  Tag,
  Flag,
  Clock3,
} from "lucide-react";

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
    Pending: "bg-slate-100 text-slate-700",
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
      className={`group rounded-2xl border border-slate-200 border-l-4 ${
        priorityStyle[task.priority].border
      } bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-slate-800">
            {task.title}
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {task.description || "No description provided."}
          </p>
        </div>

        <div
          className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
            priorityStyle[task.priority].badge
          }`}
        >
          <Flag size={13} />
          {task.priority}
        </div>
      </div>

      {/* Meta */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700">
          <Tag size={14} />
          {task.category}
        </div>

        <div
          className={`rounded-full px-3 py-1.5 text-xs font-medium ${
            statusStyle[task.status]
          }`}
        >
          {task.status}
        </div>
      </div>

      {/* Due Date */}
      <div
        className={`mt-4 flex items-center justify-between rounded-xl border px-3 py-2.5 ${
          isOverdue
            ? "border-red-200 bg-red-50"
            : "border-slate-200 bg-slate-50"
        }`}
      >
        <div className="flex items-center gap-2">
          <CalendarDays
            size={16}
            className={
              isOverdue ? "text-red-600" : "text-slate-500"
            }
          />

          <span
            className={`text-sm ${
              isOverdue
                ? "font-semibold text-red-600"
                : "text-slate-600"
            }`}
          >
            {task.dueDate
              ? new Date(task.dueDate).toLocaleDateString()
              : "No Due Date"}
          </span>
        </div>

        {isOverdue && (
          <div className="flex items-center gap-1 text-xs font-semibold text-red-600">
            <Clock3 size={13} />
            Overdue
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-4 flex justify-end gap-2 border-t border-slate-100 pt-4">
        {task.status !== "Completed" && (
          <button
            onClick={() => onComplete(task._id)}
            title="Complete"
            className="rounded-lg bg-green-50 p-2 text-green-600 transition-all duration-200 hover:bg-green-100 hover:scale-105"
          >
            <CheckCircle2 size={17} />
          </button>
        )}

        <button
          onClick={() => onEdit(task)}
          title="Edit"
          className="rounded-lg bg-blue-50 p-2 text-blue-600 transition-all duration-200 hover:bg-blue-100 hover:scale-105"
        >
          <Pencil size={17} />
        </button>

        <button
          onClick={() => onDelete(task._id)}
          title="Delete"
          className="rounded-lg bg-red-50 p-2 text-red-600 transition-all duration-200 hover:bg-red-100 hover:scale-105"
        >
          <Trash2 size={17} />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;