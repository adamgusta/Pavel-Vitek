import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    name: "Mark Johnson",
    role: "Homeowner",
    title: "Quick and Reliable Service",
    description:
      "I recently had an emergency plumbing issue, and this plumber provided quick and reliable service. They arrived promptly, identified the issue, and resolved it efficiently. I highly recommend this plumber.",
    rating: "5.0",
    ratingBg: "bg-green",
    avatarShape: "w-[105px] h-[71px] -top-0.5 -left-3.5",
  },
  {
    name: "Sarah Kim",
    role: "Property Manager",
    title: "Honest and Transparent Pricing",
    description:
      "This plumber provided honest and transparent pricing for their services. They explained the pricing upfront and provided a detailed breakdown of the costs. I highly recommend this plumber.",
    rating: "4.2",
    ratingBg: "bg-orange",
    avatarShape: "w-[142px] h-[75px] -top-px -left-16",
  },
  {
    name: "David Lee",
    role: "Homeowner",
    title: "Excellent Customer Service",
    description:
      "This plumber provided excellent customer service from start to finish. They were responsive, knowledgeable, and professional throughout the entire process. I highly recommend this plumber.",
    rating: "4.3",
    ratingBg: "bg-orange",
    avatarShape: "w-[117px] h-[78px] top-[-7px] left-[-26px]",
  },
  {
    name: "Jennifer Smith",
    role: "Business Owner",
    title: "Efficient and Thorough Work",
    description:
      "This plumber provided efficient and thorough work for my plumbing issue. They took the time to diagnose the problem, explained the solution, and resolved it quickly. I highly recommend this plumber.",
    rating: "5.0",
    ratingBg: "bg-green",
    avatarShape: "w-[98px] h-[66px] -top-px -left-5",
  },
];

export const ClientTestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-green-light">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 py-[72px] sm:px-10 lg:px-[150px] lg:py-[110px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <header className="flex max-w-[617px] flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-2.5">
                <img className="h-6 w-6" alt="Pipe icon" src="/pipe-icon.svg" />
                <span className="font-sub-1 text-[length:var(--sub-1-font-size)] font-[number:var(--sub-1-font-weight)] leading-[var(--sub-1-line-height)] tracking-[var(--sub-1-letter-spacing)] text-green [font-style:var(--sub-1-font-style)]">
                  Testimonial
                </span>
              </div>
              <h2 className="font-h1 text-[length:var(--h1-font-size)] font-[number:var(--h1-font-weight)] leading-[1.1] tracking-[var(--h1-letter-spacing)] text-dark-blue [font-style:var(--h1-font-style)] max-lg:text-[44px] max-sm:text-[34px]">
                Don&apos;t Just Take Our Word For It
              </h2>
              <p className="max-w-[617px] font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-grey-1 [font-style:var(--paragraph-2-font-style)]">
                At Pipowork, we&apos;re committed to providing our clients with
                exceptional plumbing services and customer support.
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
              className="h-auto rounded-lg bg-yellow px-[50px] py-[18px] font-button text-[length:var(--button-font-size)] font-[number:var(--button-font-weight)] leading-[var(--button-line-height)] tracking-[var(--button-letter-spacing)] text-dark-yellow shadow-none hover:bg-yellow-hover [font-style:var(--button-font-style)]"
            >
              All Testimonial
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
                    <h4 className="mt-[-1.00px] self-stretch font-h6 text-[length:var(--h6-font-size)] font-[number:var(--h6-font-weight)] leading-[var(--h6-line-height)] tracking-[var(--h6-letter-spacing)] text-green [font-style:var(--h6-font-style)]">
                      {testimonial.title}
                    </h4>
                    <p className="self-stretch font-paragraph-2 text-[length:var(--paragraph-2-font-size)] font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-dark-blue [font-style:var(--paragraph-2-font-style)]">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
                <aside
                  className={`flex w-full shrink-0 items-center justify-center px-4 py-8 sm:w-[97px] sm:py-10 ${testimonial.ratingBg}`}
                  aria-label={`Rating ${testimonial.rating}`}
                >
                  <span className="mt-[-1.00px] text-center font-h5 text-[length:var(--h5-font-size)] font-[number:var(--h5-font-weight)] leading-[var(--h5-line-height)] tracking-[var(--h5-letter-spacing)] text-green-light [font-style:var(--h5-font-style)]">
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
