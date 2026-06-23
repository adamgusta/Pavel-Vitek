import { Building2, CircleCheck as CheckCircle2, Truck, Calendar, Users } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle2,
    text: "Disponujeme kapacitami pro velké projekty",
  },
  {
    icon: Calendar,
    text: "Dodržujeme domluvené termíny",
  },
  {
    icon: Truck,
    text: "Kompletní realizace na klíč",
  },
  {
    icon: Users,
    text: "Spolupráce se stavebními firmami",
  },
];

export const CorporateSection = (): JSX.Element => {
  return (
    <section id="pro-firmy" className="w-full bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">
              Pro firmy
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Spolupráce na velkých projektech
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Máte stavební firmu nebo spravujete komerční objekty? Disponujeme
              kapacitami a zkušenostmi pro realizaci rozsáhlých zakázek v
              domluvených termínech.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.text}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <benefit.icon className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-900/20 transition-all hover:bg-sky-700 hover:shadow-xl"
            >
              <Building2 className="h-5 w-5" />
              Poptat B2B spolupráci
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-sky-100/50 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
              <div className="flex h-80 items-center justify-center bg-slate-100 sm:h-96">
                <div className="flex flex-col items-center gap-4 text-slate-400">
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-200">
                    <Building2 className="h-12 w-12 text-slate-400" />
                  </div>
                  <span className="text-sm font-medium">Komerční projekty</span>
                </div>
              </div>
              <div className="border-t border-slate-100 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Ověřený partner pro velké firmy
                    </p>
                    <p className="text-xs text-slate-500">
                      Reference na vyžádání
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
