import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api/axios";

function Topbar() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await api.post("/auth/logout");

      toast.success("Logged out");

      navigate("/login");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">
        Admin Dashboard
      </h1>

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