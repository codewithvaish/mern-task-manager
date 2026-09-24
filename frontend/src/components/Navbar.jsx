import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  LayoutDashboard,
  LogOut,
  Mail,
} from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const initials =
    user?.name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) || "U";

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg">
            <LayoutDashboard className="text-white" size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-800">
              Task Manager
            </h1>

            <p className="text-xs text-slate-500">
              Organize your daily work
            </p>
          </div>
        </div>

        {/* User Section */}
        <div className="flex items-center gap-3">
          {/* Profile Card */}
          <div className="hidden md:flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
              {initials}
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-800">
                {user?.name || "User"}
              </p>

              <div className="flex items-center gap-1 text-xs text-slate-500">
                <Mail size={13} />
                <span>{user?.email}</span>
              </div>
            </div>
          </div>

          {/* Mobile Avatar */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white md:hidden">
            {initials}
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 font-medium text-white shadow-sm transition-all duration-200 hover:bg-red-600 hover:shadow-md"
          >
            <LogOut size={18} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;