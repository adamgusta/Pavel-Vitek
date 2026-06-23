import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

const contactItems = ["elveul@seznam.cz", "Na Spálence 523/40, Ústí nad Labem"];

const navigationItems = ["Úvod", "Služby", "O nás", "Kontakt", "Blog"];

export const SiteNavigationSection = (): JSX.Element => {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col">
        <div className="flex min-h-[86px] w-full items-start justify-between gap-6 px-[150px] pt-[21px] pb-[27px] max-md:px-6 max-md:py-5 max-sm:gap-4">
          <address className="flex not-italic items-center gap-4 text-grey-1 max-md:flex-wrap">
            {contactItems.map((item, index) => (
              <div key={item} className="flex items-center gap-4">
                {index > 0 && (
                  <Separator
                    orientation="vertical"
                    className="h-8 w-px bg-grey-3"
                  />
                )}
                <span className="font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] [font-style:var(--paragraph-2-font-style)] whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </address>
          <div className="font-h3 text-[length:var(--h3-font-size)] font-[number:var(--h3-font-weight)] leading-[var(--h3-line-height)] tracking-[var(--h3-letter-spacing)] text-sky-600 text-right [font-style:var(--h3-font-style)] whitespace-nowrap max-md:text-left max-sm:text-2xl">
            +420 777 725 730
          </div>
        </div>
        <div className="min-h-[94px] w-full bg-slate-900">
          <div className="mx-auto flex min-h-[94px] w-full max-w-[1440px] items-stretch justify-between px-[150px] max-md:flex-col max-md:items-start max-md:px-6">
            <div className="flex items-center py-6 max-md:py-5">
              <h1 className="font-h3 text-[length:var(--h3-font-size)] font-[number:var(--h3-font-weight)] leading-[var(--h3-line-height)] tracking-[var(--h3-letter-spacing)] text-white [font-style:var(--h3-font-style)]">
                ELVEUL <span className="font-light text-slate-400">| Pavel Vítek</span>
              </h1>
            </div>
            <nav
              aria-label="Primary"
              className="flex items-stretch max-md:w-full"
            >
              <ul className="flex items-stretch gap-6 text-white max-md:w-full max-md:flex-wrap max-md:gap-3 max-md:pb-4">
                {navigationItems.map((item) => {
                  const isActive = item === "Úvod";

                  return (
                    <li key={item} className="flex items-stretch">
                      {isActive ? (
                        <Button
                          type="button"
                          variant="default"
                          className="h-auto min-h-[94px] rounded-none bg-sky-600 px-6 py-2.5 font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-white shadow-none hover:bg-sky-500 [font-style:var(--paragraph-2-font-style)] max-md:min-h-[52px]"
                        >
                          {item}
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          variant="ghost"
                          className="h-auto min-h-[94px] rounded-none px-0 py-2.5 font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-white hover:bg-transparent hover:text-sky-400 [font-style:var(--paragraph-2-font-style)] max-md:min-h-[52px]"
                        >
                          {item}
                        </Button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
