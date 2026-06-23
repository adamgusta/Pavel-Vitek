import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const companyIntroContent = {
  eyebrow: "About Us",
  title: "Experience Expert Plumbing Services",
  description:
    "At Pipowork, we understand the importance of having a reliable plumbing system. That's why we're committed to providing our clients with top-quality plumbing services they can trust.",
  cta: "Learn More",
  pipeIconSrc: "/pipe-icon.svg",
  lineSrc: "/line-2-3.svg",
  logoSrc: "/logo.svg",
};

export const CompanyIntroSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-6 pt-0 pb-[110px] sm:px-10 lg:px-[150px]">
        <img
          className="h-auto w-full max-w-[1140px]"
          alt="Logo"
          src={companyIntroContent.logoSrc}
        />
        <img
          className="mt-[63px] h-px w-full max-w-[1140px]"
          alt="Line"
          src={companyIntroContent.lineSrc}
        />
        <div className="mt-[96px] grid items-center gap-10 lg:grid-cols-[minmax(0,560px)_minmax(0,502px)] lg:justify-between lg:gap-[78px]">
          <article className="flex max-w-[560px] flex-col items-start gap-6">
            <header className="flex flex-col items-start gap-4">
              <div className="inline-flex items-center gap-2.5">
                <img
                  className="h-6 w-6"
                  alt="Pipe icon"
                  src={companyIntroContent.pipeIconSrc}
                />
                <p className="w-fit font-sub-1 text-[length:var(--sub-1-font-size)] font-[number:var(--sub-1-font-weight)] leading-[var(--sub-1-line-height)] tracking-[var(--sub-1-letter-spacing)] text-green [font-style:var(--sub-1-font-style)]">
                  {companyIntroContent.eyebrow}
                </p>
              </div>
              <h2 className="max-w-[560px] font-h1 text-[length:var(--h1-font-size)] font-[number:var(--h1-font-weight)] leading-[1.05] tracking-[var(--h1-letter-spacing)] text-dark-blue [font-style:var(--h1-font-style)] max-md:text-[44px] max-sm:text-[36px]">
                {companyIntroContent.title}
              </h2>
              <p className="max-w-[560px] font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-grey-1 [font-style:var(--paragraph-2-font-style)]">
                {companyIntroContent.description}
              </p>
            </header>
            <Button
              type="button"
              className="h-auto rounded-lg bg-yellow px-[50px] py-[18px] font-button text-[length:var(--button-font-size)] font-[number:var(--button-font-weight)] leading-[var(--button-line-height)] tracking-[var(--button-letter-spacing)] text-dark-yellow hover:bg-yellow-hover [font-style:var(--button-font-style)]"
            >
              {companyIntroContent.cta}
            </Button>
          </article>
          <Card className="w-full max-w-[502px] overflow-hidden rounded-xl border-0 bg-grey-3 shadow-none">
            <CardContent className="p-0">
              <div className="h-[390px] overflow-hidden">
                <div className="-ml-[103px] -mt-[29px] h-[449px] w-[675px] bg-grey-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
