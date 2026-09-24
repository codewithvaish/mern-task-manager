import { ClipboardList } from "lucide-react";
import TaskCard from "./TaskCard";

const TaskList = ({
  tasks,
  loading,
  onDelete,
  onComplete,
  onEdit,
}) => {
  if (loading) {
    return (
      <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="relative">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600"></div>
        </div>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm sm:px-10">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
          <ClipboardList
            size={36}
            className="text-blue-600"
          />
        </div>

        <h2 className="text-xl font-semibold text-slate-800 sm:text-2xl">
          No Tasks Found
        </h2>

        <p className="mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
          Try changing your filters or create your first task
          to start managing your work efficiently.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-5">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={onDelete}
          onComplete={onComplete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;