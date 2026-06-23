import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

const serviceItems = [
  "Opravy rozvodů a potrubí",
  "Instalatérské montáže",
  "Topenářské práce a vytápění",
];

const formFields = [
  { type: "text", placeholder: "Vaše jméno / Firma", textColor: "text-grey-1" },
  { type: "email", placeholder: "E-mail", textColor: "text-grey-1" },
  { type: "tel", placeholder: "Telefonní číslo", textColor: "text-grey-2" },
  { type: "text", placeholder: "Vyberte službu", textColor: "text-grey-1" },
];

export const HeroCTASection = (): JSX.Element => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,509px)] lg:gap-12 lg:px-[150px] lg:py-[140px]">
        <div className="flex flex-col">
          <header className="max-w-[500px]">
            <p className="mb-4 text-dark-blue [font-family:'Manrope',Helvetica] text-[40px] leading-[44px] tracking-[0] sm:text-[52px] sm:leading-[56px] lg:text-[64px] lg:leading-[64px]">
              <span className="font-h1 font-[number:var(--h1-font-weight)] tracking-[var(--h1-letter-spacing)] [font-style:var(--h1-font-style)]">
                Váš{" "}
              </span>
              <span className="font-h1 font-[number:var(--h1-font-weight)] text-sky-600 tracking-[var(--h1-letter-spacing)] [font-style:var(--h1-font-style)]">
                spolehlivý
              </span>
              <span className="font-h1 font-[number:var(--h1-font-weight)] tracking-[var(--h1-letter-spacing)] [font-style:var(--h1-font-style)]">
                {" "}
                partner pro{" "}
              </span>
              <span className="font-h1 font-[number:var(--h1-font-weight)] text-sky-600 tracking-[var(--h1-letter-spacing)] [font-style:var(--h1-font-style)]">
                instalatérské
              </span>
              <span className="font-h1 font-[number:var(--h1-font-weight)] tracking-[var(--h1-letter-spacing)] [font-style:var(--h1-font-style)]">
                {" "}
                práce – ELVEUL
              </span>
            </p>
            <p className="max-w-[448px] font-paragraph-1 text-[length:var(--paragraph-1-font-size)] font-[number:var(--paragraph-1-font-weight)] leading-[var(--paragraph-1-line-height)] tracking-[var(--paragraph-1-letter-spacing)] text-grey-1 [font-style:var(--paragraph-1-font-style)]">
              ELVEUL nabízí profesionální instalatérské a topenářské služby, které splní všechny vaše potřeby. Od jednoduchých oprav potrubí až po komplexní rozvody a instalace vytápění.
            </p>
          </header>
          <div className="mt-12 flex flex-col gap-6 lg:mt-[116px]">
            <section className="flex items-start justify-between gap-6">
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-center gap-[17px]">
                  <img
                    className="h-[60px] w-[60px] shrink-0"
                    alt="Icon"
                    src="/icon.svg"
                  />
                  <h2 className="font-h5 text-[length:var(--h5-font-size)] font-[number:var(--h5-font-weight)] leading-[var(--h5-line-height)] tracking-[var(--h5-letter-spacing)] text-dark-blue [font-style:var(--h5-font-style)]">
                    Naše Služby
                  </h2>
                </div>
                <div className="mt-6 flex items-start">
                  <img
                    className="ml-[29px] h-[34px] w-px shrink-0"
                    alt="Line"
                    src="/line-1.svg"
                  />
                </div>
                <Card className="mt-[-3px] w-fit rounded-xl border-0 bg-sky-50 shadow-none">
                  <CardContent className="flex flex-col items-start gap-4 px-6 py-6 pr-8">
                    {serviceItems.map((item) => (
                      <button
                        key={item}
                        type="button"
                        className="inline-flex items-center gap-4 text-left"
                      >
                        <img
                          className="h-6 w-6 shrink-0"
                          alt="Arrow right circle"
                          src="/arrow-right-circle.svg"
                        />
                        <span className="font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-dark-blue whitespace-nowrap [font-style:var(--paragraph-2-font-style)]">
                          {item}
                        </span>
                      </button>
                    ))}
                  </CardContent>
                </Card>
                <Button
                  type="button"
                  variant="ghost"
                  className="mt-6 h-auto w-fit p-0 font-button text-[length:var(--button-font-size)] font-[number:var(--button-font-weight)] leading-[var(--button-line-height)] tracking-[var(--button-letter-spacing)] text-sky-600 hover:bg-transparent hover:text-sky-500"
                >
                  <span>Všechny Služby</span>
                  <img
                    className="ml-2 h-[7.36px] w-[32.5px]"
                    alt="Line"
                    src="/line-2.svg"
                  />
                </Button>
              </div>
              <div className="mt-[121px] flex shrink-0 flex-col items-start gap-px">
                <div className="font-h2 text-[length:var(--h2-font-size)] font-[number:var(--h2-font-weight)] leading-[var(--h2-line-height)] tracking-[var(--h2-letter-spacing)] text-black [font-style:var(--h2-font-style)]">
                  +10
                </div>
                <div className="font-paragraph-1 text-[length:var(--paragraph-1-font-size)] font-[number:var(--paragraph-1-font-weight)] leading-[var(--paragraph-1-line-height)] tracking-[var(--paragraph-1-letter-spacing)] text-black whitespace-nowrap [font-style:var(--paragraph-1-font-style)]">
                  Dalších
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="relative flex flex-col items-center lg:min-h-[685px]">
          <div className="relative w-full max-w-[509px]">
            <div className="mx-auto flex w-full max-w-[509px] items-start justify-center lg:justify-start">
              <div className="relative h-[360px] w-full max-w-[447px] sm:h-[480px] lg:h-[812px]">
                <div className="absolute left-[14.7651%] top-0 h-full w-[76.0313%] bg-[linear-gradient(180deg,rgba(2,132,199,0)_0%,rgba(2,132,199,1)_100%)]" />
                <div className="absolute left-0 top-[18.7192%] h-[81.2808%] w-[79.3713%] bg-grey-2" />
              </div>
            </div>
            <aside className="mt-8 flex justify-end lg:absolute lg:bottom-0 lg:right-0 lg:mt-0">
              <Card className="w-full max-w-[420px] rounded-xl border-0 bg-grey-light-1 shadow-none">
                <CardContent className="p-9">
                  <div className="flex flex-col items-start gap-6">
                    <h2 className="font-h5 text-[length:var(--h5-font-size)] font-[number:var(--h5-font-weight)] leading-[var(--h5-line-height)] tracking-[var(--h5-letter-spacing)] text-dark-blue [font-style:var(--h5-font-style)]">
                      Nezávazná poptávka
                    </h2>
                    <form className="flex w-full flex-col gap-3">
                      {formFields.map((field) => (
                        <Input
                          key={field.placeholder}
                          type={field.type}
                          defaultValue=""
                          placeholder={field.placeholder}
                          className={`h-auto rounded-lg border-0 bg-white px-6 py-4 font-form-field text-[length:var(--form-field-font-size)] font-[number:var(--form-field-font-weight)] leading-[var(--form-field-line-height)] tracking-[var(--form-field-letter-spacing)] shadow-none placeholder:${field.textColor} [font-style:var(--form-field-font-style)]`}
                        />
                      ))}

                      <Button
                        type="submit"
                        className="mt-3 h-auto w-fit rounded-lg bg-sky-600 px-[50px] py-[18px] font-button text-[length:var(--button-font-size)] font-[number:var(--button-font-weight)] leading-[var(--button-line-height)] tracking-[var(--button-letter-spacing)] text-white hover:bg-sky-500"
                      >
                        Odeslat poptávku
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </aside>
            <aside className="mx-auto mt-8 flex w-fit flex-col items-start gap-2.5 lg:absolute lg:right-0 lg:top-7 lg:mt-0 lg:translate-x-[27px]">
              <button
                type="button"
                className="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[40px] bg-sky-600"
              >
                <img className="h-4 w-3.5" alt="Polygon" src="/polygon-1.svg" />
              </button>
              <p className="w-[105px] font-form-field text-[length:var(--form-field-font-size)] font-[number:var(--form-field-font-weight)] leading-[var(--form-field-line-height)] tracking-[var(--form-field-letter-spacing)] text-dark-blue [font-style:var(--form-field-font-style)]">
                Podívejte se, jak pracujeme
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};
