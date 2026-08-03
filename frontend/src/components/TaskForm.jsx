import { useEffect, useState } from "react";
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
      className="space-y-4 mt-5"
    >
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
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

      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={closeModal}
          className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          {isEditing ? "Update Task" : "Create Task"}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;