import {
  Droplets,
  Flame,
  Bath,
  ShowerHead,
  ArrowRight,
  Construction,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Rozvody vody a kanalizace",
    description:
      "Kompletní dodávky a montáže vnitřních i venkovních rozvodů vody a odpadů.",
  },
  {
    icon: Flame,
    title: "Topenářské práce",
    description:
      "Instalace a údržba topných systémů a stoupaček pro bytové i komerční objekty.",
  },
  {
    icon: Bath,
    title: "Rekonstrukce koupelen",
    description:
      "Kompletní proměny na klíč od návrhu po montáž včetně obkladů a zařizovacích předmětů.",
  },
  {
    icon: ShowerHead,
    title: "Montáž sanity",
    description:
      "Profesionální montáž umyvadel, WC, sprchových koutů a baterií.",
  },
  {
    icon: Construction,
    title: "Domovní přípojky",
    description:
      "Realizace venkovních přípojek a inženýrských sítí pro novostavby i rekonstrukce.",
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section id="sluzby" className="w-full bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">
            Naše služby
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Kompletní instalatérské a topenářské služby
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Od drobných oprav po kompletní realizace rozvodů pro velké firmy.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-sky-100 hover:shadow-lg hover:shadow-sky-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-medium text-sky-600 opacity-0 transition-opacity group-hover:opacity-100">
                <span>Více informací</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
