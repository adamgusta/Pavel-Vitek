import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

const footerSections = {
  services: [
    "Drain Cleaning Service",
    "Water Heater Repair Service",
    "Leak Detection and Repair",
    "Toilet Repair Service",
  ],
  contact: [
    "123 Main St. Anytown, USA",
    "+1 (555) 555-5555",
    "info@pipowork.com",
  ],
};

export const SiteFooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-black">
      <div className="mx-auto flex min-h-[435px] w-full max-w-[1440px] flex-col px-6 pb-10 pt-16 sm:px-10 md:px-16 lg:px-[150px] lg:pt-[110px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[242px_242px_242px_270px] lg:justify-between">
          <section className="flex flex-col items-start gap-6">
            <header>
              <h2 className="mt-[-1.00px] w-fit font-h2 text-[length:var(--h2-font-size)] font-[number:var(--h2-font-weight)] leading-[var(--h2-line-height)] tracking-[var(--h2-letter-spacing)] text-green [font-style:var(--h2-font-style)]">
                Pipowork
              </h2>
            </header>
            <p className="w-full max-w-[242px] font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-green-light [font-style:var(--paragraph-2-font-style)]">
              At Pipowork, we understand the importance of having a reliable
              plumbing system.
            </p>
          </section>
          <nav
            aria-label="Services"
            className="flex flex-col items-start gap-6"
          >
            <h3 className="mt-[-1.00px] w-fit font-h5 text-[length:var(--h5-font-size)] font-[number:var(--h5-font-weight)] leading-[var(--h5-line-height)] tracking-[var(--h5-letter-spacing)] text-white [font-style:var(--h5-font-style)]">
              Services
            </h3>
            <ul className="flex flex-col items-start gap-3">
              {footerSections.services.map((service) => (
                <li
                  key={service}
                  className="w-full max-w-[242px] font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-green-light [font-style:var(--paragraph-2-font-style)]"
                >
                  {service}
                </li>
              ))}
            </ul>
          </nav>
          <address className="not-italic">
            <div className="flex flex-col items-start gap-6">
              <h3 className="mt-[-1.00px] w-fit font-h5 text-[length:var(--h5-font-size)] font-[number:var(--h5-font-weight)] leading-[var(--h5-line-height)] tracking-[var(--h5-letter-spacing)] text-white [font-style:var(--h5-font-style)]">
                Contact Info
              </h3>
              <ul className="flex flex-col items-start gap-3">
                {footerSections.contact.map((item) => (
                  <li
                    key={item}
                    className="w-full max-w-[242px] font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-green-light [font-style:var(--paragraph-2-font-style)]"
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
                Newsletter
              </h3>
              <p className="w-full max-w-[270px] font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-green-light [font-style:var(--paragraph-2-font-style)]">
                Subscribe To Stay Up-to-Date with Plumbing Tips
              </p>
            </div>
            <form className="flex h-[60px] w-full max-w-[270px] items-center overflow-hidden rounded-md bg-white pl-6 pr-2">
              <Input
                type="email"
                aria-label="Email"
                placeholder="Email"
                className="h-auto flex-1 border-0 bg-transparent px-0 py-0 font-paragraph-3 text-[length:var(--paragraph-3-font-size)] font-[number:var(--paragraph-3-font-weight)] leading-[var(--paragraph-3-line-height)] tracking-[var(--paragraph-3-letter-spacing)] text-grey-2 shadow-none placeholder:text-grey-2 focus-visible:ring-0 [font-style:var(--paragraph-3-font-style)]"
              />
              <Button
                type="submit"
                className="h-10 rounded bg-yellow px-8 py-3 font-form-field text-[length:var(--form-field-font-size)] font-[number:var(--form-field-font-weight)] leading-[var(--form-field-line-height)] tracking-[var(--form-field-letter-spacing)] text-dark-yellow hover:bg-yellow-hover [font-style:var(--form-field-font-style)]"
              >
                Subscribe
              </Button>
            </form>
          </section>
        </div>
        <Separator className="mt-12 h-px w-full bg-white/20" />
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <p className="mt-[-1.00px] w-full max-w-[294px] font-paragraph-1 text-[length:var(--paragraph-1-font-size)] font-[number:var(--paragraph-1-font-weight)] leading-[var(--paragraph-1-line-height)] tracking-[var(--paragraph-1-letter-spacing)] text-white [font-style:var(--paragraph-1-font-style)]">
            Copyright © 2023 Pipowork
          </p>
          <p className="mt-[-1.00px] w-full max-w-[240px] font-paragraph-1 text-[length:var(--paragraph-1-font-size)] font-[number:var(--paragraph-1-font-weight)] leading-[var(--paragraph-1-line-height)] tracking-[var(--paragraph-1-letter-spacing)] text-white md:text-right [font-style:var(--paragraph-1-font-style)]">
            Designed by TokoTema
          </p>
        </div>
      </div>
    </footer>
  );
};
