import { ArrowRight, Phone, Wrench, Shield, MapPin } from "lucide-react";

export const HeroSection = (): JSX.Element => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_50%,#0c4a6e_100%)]" />
      <div className="absolute inset-0 opacity-20">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-32 lg:flex-row lg:px-8 lg:py-0">
        <div className="flex max-w-2xl flex-col items-start gap-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-300">
            <Wrench className="h-4 w-4" />
            <span>Na trhu od roku 1993</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Profesionální instalatérské a{" "}
            <span className="text-sky-400">topenářské práce</span> v Ústí nad
            Labem a okolí
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-slate-300">
            Přes 30 let zkušeností v oboru. Realizujeme kompletní rozvody pro
            domácnosti i rozsáhlé zakázky pro velké firmy. Rychle, spolehlivě a
            v nejvyšší kvalitě.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              onClick={(e) => handleScroll(e, "#kontakt")}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-900/30 transition-all hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-900/40"
            >
              Nezávazná poptávka
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#sluzby"
              onClick={(e) => handleScroll(e, "#sluzby")}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-7 py-3.5 text-base font-semibold text-white transition-all hover:border-slate-500 hover:bg-slate-800/50"
            >
              Naše služby
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-sky-400" />
              Na trhu od r. 1993
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Wrench className="h-4 w-4 text-sky-400" />
              Projekty jakékoliv velikosti
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-sky-400" />
              Ústí nad Labem a kraj
            </span>
          </div>
        </div>

        <div className="relative mt-16 flex w-full max-w-lg items-center justify-center lg:mt-0 lg:ml-auto">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-sky-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/50 shadow-2xl backdrop-blur-sm">
              <div className="flex h-80 w-80 items-center justify-center bg-slate-800 sm:h-96 sm:w-96">
                <div className="flex flex-col items-center gap-4 text-slate-500">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-700/50">
                    <Wrench className="h-10 w-10 text-sky-400" />
                  </div>
                  <span className="text-sm font-medium">Moderní technologie</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-slate-700/50 bg-slate-800/90 p-4 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                  <Phone className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Zavolejte nám</p>
                  <p className="text-sm font-semibold text-white">+420 777 725 730</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
