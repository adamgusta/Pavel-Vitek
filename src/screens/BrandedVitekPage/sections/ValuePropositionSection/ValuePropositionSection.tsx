import { Card, CardContent } from "../../../../components/ui/card";

const valueItems = [
  {
    title: "Rychlý a spolehlivý servis",
    description:
      "Pokud máte havárii vody nebo topení, potřebujete rychlou pomoc. Nabízíme spolehlivý a operativní servis, když to nejvíce potřebujete.",
  },
  {
    title: "Férové ceny",
    description:
      "Kvalitní instalatérské a topenářské práce nemusí zruinovat váš rozpočet. Nabízíme rozumné, férové a konkurenceschopné ceny za odvedenou práci.",
  },
  {
    title: "Jasné stanovení ceny",
    description:
      "Věříme v transparentnost a poctivost. Před zahájením prací s vámi probereme předpokládaný rozpočet, abyste přesně věděli, co můžete očekávat.",
  },
  {
    title: "Kompletní realizace",
    description:
      "Od opravy kapajícího kohoutku po kompletní rozvody v bytových domech a instalaci topných systémů. Zajišťujeme komplexní služby pro domácnosti i firmy.",
  },
];

export const ValuePropositionSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-grey-light-2">
      <div className="mx-auto grid min-h-[1062px] max-w-[1440px] grid-cols-1 lg:grid-cols-[minmax(320px,571px)_minmax(0,657px)]">
        <div className="relative min-h-[420px] lg:min-h-[1062px]">
          <div className="absolute inset-y-0 left-[26.2%] hidden w-[61.1%] bg-[linear-gradient(180deg,rgba(2,132,199,0)_0%,rgba(2,132,199,1)_100%)] lg:block" />
          <div className="absolute bottom-0 left-0 hidden h-[91.4%] w-[90%] rotate-180 bg-grey-2 lg:block" />
          <div className="h-full w-full bg-grey-2 lg:hidden" />
        </div>
        <div className="flex flex-col px-6 py-12 sm:px-8 lg:px-0 lg:py-[110px]">
          <header className="flex max-w-[657px] flex-col items-start gap-4">
            <div className="flex items-center gap-2.5">
              <img className="h-6 w-6" alt="Pipe icon" src="/pipe-icon.svg" />
              <p className="font-sub-1 text-[length:var(--sub-1-font-size)] font-[number:var(--sub-1-font-weight)] leading-[var(--sub-1-line-height)] tracking-[var(--sub-1-letter-spacing)] text-sky-600 [font-style:var(--sub-1-font-style)]">
                Proč zvolit nás
              </p>
            </div>
            <h2 className="max-w-[657px] font-h1 text-[40px] font-[number:var(--h1-font-weight)] leading-tight tracking-[var(--h1-letter-spacing)] text-dark-blue [font-style:var(--h1-font-style)] sm:text-[48px] lg:text-[length:var(--h1-font-size)] lg:leading-[var(--h1-line-height)]">
              Zvolte si profesionála pro vaše instalace
            </h2>
            <p className="max-w-[657px] font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-grey-1 [font-style:var(--paragraph-2-font-style)]">
              Pokud jde o instalatérské a topenářské práce, potřebujete spolehlivého partnera s prokazatelnými zkušenostmi. V ELVEUL si zakládáme na poctivě odvedeném řemesle, osobním přístupu a spolehlivosti.
            </p>
          </header>
          <div className="mt-12 grid max-w-[657px] grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:mt-[146px]">
            {valueItems.map((item) => (
              <Card
                key={item.title}
                className="rounded-xl border-0 bg-transparent p-0 shadow-none"
              >
                <CardContent className="flex flex-col items-start gap-5 p-0">
                  <img className="shrink-0" alt="Icon" src="/icon-1.svg" />
                  <div className="flex flex-col items-start gap-3.5">
                    <h3 className="mt-[-1.00px] font-h6 text-[length:var(--h6-font-size)] font-[number:var(--h6-font-weight)] leading-[var(--h6-line-height)] tracking-[var(--h6-letter-spacing)] text-dark-blue [font-style:var(--h6-font-style)]">
                      {item.title}
                    </h3>
                    <p
                      className="w-full max-w-[303px] font-paragraph-3 text-[length:var(--paragraph-3-font-size)] font-[number:var(--paragraph-3-font-weight)] leading-[var(--paragraph-3-line-height)] tracking-[var(--paragraph-3-letter-spacing)] text-grey-1 [font-style:var(--paragraph-3-font-style)]"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
