import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import { toast } from "react-toastify";
import api from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/register", formData);

      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* Left Section */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white items-center justify-center p-12">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold leading-tight">
            Create Your Account
          </h1>

          <p className="mt-6 text-lg text-blue-100 leading-8">
            Join Task Manager and organize your work with a clean,
            fast and modern productivity dashboard.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/15 flex items-center justify-center">
                <User size={20} />
              </div>
              <span>Create your personal workspace</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/15 flex items-center justify-center">
                <Mail size={20} />
              </div>
              <span>Manage tasks from anywhere</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/15 flex items-center justify-center">
                <Lock size={20} />
              </div>
              <span>Secure authentication system</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 md:p-10 shadow-2xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-800">
              Create Account
            </h2>

            <p className="mt-3 text-slate-500">
              Join Task Manager today
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >
            {/* Name */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-700 hover:shadow-xl"
            >
              Create Account
            </button>
          </form>

          <p className="mt-8 text-center text-slate-600">
            Already have an account?

            <Link
              to="/"
              className="ml-2 font-semibold text-blue-600 hover:text-blue-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;