import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api/axios";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return toast.error("Please fill all fields");
    }

    try {
      setLoading(true);

      const { data } = await api.post("/api/auth/login", formData);

      toast.success(data.message);

      navigate("/admin");

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center mb-2">
          Admin Login
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Sign in to manage your leads
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-600"
          />

          <button
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

          <span className="text-sm ">Go back to <a className="text-blue-600 hover:underline" href="/">Home</a></span>

        </form>

      </div>

    </div>
    </>
  );
}

export default Login;