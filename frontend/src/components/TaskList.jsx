import { FaClipboardList } from "react-icons/fa";
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
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm py-20 flex justify-center">

        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>

      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm py-16 px-8 flex flex-col items-center">

        <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-5">
          <FaClipboardList
            size={28}
            className="text-indigo-600"
          />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">
          No Tasks Found
        </h2>

        <p className="text-gray-500 mt-2 text-center max-w-md">
          Try changing your filters or create your first task.
        </p>

      </div>
    );
  }

  return (
    <div className="grid gap-5">
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