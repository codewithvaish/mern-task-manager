import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      login(response.data.token, response.data.user);

      toast.success(response.data.message);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* Left Section */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white items-center justify-center p-12">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold leading-tight">
            Welcome Back
          </h1>

          <p className="mt-6 text-lg text-blue-100 leading-8">
            Organize your work, manage your tasks, and boost your productivity
            with your personal Task Manager.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✔</span>
              <p>Track daily tasks easily</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">✔</span>
              <p>Manage priorities efficiently</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">✔</span>
              <p>Stay productive every day</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-800">
              Task Manager
            </h2>

            <p className="text-slate-500 mt-3">
              Sign in to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3.5 text-white font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="mt-8 text-center text-slate-600">
            Don't have an account?
            <Link
              to="/register"
              className="ml-2 font-semibold text-blue-600 hover:text-blue-700 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;