import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const blogPosts = [
  {
    category: "Plumbing Tips",
    date: "January 10, 2023",
    title: "How to Prevent Frozen Pipes in Winter",
    description:
      "Learn how to prevent frozen pipes during the cold winter months and avoid costly repairs with these helpful tips.",
    imageWrapperClassName: "rounded-t-[12px]",
    imageInnerClassName:
      "absolute top-[-55px] left-[-15px] h-[283px] w-[397px] bg-grey-2",
  },
  {
    category: "Product Spotlight",
    date: "February 5, 2023",
    title: "The Benefits of a Tankless Water Heater",
    description:
      "Discover the benefits of a tankless water heater, including increased energy efficiency and cost savings.",
    imageWrapperClassName: "rounded-t-[12px]",
    imageInnerClassName:
      "absolute top-[-23px] left-[-15px] h-[265px] w-[397px] bg-grey-2",
  },
  {
    category: "Maintenance Tips",
    date: "March 1, 2023",
    title: "Signs You Need a Water Softener",
    description:
      "Are you experiencing issues with hard water? Learn how to identify the signs that you need a water softener in your home.",
    imageWrapperClassName: "rounded-t-[12px]",
    imageInnerClassName:
      "absolute top-[-19px] -left-2.5 h-[259px] w-[388px] bg-grey-2",
  },
];

export const PlumbingInsightsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1140px] flex-col items-center">
        <header className="flex max-w-[949px] flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2.5">
            <img className="h-6 w-6" alt="Pipe icon" src="/pipe-icon.svg" />
            <p className="font-sub-1 text-[length:var(--sub-1-font-size)] font-[number:var(--sub-1-font-weight)] leading-[var(--sub-1-line-height)] tracking-[var(--sub-1-letter-spacing)] text-green [font-style:var(--sub-1-font-style)]">
              Our Blog
            </p>
          </div>
          <h2 className="max-w-[949px] font-h1 text-[40px] font-[number:var(--h1-font-weight)] leading-tight tracking-[var(--h1-letter-spacing)] text-dark-blue [font-style:var(--h1-font-style)] sm:text-[48px] lg:text-[64px] lg:leading-[var(--h1-line-height)]">
            Stay Up-to-Date with Plumbing Tips and Trends
          </h2>
        </header>
        <div className="mt-12 grid w-full grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="w-full">
              <Card className="overflow-hidden rounded-[12px] border-0 bg-transparent shadow-none">
                <CardContent className="p-0">
                  <div
                    className={`relative h-[220px] overflow-hidden bg-grey-2 ${post.imageWrapperClassName}`}
                  >
                    <div className={post.imageInnerClassName} />
                    <Badge className="absolute left-8 top-[174px] rounded-lg bg-green-light px-2.5 py-1 font-sub-1 text-[length:var(--sub-1-font-size)] font-[number:var(--sub-1-font-weight)] leading-[var(--sub-1-line-height)] tracking-[var(--sub-1-letter-spacing)] text-green hover:bg-green-light [font-style:var(--sub-1-font-style)]">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="flex flex-col gap-5 rounded-b-[12px] bg-grey-light-2 px-8 pb-8 pt-4">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1.5">
                        <p className="font-sub-2 text-[length:var(--sub-2-font-size)] font-[number:var(--sub-2-font-weight)] leading-[var(--sub-2-line-height)] tracking-[var(--sub-2-letter-spacing)] text-grey-1 [font-style:var(--sub-2-font-style)]">
                          {post.date}
                        </p>
                        <h3 className="font-h5 text-[length:var(--h5-font-size)] font-[number:var(--h5-font-weight)] leading-[var(--h5-line-height)] tracking-[var(--h5-letter-spacing)] text-dark-blue [font-style:var(--h5-font-style)]">
                          {post.title}
                        </h3>
                      </div>
                      <p className="font-paragraph-3 text-[length:var(--paragraph-3-font-size)] font-[number:var(--paragraph-3-font-weight)] leading-[var(--paragraph-3-line-height)] tracking-[var(--paragraph-3-letter-spacing)] text-grey-1 [font-style:var(--paragraph-3-font-style)]">
                        {post.description}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      className="h-auto w-fit p-0 font-button text-[length:var(--button-font-size)] font-[number:var(--button-font-weight)] leading-[var(--button-line-height)] tracking-[var(--button-letter-spacing)] text-yellow-hover hover:bg-transparent hover:text-yellow-hover [font-style:var(--button-font-style)]"
                    >
                      <span>Read More</span>
                      <img
                        className="ml-2.5 h-[7.36px] w-[32.5px]"
                        alt="Line"
                        src="/line-2.svg"
                      />
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
