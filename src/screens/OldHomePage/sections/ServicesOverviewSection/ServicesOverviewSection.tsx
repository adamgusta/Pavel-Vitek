import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const services = [
  {
    title: "Drain Cleaning Service",
    description:
      "Our drain cleaning service involves clearing out blockages and debris.",
    price: "$ 150",
    imageClass:
      "absolute top-[-13px] left-[-38px] h-[292px] w-[437px] bg-grey-2",
  },
  {
    title: "Water Heater Repair Service",
    description:
      "Our water heater repair service involves diagnosing and fixing issues.",
    price: "$ 200",
    imageClass: "absolute top-[-9px] -left-8 h-[287px] w-[430px] bg-grey-2",
  },
  {
    title: "Leak Detection and Repair Service",
    description:
      "Our leak detection and repair service involves locating and fixing leaks in your plumbing.",
    price: "$ 250",
    imageClass: "absolute -top-3.5 left-[-41px] h-[299px] w-[449px] bg-grey-2",
  },
];

export const ServicesOverviewSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-[110px]">
      <div className="mx-auto flex w-full max-w-[1140px] flex-col gap-[88px] px-4 sm:px-6 lg:px-0">
        <header className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-[876px] flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2.5">
              <img className="h-6 w-6" alt="Pipe icon" src="/pipe-icon.svg" />
              <span className="font-sub-1 text-[length:var(--sub-1-font-size)] font-[number:var(--sub-1-font-weight)] leading-[var(--sub-1-line-height)] tracking-[var(--sub-1-letter-spacing)] text-green [font-style:var(--sub-1-font-style)]">
                Our Services
              </span>
            </div>
            <h2 className="max-w-[876px] font-h1 text-[length:var(--h1-font-size)] font-[number:var(--h1-font-weight)] leading-[1.15] tracking-[var(--h1-letter-spacing)] text-dark-blue [font-style:var(--h1-font-style)] max-md:text-[40px]">
              Comprehensive Plumbing Services for Your Need
            </h2>
          </div>
          <Button
            variant="ghost"
            className="h-auto self-start p-0 font-button text-[length:var(--button-font-size)] font-[number:var(--button-font-weight)] leading-[var(--button-line-height)] tracking-[var(--button-letter-spacing)] text-yellow-hover hover:bg-transparent hover:text-yellow-hover"
          >
            <span>
              [I see a services section with a small green “Our Services” label
              and pipe icon on the left, a large dark-blue heading reading
              “Comprehensive Plumbing Services for Your Need,” and an “All
              Services” text link on the right with a short horizontal line
              icon. Below it are three equal-width service cards in a row. Each
              card has a gray image placeholder area on top with a white price
              badge near the lower left, then a light-gray content area with a
              service title, short description, and a yellow call-to-action
              button.]
            </span>
          </Button>
        </header>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="w-full">
              <Card className="overflow-hidden rounded-[12px] border-0 bg-transparent shadow-none">
                <CardContent className="p-0">
                  <div className="relative h-[270px] overflow-hidden rounded-t-[12px]">
                    <div className={service.imageClass} />
                    <div className="absolute left-8 top-[203px] inline-flex items-start gap-2.5 rounded-lg bg-white px-2.5 py-1">
                      <span className="mt-[-1.00px] w-fit font-h6 text-[length:var(--h6-font-size)] font-[number:var(--h6-font-weight)] leading-[var(--h6-line-height)] tracking-[var(--h6-letter-spacing)] text-green [font-style:var(--h6-font-style)]">
                        {service.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-5 rounded-b-[12px] bg-grey-light-2 px-8 pb-8 pt-4">
                    <div className="flex flex-col items-start gap-4">
                      <h3 className="w-full max-w-[303px] font-h4 text-[length:var(--h4-font-size)] font-[number:var(--h4-font-weight)] leading-[var(--h4-line-height)] tracking-[var(--h4-letter-spacing)] text-dark-blue [font-style:var(--h4-font-style)]">
                        {service.title}
                      </h3>
                      <p className="w-full max-w-[303px] font-paragraph-3 text-[length:var(--paragraph-3-font-size)] font-[number:var(--paragraph-3-font-weight)] leading-[var(--paragraph-3-line-height)] tracking-[var(--paragraph-3-letter-spacing)] text-grey-1 [font-style:var(--paragraph-3-font-style)]">
                        {service.description}
                      </p>
                    </div>
                    <Button className="h-auto w-full rounded-lg bg-yellow px-[50px] py-[18px] font-button text-center text-[length:var(--button-font-size)] font-[number:var(--button-font-weight)] leading-[var(--button-line-height)] tracking-[var(--button-letter-spacing)] text-dark-yellow hover:bg-yellow">
                      Services Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
