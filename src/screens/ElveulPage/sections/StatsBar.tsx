import { Clock, Users, Building2 } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "30+",
    label: "Let zkušeností",
    description: "Na trhu od roku 1993",
  },
  {
    icon: Users,
    value: "Stovky",
    label: "Hotových zakázek",
    description: "Koupelny a rozvody",
  },
  {
    icon: Building2,
    value: "B2B",
    label: "Partner pro firmy",
    description: "Velké i malé projekty",
  },
];

export const StatsBar = (): JSX.Element => {
  return (
    <section className="relative z-10 -mt-16 w-full px-6">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group flex items-center gap-4 rounded-xl px-6 py-5 transition-colors hover:bg-slate-50"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors group-hover:bg-sky-100">
              <stat.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-lg font-bold text-slate-800">{stat.value}</p>
              <p className="text-sm font-medium text-slate-700">{stat.label}</p>
              <p className="text-xs text-slate-400">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
