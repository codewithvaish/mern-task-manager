import { useEffect, useState } from "react";
import {
  FaTasks,
  FaCheckCircle,
  FaPlus,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import ProgressCard from "../components/ProgressCard";
import TaskChart from "../components/TaskChart";
import Modal from "../components/Modal";
import Swal from "sweetalert2";

import api from "../services/api";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalTasks: 0,
    completed: 0,
    pending: 0,
    inProgress: 0,
  });

  const [tasks, setTasks] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("newest");
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  // NEW
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchStats();
    fetchTasks();
  }, [search, category, priority, status, sort]);

  const fetchStats = async () => {
    try {
      const response = await api.get("/tasks/stats");
      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const response = await api.get("/tasks", {
        params: {
          search,
          category,
          priority,
          status,
          sort,
        },
      });

      setTasks(response.data.tasks);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    const result = await Swal.fire({
      title: "Delete Task?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      await api.delete(`/tasks/${id}`);

      fetchTasks();
      fetchStats();

      Swal.fire({
        icon: "success",
        title: "Deleted",
        text: "Task deleted successfully.",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Unable to delete task.",
      });
    }
  };

  const completeTask = async (id) => {
    try {
      await api.patch(`/tasks/${id}/complete`);

      fetchTasks();
      fetchStats();
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATED
  const editTask = (task) => {
    setSelectedTask(task);
    setIsEditing(true);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Dashboard Hero */}

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-8 shadow-xl">

          <div className="absolute -top-10 -right-10 w-44 h-44 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-14 -left-14 w-52 h-52 bg-white/5 rounded-full"></div>

          <div className="relative flex flex-col lg:flex-row justify-between gap-8">

            <div>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                  <FaTasks size={24} className="text-white" />
                </div>

                <div>

                  <h1 className="text-4xl font-bold text-white">
                    Dashboard
                  </h1>

                  <p className="text-indigo-100 mt-1">
                    Organize, prioritize and finish your work efficiently.
                  </p>

                </div>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white/15 backdrop-blur rounded-2xl p-5 min-w-37.5">

                <p className="text-sm text-indigo-100">
                  Total Tasks
                </p>

                <h2 className="text-4xl font-bold text-white mt-2">
                  {stats.totalTasks}
                </h2>

              </div>

              <div className="bg-white/15 backdrop-blur rounded-2xl p-5 min-w-37.5">

                <div className="flex items-center gap-2 text-indigo-100">
                  <FaCheckCircle />
                  <span className="text-sm">
                    Completed
                  </span>
                </div>

                <h2 className="text-4xl font-bold text-white mt-2">
                  {stats.completed}
                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

          <StatsCard
            title="Total Tasks"
            value={stats.totalTasks}
            color="text-indigo-600"
          />

          <StatsCard
            title="Completed"
            value={stats.completed}
            color="text-green-600"
          />

          <StatsCard
            title="Pending"
            value={stats.pending}
            color="text-amber-500"
          />

          <StatsCard
            title="In Progress"
            value={stats.inProgress}
            color="text-violet-600"
          />

        </div>

        {/* Progress & Chart */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

          <ProgressCard
            completed={stats.completed}
            total={stats.totalTasks}
          />

          <TaskChart
            stats={stats}
          />

        </div>

        {/* Search & Filters */}

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 mt-8">

          <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6">

            {/* Left Section */}

            <div className="flex-1 space-y-4">

              <SearchBar
                search={search}
                setSearch={setSearch}
              />

              <FilterBar
                category={category}
                setCategory={setCategory}
                priority={priority}
                setPriority={setPriority}
                status={status}
                setStatus={setStatus}
                sort={sort}
                setSort={setSort}
              />

            </div>

            {/* Right Section */}

            <button
              onClick={() => {
                setSelectedTask(null);
                setIsEditing(false);
                setShowModal(true);
              }}
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-xl shadow-sm transition duration-200 xl:self-end"
            >
              <FaPlus size={15} />
              Add Task
            </button>

          </div>

        </div>

        {/* Tasks */}

        <div className="mt-10">

          <TaskList
            tasks={tasks}
            loading={loading}
            onDelete={deleteTask}
            onComplete={completeTask}
            onEdit={editTask}
          />

        </div>

      </div>

      {showModal && (
        <Modal
          title={isEditing ? "Edit Task" : "Create New Task"}
          onClose={() => setShowModal(false)}
        >
          <TaskForm
            fetchTasks={fetchTasks}
            fetchStats={fetchStats}
            closeModal={() => setShowModal(false)}
            task={selectedTask}
            isEditing={isEditing}
          />
        </Modal>
      )}

    </div>
  );
};

export default Dashboard;