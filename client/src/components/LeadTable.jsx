import api from "../api/axios";
import toast from "react-hot-toast";
import StatusBadge from "./StatusBadge";

function LeadTable({ leads, getLeads }) {
  const updateStatus = async (id, status) => {
    const confirmUpdate = window.confirm(`Change status to "${status}"?`);

    if (!confirmUpdate) return;

    try {
      const { data } = await api.patch(`/api/lead/${id}/status`, {
        status,
      });

      toast.success(data.message);

      getLeads();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update status");
    }
  };

  if (leads.length === 0) {
    return (
      <div className="py-12 text-center">

    <div className="text-5xl mb-4">
        📭
    </div>

    <h2 className="text-xl font-semibold">
        No Leads Found
    </h2>

    <p className="text-gray-500 mt-2">
        New submissions will appear here.
    </p>

</div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4 text-left">Email</th>
            <th className="px-6 py-4 text-left">Budget</th>
            <th className="px-6 py-4 text-left">Message</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-left">Created</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id} className="border-b hover:bg-slate-50">
              <td className="px-6 py-4">{lead.name}</td>

              <td className="px-6 py-4">{lead.email}</td>

              <td className="px-6 py-4">{lead.budget}</td>

              <td className="px-6 py-4 max-w-xs truncate">{lead.message}</td>

              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <StatusBadge status={lead.status} />

                  <select
                    value={lead.status}
                    onChange={(e) => updateStatus(lead._id, e.target.value)}
                    className="border rounded-lg px-2 py-1"
                  >
                    <option>New</option>
                    <option>Contacted</option>
                    <option>Closed</option>
                  </select>
                </div>
              </td>

              <td className="px-6 py-4">
                {new Date(lead.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadTable;
