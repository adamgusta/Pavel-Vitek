import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const blogPosts = [
  {
    category: "Tipy a rady",
    date: "10. ledna 2026",
    title: "Jak předejít zamrznutí potrubí v zimě",
    description:
      "Zjistěte, jak účinně chránit vodovodní trubky před mrazem během zimních měsíců a vyhnout se tak drahým opravám.",
    imageWrapperClassName: "rounded-t-[12px]",
    imageInnerClassName:
      "absolute top-[-55px] left-[-15px] h-[283px] w-[397px] bg-grey-2",
  },
  {
    category: "Technologie",
    date: "5. února 2026",
    title: "Výhody moderních ohřívačů vody",
    description:
      "Objevte výhody moderních průtokových ohřívačů a bojlerů, včetně úspory energie a stálého přísunu teplé vody.",
    imageWrapperClassName: "rounded-t-[12px]",
    imageInnerClassName:
      "absolute top-[-23px] left-[-15px] h-[265px] w-[397px] bg-grey-2",
  },
  {
    category: "Údržba",
    date: "1. března 2026",
    title: "Jak na tvrdou vodu v domácnosti",
    description:
      "Máte problémy s usazováním vodního kamene? Přečtěte si, jaké jsou příznaky tvrdé vody a jak vám může pomoci změkčovač.",
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
            <p className="font-sub-1 text-[length:var(--sub-1-font-size)] font-[number:var(--sub-1-font-weight)] leading-[var(--sub-1-line-height)] tracking-[var(--sub-1-letter-spacing)] text-sky-600 [font-style:var(--sub-1-font-style)]">
              Náš Blog
            </p>
          </div>
          <h2 className="max-w-[949px] font-h1 text-[40px] font-[number:var(--h1-font-weight)] leading-tight tracking-[var(--h1-letter-spacing)] text-dark-blue [font-style:var(--h1-font-style)] sm:text-[48px] lg:text-[64px] lg:leading-[var(--h1-line-height)]">
            Užitečné tipy, rady a novinky z oboru
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
                    <Badge className="absolute left-8 top-[174px] rounded-lg bg-sky-50 px-2.5 py-1 font-sub-1 text-[length:var(--sub-1-font-size)] font-[number:var(--sub-1-font-weight)] leading-[var(--sub-1-line-height)] tracking-[var(--sub-1-letter-spacing)] text-sky-700 hover:bg-sky-50 [font-style:var(--sub-1-font-style)]">
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
                      className="h-auto w-fit p-0 font-button text-[length:var(--button-font-size)] font-[number:var(--button-font-weight)] leading-[var(--button-line-height)] tracking-[var(--button-letter-spacing)] text-sky-600 hover:bg-transparent hover:text-sky-500 [font-style:var(--button-font-style)]"
                    >
                      <span>Číst více</span>
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
