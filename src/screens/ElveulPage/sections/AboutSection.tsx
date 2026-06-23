import { Award, Calendar, User } from "lucide-react";

export const AboutSection = (): JSX.Element => {
  return (
    <section id="o-nas" className="w-full bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-sky-50 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-xl">
                <div className="flex h-80 items-center justify-center sm:h-96">
                  <div className="flex flex-col items-center gap-4 text-slate-400">
                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-200">
                      <User className="h-12 w-12 text-slate-400" />
                    </div>
                    <span className="text-sm font-medium">Pavel Vítek</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl border border-slate-100 bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Založeno</p>
                    <p className="text-sm font-bold text-slate-800">1993</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">
              O nás
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Přes 30 let zkušeností v oboru
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Jsem Pavel Vítek, živnostník specializující se na instalatérské a
              topenářské práce. Od roku 1993 realizuji zakázky pro běžné
              domácnosti i velké stavební firmy. Každý projekt řeším s maximální
              pečlivostí a odpovědností.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Ať už potřebujete novou koupelnu, rekonstrukci rozvodů nebo
              spolehlivého partnera pro velkou zakázku, jsem tu pro vás.
            </p>

            <div className="mt-10 rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Award className="h-5 w-5 text-sky-600" />
                Fakturační údaje
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">Obchodní název</span>
                  <span className="font-medium text-slate-800">Pavel Vítek</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">Sídlo</span>
                  <span className="font-medium text-slate-800 text-right">
                    Na Spálence 523/40, Ústí nad Labem
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">IČO</span>
                  <span className="font-medium text-slate-800">44515693</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">Status</span>
                  <span className="font-medium text-slate-800">
                    Fyzická osoba podnikající dle živnostenského zákona
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
