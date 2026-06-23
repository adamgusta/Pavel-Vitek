import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-white">ELVEUL</h3>
            <p className="mt-1 text-sm text-slate-400">Pavel Vítek</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Profesionální instalatérské a topenářské práce v Ústí nad Labem a
              okolí. Na trhu od roku 1993.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Kontakt
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="tel:+420777725730"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-sky-400"
                >
                  <Phone className="h-4 w-4" />
                  +420 777 725 730
                </a>
              </li>
              <li>
                <a
                  href="tel:+420603514112"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-sky-400"
                >
                  <Phone className="h-4 w-4" />
                  +420 603 514 112
                </a>
              </li>
              <li>
                <a
                  href="mailto:elveul@seznam.cz"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-sky-400"
                >
                  <Mail className="h-4 w-4" />
                  elveul@seznam.cz
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="h-4 w-4" />
                  Na Spálence 523/40, Ústí nad Labem
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Rychlé odkazy
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {[
                { label: "Služby", href: "#sluzby" },
                { label: "O nás", href: "#o-nas" },
                { label: "Pro firmy", href: "#pro-firmy" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-slate-400 transition-colors hover:text-sky-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-center text-sm text-slate-500">
            &copy; {currentYear} ELVEUL - Pavel Vítek. Všechna práva
            vyhrazena. Instalatérské práce Ústí nad Labem.
          </p>
        </div>
      </div>
    </footer>
  );
};
