import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    name: "Marek J.",
    role: "Majitel rodinného domu",
    title: "Rychlý a spolehlivý servis",
    description:
      "Měl jsem havárii na rozvodech vody a pan Vítek přijel velmi rychle. Závadu okamžitě lokalizoval a opravil. Vše funguje perfektně, mohu jen doporučit.",
    rating: "5.0",
    ratingBg: "bg-sky-600",
    avatarShape: "w-[105px] h-[71px] -top-0.5 -left-3.5",
  },
  {
    name: "Lucie K.",
    role: "Správkyně nemovitostí",
    title: "Férové ceny a rychlá domluva",
    description:
      "Spolupracujeme s panem Vítkem na údržbě našich objektů. Ceny jsou vždy předem jasně stanovené a dodržené. Velmi oceňuji spolehlivost.",
    rating: "4.8",
    ratingBg: "bg-sky-500",
    avatarShape: "w-[142px] h-[75px] -top-px -left-16",
  },
  {
    name: "David L.",
    role: "Majitel bytu",
    title: "Skvělá komunikace a ochota",
    description:
      "Instalace nového vytápění proběhla přesně podle dohody. Pan Vítek nám vše vysvětlil a doporučil nejlepší řešení. Velmi profesionální přístup.",
    rating: "4.9",
    ratingBg: "bg-sky-500",
    avatarShape: "w-[117px] h-[78px] top-[-7px] left-[-26px]",
  },
  {
    name: "Jana S.",
    role: "Majitelka provozovny",
    title: "Kvalitně a čistě odvedená práce",
    description:
      "Rekonstrukce rozvodů v naší provozovně byla provedena rychle a čistě. Žádný nepořádek, rychlé zprovoznění a výborná kvalita.",
    rating: "5.0",
    ratingBg: "bg-sky-600",
    avatarShape: "w-[98px] h-[66px] -top-px -left-5",
  },
];

export const ClientTestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-sky-50">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 py-[72px] sm:px-10 lg:px-[150px] lg:py-[110px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <header className="flex max-w-[617px] flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-2.5">
                <img className="h-6 w-6" alt="Pipe icon" src="/pipe-icon.svg" />
                <span className="font-sub-1 text-[length:var(--sub-1-font-size)] font-[number:var(--sub-1-font-weight)] leading-[var(--sub-1-line-height)] tracking-[var(--sub-1-letter-spacing)] text-sky-600 [font-style:var(--sub-1-font-style)]">
                  Reference
                </span>
              </div>
              <h2 className="font-h1 text-[length:var(--h1-font-size)] font-[number:var(--h1-font-weight)] leading-[1.1] tracking-[var(--h1-letter-spacing)] text-dark-blue [font-style:var(--h1-font-style)] max-lg:text-[44px] max-sm:text-[34px]">
                Co o nás říkají naši klienti
              </h2>
              <p className="max-w-[617px] font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-grey-1 [font-style:var(--paragraph-2-font-style)]">
                V ELVEUL je naší prioritou stoprocentní spokojenost zákazníků a poctivě odvedená řemeslná práce.
              </p>
            </div>
          </header>
          <div className="flex flex-col items-start gap-6 lg:items-end">
            <img
              className="h-auto w-[180px] sm:w-[220px]"
              alt="Google logo"
              src="/google-logo.png"
            />
            <Button
              type="button"
              className="h-auto rounded-lg bg-sky-600 px-[50px] py-[18px] font-button text-[length:var(--button-font-size)] font-[number:var(--button-font-weight)] leading-[var(--button-line-height)] tracking-[var(--button-letter-spacing)] text-white shadow-none hover:bg-sky-500 [font-style:var(--button-font-style)]"
            >
              Všechny reference
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="overflow-hidden rounded-xl border-0 bg-white shadow-none"
            >
              <CardContent className="flex h-full min-h-[291px] flex-col justify-between p-0 sm:flex-row">
                <div className="flex flex-1 flex-col gap-5 p-[34px] pr-6">
                  <div className="flex items-center gap-5">
                    <div className="relative h-16 w-16 overflow-hidden rounded-[200px]">
                      <div
                        className={`relative bg-grey-2 ${testimonial.avatarShape}`}
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col items-start">
                      <h3 className="mt-[-1.00px] font-sub-1 text-[length:var(--sub-1-font-size)] font-[number:var(--sub-1-font-weight)] leading-[var(--sub-1-line-height)] tracking-[var(--sub-1-letter-spacing)] text-black [font-style:var(--sub-1-font-style)]">
                        {testimonial.name}
                      </h3>
                      <p className="whitespace-nowrap font-paragraph-3 text-[length:var(--paragraph-3-font-size)] font-[number:var(--paragraph-3-font-weight)] leading-[var(--paragraph-3-line-height)] tracking-[var(--paragraph-3-letter-spacing)] text-grey-2 [font-style:var(--paragraph-3-font-style)]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex max-w-[400px] flex-col items-start gap-2">
                    <h4 className="mt-[-1.00px] self-stretch font-h6 text-[length:var(--h6-font-size)] font-[number:var(--h6-font-weight)] leading-[var(--h6-line-height)] tracking-[var(--h6-letter-spacing)] text-sky-600 [font-style:var(--h6-font-style)]">
                      {testimonial.title}
                    </h4>
                    <p className="self-stretch font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-dark-blue [font-style:var(--paragraph-2-font-style)]">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
                <aside
                  className={`flex w-full shrink-0 items-center justify-center px-4 py-8 sm:w-[97px] sm:py-10 ${testimonial.ratingBg}`}
                  aria-label={`Hodnocení ${testimonial.rating}`}
                >
                  <span className="mt-[-1.00px] text-center font-h5 text-[length:var(--h5-font-size)] font-[number:var(--h5-font-weight)] leading-[var(--h5-line-height)] tracking-[var(--h5-letter-spacing)] text-sky-50 [font-style:var(--h5-font-style)]">
                    {testimonial.rating}
                  </span>
                </aside>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
