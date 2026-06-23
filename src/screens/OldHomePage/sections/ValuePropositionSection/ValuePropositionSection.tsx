import { Card, CardContent } from "../../../../components/ui/card";

const valueItems = [
  {
    title: "Fast and Reliable Service",
    description:
      "When you have a plumbing emergency, you need help fast. Our team of expert plumbers is available 24/7 to provide reliable and efficient service when you need it most.",
  },
  {
    title: "Affordable Rates",
    description:
      "Plumbing repairs can be expensive, but we believe that quality service shouldn&#39;t break the bank. That&#39;s why we offer competitive and affordable rates.",
  },
  {
    title: "Upfront Pricing",
    description:
      "We believe in transparency and honesty when it comes to pricing. That&#39;s why we provide upfront pricing before any work is done, so you know exactly what to expect.",
  },
  {
    title: "Comprehensive Services",
    description:
      "From leaky faucets to sewer line repairs, we offer a comprehensive range of plumbing services to meet all of your needs. No job is too big or too small for our team of experts.",
  },
];

export const ValuePropositionSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-grey-light-2">
      <div className="mx-auto grid min-h-[1062px] max-w-[1440px] grid-cols-1 lg:grid-cols-[minmax(320px,571px)_minmax(0,657px)]">
        <div className="relative min-h-[420px] lg:min-h-[1062px]">
          <div className="absolute inset-y-0 left-[26.2%] hidden w-[61.1%] bg-[linear-gradient(180deg,rgba(91,181,67,0)_0%,rgba(91,181,67,1)_100%)] lg:block" />
          <div className="absolute bottom-0 left-0 hidden h-[91.4%] w-[90%] rotate-180 bg-grey-2 lg:block" />
          <div className="h-full w-full bg-grey-2 lg:hidden" />
        </div>
        <div className="flex flex-col px-6 py-12 sm:px-8 lg:px-0 lg:py-[110px]">
          <header className="flex max-w-[657px] flex-col items-start gap-4">
            <div className="flex items-center gap-2.5">
              <img className="h-6 w-6" alt="Pipe icon" src="/pipe-icon.svg" />
              <p className="font-sub-1 text-[length:var(--sub-1-font-size)] font-[number:var(--sub-1-font-weight)] leading-[var(--sub-1-line-height)] tracking-[var(--sub-1-letter-spacing)] text-green [font-style:var(--sub-1-font-style)]">
                Why Choose Us
              </p>
            </div>
            <h2 className="max-w-[657px] font-h1 text-[40px] font-[number:var(--h1-font-weight)] leading-tight tracking-[var(--h1-letter-spacing)] text-dark-blue [font-style:var(--h1-font-style)] sm:text-[48px] lg:text-[length:var(--h1-font-size)] lg:leading-[var(--h1-line-height)]">
              Choose Us for Expert Plumbing Solutions
            </h2>
            <p className="max-w-[657px] font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-grey-1 [font-style:var(--paragraph-2-font-style)]">
              When it comes to your plumbing needs, you need a team you can
              trust. At Pipowork, we&#39;re committed to providing our clients
              with the highest quality plumbing solutions and exceptional
              customer service.
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
