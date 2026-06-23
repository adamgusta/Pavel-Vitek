import { useState } from "react";
import { Phone, Mail, MapPin, Send, CircleCheck as CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactSection = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = "Vyplňte prosím jméno";
    if (!formData.email.trim()) {
      newErrors.email = "Vyplňte prosím e-mail";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Zadejte platný e-mail";
    }
    if (!formData.message.trim()) newErrors.message = "Napište nám zprávu";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 4000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const contactDetails = [
    {
      icon: Phone,
      label: "Telefon",
      value: "+420 777 725 730",
      href: "tel:+420777725730",
    },
    {
      icon: Phone,
      label: "Telefon 2",
      value: "+420 603 514 112",
      href: "tel:+420603514112",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "elveul@seznam.cz",
      href: "mailto:elveul@seznam.cz",
    },
    {
      icon: MapPin,
      label: "Adresa",
      value: "Na Spálence 523/40, 400 01 Ústí nad Labem",
      href: "https://maps.google.com/?q=Na+Spálence+523/40,+Ústí+nad+Labem",
    },
  ];

  return (
    <section id="kontakt" className="w-full bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">
            Kontakt
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Napište nám nebo zavolejte
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Rádi vám pomůžeme s vaším projektem. Odpovíme do 24 hodin.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-slate-800">
              Kontaktní údaje
            </h3>
            <div className="flex flex-col gap-4">
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  target={detail.href.startsWith("http") ? "_blank" : undefined}
                  rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:border-sky-200 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                    <detail.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      {detail.label}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-800">
                      {detail.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <iframe
                title="Mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.0!2d14.0326!3d50.6592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDM5JzMzLjEiTiAxNMKwMDEnNTcuNCJF!5e0!3m2!1scs!2scz!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.2]"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-900/5">
            <h3 className="text-lg font-semibold text-slate-800">
              Nezávazná poptávka
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Vyplňte formulář a my se vám ozveme.
            </p>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center gap-4 rounded-xl bg-green-50 p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-green-800">
                  Děkujeme za poptávku!
                </h4>
                <p className="text-sm text-green-700">
                  Ozveme se vám co nejdříve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Jméno / Firma
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Vaše jméno nebo název firmy"
                    className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 ${
                      errors.name ? "border-red-300" : "border-slate-200"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vas@email.cz"
                      className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 ${
                        errors.email ? "border-red-300" : "border-slate-200"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Telefon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+420 123 456 789"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Text zprávy
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Popište váš projekt nebo poptávku..."
                    className={`w-full resize-none rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 ${
                      errors.message ? "border-red-300" : "border-slate-200"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-900/20 transition-all hover:bg-sky-700 hover:shadow-xl"
                >
                  <Send className="h-5 w-5" />
                  Odeslat poptávku
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
