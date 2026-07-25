function DashboardCards({ leads }) {
  const total = leads.length;
  const newLeads = leads.filter((lead) => lead.status === "New").length;
  const contacted = leads.filter(
    (lead) => lead.status === "Contacted"
  ).length;
  const closed = leads.filter(
    (lead) => lead.status === "Closed"
  ).length;

  const cards = [
    {
      title: "Total Leads",
      value: total,
      bg: "bg-blue-600",
    },
    {
      title: "New",
      value: newLeads,
      bg: "bg-sky-500",
    },
    {
      title: "Contacted",
      value: contacted,
      bg: "bg-yellow-500",
    },
    {
      title: "Closed",
      value: closed,
      bg: "bg-green-600",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`${card.bg} text-white rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300`}
        >
          <h3 className="text-lg">{card.title}</h3>

          <p className="text-4xl font-bold mt-4">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;