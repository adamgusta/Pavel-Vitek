import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const offerPoints = [
  "Fast Fixes, Affordable Prices",
  "Reliable Plumbing Solutions Guaranteed",
  "Expert Plumbers, Quality Service",
  "Emergency Services Available 24/7",
  "Get Your Problems Solved Today!",
];

export const LimitedOfferPromoSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-grey-2 px-4 py-10 sm:px-6 md:px-10 lg:px-[60px] xl:px-[150px] xl:py-[129px]">
      <div className="mx-0 flex w-full justify-start">
        <Card className="w-full max-w-[463px] rounded-xl border-0 bg-grey-light-1 shadow-none">
          <CardContent className="flex flex-col p-[60px]">
            <header className="flex items-center gap-2.5">
              <img className="h-6 w-6" alt="Pipe icon" src="/pipe-icon.svg" />
              <p className="font-sub-1 text-[length:var(--sub-1-font-size)] font-[number:var(--sub-1-font-weight)] leading-[var(--sub-1-line-height)] tracking-[var(--sub-1-letter-spacing)] text-green [font-style:var(--sub-1-font-style)]">
                Special Offer
              </p>
            </header>
            <h2 className="mt-4 max-w-[344px] font-h3 text-[length:var(--h3-font-size)] font-[number:var(--h3-font-weight)] leading-[var(--h3-line-height)] tracking-[var(--h3-letter-spacing)] text-dark-blue [font-style:var(--h3-font-style)]">
              <span className="text-dark-blue">
                Get Your Plumbing Fixed Today -{" "}
              </span>
              <span className="text-yellow-hover">10% Off</span>
              <span className="text-dark-blue"> Your First Service!</span>
            </h2>
            <img
              className="mt-[19px] h-px w-full max-w-[344px]"
              alt="Line"
              src="/line-3.svg"
            />
            <ul className="mt-5 flex w-full max-w-[344px] flex-col gap-2.5">
              {offerPoints.map((point) => (
                <li key={point} className="flex items-center gap-4">
                  <img
                    className="h-6 w-6 shrink-0"
                    alt="Arrow right circle"
                    src="/arrow-right-circle.svg"
                  />
                  <span className="font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-dark-blue [font-style:var(--paragraph-2-font-style)]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              type="button"
              className="mt-8 h-auto w-fit min-w-[193px] rounded-lg bg-yellow px-[50px] py-[18px] font-button text-[length:var(--button-font-size)] font-[number:var(--button-font-weight)] leading-[var(--button-line-height)] tracking-[var(--button-letter-spacing)] text-dark-yellow shadow-none hover:bg-yellow-hover hover:text-dark-yellow [font-style:var(--button-font-style)]"
            >
              Get Offer!
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
