const stats = [
  { icon: "group", value: "15K+", label: "Investors" },
  { icon: "account_balance_wallet", value: "$12.8M+", label: "Total Value Locked" },
  { icon: "auto_awesome", value: "7", label: "Curated Buckets" },
  { icon: "show_chart", value: "+21.3%", label: "Avg. 1Y Return" },
];

export function StatsBar() {
  return (
    <section className="reveal py-8 border-y border-outline-variant/30 bg-white">
      <div className="max-w-container-max mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">{stat.icon}</span>
            </div>
            <div>
              <div className="font-bold text-xl">{stat.value}</div>
              <div className="text-xs text-on-surface-variant uppercase font-bold">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
