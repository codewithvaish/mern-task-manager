import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import {
  FaTasks,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
            <FaTasks size={20} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-800">
              Task Manager
            </h1>

            <p className="text-xs text-gray-500">
              Organize your daily work
            </p>
          </div>

        </div>

        {/* User */}

        <div className="flex items-center gap-4">

          <div className="hidden md:flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl">

            <FaUserCircle
              className="text-gray-500"
              size={22}
            />

            <div>

              <p className="text-sm font-semibold text-gray-800">
                {user?.name || "User"}
              </p>

              <p className="text-xs text-gray-500">
                {user?.email}
              </p>

            </div>

          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
          >
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;