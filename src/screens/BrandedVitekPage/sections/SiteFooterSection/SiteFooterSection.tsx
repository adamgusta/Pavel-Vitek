import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

const footerSections = {
  services: [
    "Čištění odpadů a stoupaček",
    "Montáž a opravy vytápění",
    "Lokalizace a oprava úniků vody",
    "Instalatérské práce a montáže",
  ],
  contact: [
    "Na Spálence 523/40, Ústí nad Labem",
    "+420 777 725 730",
    "elveul@seznam.cz",
  ],
};

export const SiteFooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-black">
      <div className="mx-auto flex min-h-[435px] w-full max-w-[1440px] flex-col px-6 pb-10 pt-16 sm:px-10 md:px-16 lg:px-[150px] lg:pt-[110px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[242px_242px_242px_270px] lg:justify-between">
          <section className="flex flex-col items-start gap-6">
            <header>
              <h2 className="mt-[-1.00px] w-fit font-h2 text-[length:var(--h2-font-size)] font-[number:var(--h2-font-weight)] leading-[var(--h2-line-height)] tracking-[var(--h2-letter-spacing)] text-sky-500 [font-style:var(--h2-font-style)]">
                ELVEUL
              </h2>
            </header>
            <p className="w-full max-w-[242px] font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-slate-300 [font-style:var(--paragraph-2-font-style)]">
              V ELVEUL realizujeme profesionální instalatérské a topenářské práce s více než 30 lety zkušeností v oboru.
            </p>
          </section>
          <nav
            aria-label="Služby"
            className="flex flex-col items-start gap-6"
          >
            <h3 className="mt-[-1.00px] w-fit font-h5 text-[length:var(--h5-font-size)] font-[number:var(--h5-font-weight)] leading-[var(--h5-line-height)] tracking-[var(--h5-letter-spacing)] text-white [font-style:var(--h5-font-style)]">
              Služby
            </h3>
            <ul className="flex flex-col items-start gap-3">
              {footerSections.services.map((service) => (
                <li
                  key={service}
                  className="w-full max-w-[242px] font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-slate-300 [font-style:var(--paragraph-2-font-style)]"
                >
                  {service}
                </li>
              ))}
            </ul>
          </nav>
          <address className="not-italic">
            <div className="flex flex-col items-start gap-6">
              <h3 className="mt-[-1.00px] w-fit font-h5 text-[length:var(--h5-font-size)] font-[number:var(--h5-font-weight)] leading-[var(--h5-line-height)] tracking-[var(--h5-letter-spacing)] text-white [font-style:var(--h5-font-style)]">
                Kontaktní údaje
              </h3>
              <ul className="flex flex-col items-start gap-3">
                {footerSections.contact.map((item) => (
                  <li
                    key={item}
                    className="w-full max-w-[242px] font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-slate-300 [font-style:var(--paragraph-2-font-style)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </address>
          <section className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-6">
              <h3 className="mt-[-1.00px] w-fit font-h5 text-[length:var(--h5-font-size)] font-[number:var(--h5-font-weight)] leading-[var(--h5-line-height)] tracking-[var(--h5-letter-spacing)] text-white [font-style:var(--h5-font-style)]">
                Zpravodaj
              </h3>
              <p className="w-full max-w-[270px] font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-slate-300 [font-style:var(--paragraph-2-font-style)]">
                Přihlaste se k odběru novinek a užitečných tipů z oboru.
              </p>
            </div>
            <form className="flex h-[60px] w-full max-w-[270px] items-center overflow-hidden rounded-md bg-white pl-6 pr-2">
              <Input
                type="email"
                aria-label="E-mail"
                placeholder="E-mail"
                className="h-auto flex-1 border-0 bg-transparent px-0 py-0 font-paragraph-3 text-[length:var(--paragraph-3-font-size)] font-[number:var(--paragraph-3-font-weight)] leading-[var(--paragraph-3-line-height)] tracking-[var(--paragraph-3-letter-spacing)] text-grey-2 shadow-none placeholder:text-grey-2 focus-visible:ring-0 [font-style:var(--paragraph-3-font-style)]"
              />
              <Button
                type="submit"
                className="h-10 rounded bg-sky-600 px-8 py-3 font-form-field text-[length:var(--form-field-font-size)] font-[number:var(--form-field-font-weight)] leading-[var(--form-field-line-height)] tracking-[var(--form-field-letter-spacing)] text-white hover:bg-sky-500 [font-style:var(--form-field-font-style)]"
              >
                Odebírat
              </Button>
            </form>
          </section>
        </div>
        <Separator className="mt-12 h-px w-full bg-white/20" />
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <p className="mt-[-1.00px] w-full max-w-[400px] font-paragraph-1 text-[length:var(--paragraph-1-font-size)] font-[number:var(--paragraph-1-font-weight)] leading-[var(--paragraph-1-line-height)] tracking-[var(--paragraph-1-letter-spacing)] text-white [font-style:var(--paragraph-1-font-style)]">
            Copyright © 2026 ELVEUL | Pavel Vítek
          </p>
          <p className="mt-[-1.00px] w-full max-w-[400px] font-paragraph-1 text-[length:var(--paragraph-1-font-size)] font-[number:var(--paragraph-1-font-weight)] leading-[var(--paragraph-1-line-height)] tracking-[var(--paragraph-1-letter-spacing)] text-white md:text-right [font-style:var(--paragraph-1-font-style)]">
            IČO: 44515693 | Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};
