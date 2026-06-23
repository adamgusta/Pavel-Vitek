import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Služby", href: "#sluzby" },
  { label: "O nás", href: "#o-nas" },
  { label: "Pro firmy", href: "#pro-firmy" },
  { label: "Kontakt", href: "#kontakt" },
];

interface NavigationProps {
  scrolled: boolean;
}

export const Navigation = ({ scrolled }: NavigationProps): JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span
            className={`text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-slate-800" : "text-white"
            }`}
          >
            ELVEUL
          </span>
          <span
            className={`hidden text-sm font-medium transition-colors sm:inline ${
              scrolled ? "text-slate-500" : "text-white/80"
            }`}
          >
            | Pavel Vítek
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`text-sm font-medium transition-colors hover:text-sky-500 ${
                scrolled ? "text-slate-600" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+420777725730"
            className="hidden items-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-sky-700 hover:shadow-md md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            <span>+420 777 725 730</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`rounded-lg p-2 md:hidden ${
              scrolled ? "text-slate-700" : "text-white"
            }`}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 shadow-lg md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-sky-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+420777725730"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              <span>+420 777 725 730</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
