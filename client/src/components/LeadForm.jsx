import { useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";

function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
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

    const { name, email, budget, message } = formData;

    if (!name || !email || !budget || !message) {
      return toast.error("Please fill all fields");
    }

    try {
      setLoading(true);

      const { data } = await api.post("/api/lead", formData);

      toast.success(data.message);

      setFormData({
        name: "",
        email: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-2xl p-8 space-y-5"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Full Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
      />

      <select
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-3"
      >
        <option value="">Select Budget</option>
        <option>Under ₹10,000</option>
        <option>₹10,000 - ₹25,000</option>
        <option>₹25,000 - ₹50,000</option>
        <option>₹50,000 - ₹1,00,000</option>
        <option>Above ₹1,00,000</option>
      </select>

      <textarea
        rows="4"
        name="message"
        placeholder="Tell us about your project..."
        value={formData.message}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
      >
        {loading ? "Submitting..." : "Submit Lead"}
      </button>
    </form>
  );
}

export default LeadForm;