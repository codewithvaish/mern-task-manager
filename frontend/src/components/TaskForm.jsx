import { useEffect, useState } from "react";
import {
  ClipboardList,
  FileText,
  FolderOpen,
  Flag,
  CircleCheckBig,
  CalendarDays,
} from "lucide-react";
import api from "../services/api";

const TaskForm = ({
  fetchTasks,
  fetchStats,
  closeModal,
  task,
  isEditing,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Study",
    priority: "Medium",
    status: "Pending",
    dueDate: "",
  });

  useEffect(() => {
    if (isEditing && task) {
      setFormData({
        title: task.title || "",
        description: task.description || "",
        category: task.category || "Study",
        priority: task.priority || "Medium",
        status: task.status || "Pending",
        dueDate: task.dueDate
          ? task.dueDate.split("T")[0]
          : "",
      });
    }
  }, [task, isEditing]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        await api.put(`/tasks/${task._id}`, formData);
      } else {
        await api.post("/tasks", formData);
      }

      fetchTasks();
      fetchStats();
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 space-y-5"
    >
      {/* Title */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Task Title
        </label>

        <div className="relative">
          <ClipboardList
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            name="title"
            placeholder="Enter task title"
            value={formData.title}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Description
        </label>

        <div className="relative">
          <FileText
            size={18}
            className="absolute left-4 top-4 text-slate-400"
          />

          <textarea
            rows={4}
            name="description"
            placeholder="Write a short description..."
            value={formData.description}
            onChange={handleChange}
            className="w-full resize-none rounded-xl border border-slate-300 py-3 pl-11 pr-4 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>

      {/* Select Fields */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Category */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Category
          </label>

          <div className="relative">
            <FolderOpen
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option>Study</option>
              <option>Work</option>
              <option>Career</option>
              <option>Health</option>
              <option>Shopping</option>
              <option>Personal</option>
              <option>Finance</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Priority */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Priority
          </label>

          <div className="relative">
            <Flag
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Status
          </label>

          <div className="relative">
            <CircleCheckBig
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        {/* Due Date */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Due Date
          </label>

          <div className="relative">
            <CalendarDays
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={closeModal}
          className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          {isEditing ? "Update Task" : "Create Task"}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;