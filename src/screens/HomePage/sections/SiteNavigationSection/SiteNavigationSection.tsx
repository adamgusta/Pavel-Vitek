import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

const contactItems = ["info@pipowork.com", "123 Main St. Anytown, USA"];

const navigationItems = ["Home", "About Us", "Services", "Contact Us", "Blog"];

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
          <div className="font-h3 text-[length:var(--h3-font-size)] font-[number:var(--h3-font-weight)] leading-[var(--h3-line-height)] tracking-[var(--h3-letter-spacing)] text-green text-right [font-style:var(--h3-font-style)] whitespace-nowrap max-md:text-left max-sm:text-2xl">
            +1 (555) 555-5555
          </div>
        </div>
        <div className="min-h-[94px] w-full bg-green">
          <div className="mx-auto flex min-h-[94px] w-full max-w-[1440px] items-stretch justify-between px-[150px] max-md:flex-col max-md:items-start max-md:px-6">
            <div className="flex items-center py-6 max-md:py-5">
              <h1 className="font-h3 text-[length:var(--h3-font-size)] font-[number:var(--h3-font-weight)] leading-[var(--h3-line-height)] tracking-[var(--h3-letter-spacing)] text-white [font-style:var(--h3-font-style)]">
                PipoWork
              </h1>
            </div>
            <nav
              aria-label="Primary"
              className="flex items-stretch max-md:w-full"
            >
              <ul className="flex items-stretch gap-6 text-white max-md:w-full max-md:flex-wrap max-md:gap-3 max-md:pb-4">
                {navigationItems.map((item) => {
                  const isActive = item === "Home";

                  return (
                    <li key={item} className="flex items-stretch">
                      {isActive ? (
                        <Button
                          type="button"
                          variant="default"
                          className="h-auto min-h-[94px] rounded-none bg-dark-blue px-6 py-2.5 font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-white shadow-none hover:bg-dark-blue/95 [font-style:var(--paragraph-2-font-style)] max-md:min-h-[52px]"
                        >
                          {item}
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          variant="ghost"
                          className="h-auto min-h-[94px] rounded-none px-0 py-2.5 font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-white hover:bg-transparent hover:text-white/90 [font-style:var(--paragraph-2-font-style)] max-md:min-h-[52px]"
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
