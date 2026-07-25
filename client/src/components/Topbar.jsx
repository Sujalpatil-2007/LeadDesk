import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

function Topbar() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const getAdmin = async () => {
      try {
        const { data } = await api.get("/api/auth/me");
        setAdmin(data.admin);
      } catch (error) {
        console.log(error);
      }
    };

    getAdmin();
  }, []);

  const logout = async () => {
    try {
      await api.post("/api/auth/logout");
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-500">
          Welcome, {admin?.email}
        </p>
      </div>

      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}

export default Topbar;