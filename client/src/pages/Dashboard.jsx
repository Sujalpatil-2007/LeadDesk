import { useEffect, useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";

import DashboardCards from "../components/DashboardCards";
import SearchBar from "../components/SearchBar";
import Topbar from "../components/Topbar";
import LeadTable from "../components/LeadTable";
import StatusFilter from "../components/StatusFilter";

function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const getLeads = async () => {
    try {
      setLoading(true);

      const { data } = await api.get(`/api/lead?search=${search}&status=${status}`);

      setLeads(data.leads);
    } catch (error) {
      toast.error("Failed to fetch leads");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLeads();
  }, [search, status]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto p-6">
        <Topbar />

        <DashboardCards leads={leads} />

        <div className="flex flex-col md:flex-row gap-4 my-8">
          <SearchBar search={search} setSearch={setSearch} />

          <StatusFilter status={status} setStatus={setStatus} />
        </div>

        <LeadTable leads={leads} getLeads={getLeads} />
      </div>
    </div>
  );
}

export default Dashboard;
