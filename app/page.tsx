import Image from "next/image";
import Header from "./Header";
import Reveal from "./Reveal";
import QuoteForm from "./QuoteForm";
import PhotoTile from "./PhotoTile";
import {
  IconArrowRight,
  IconBadge,
  IconBolt,
  IconBuildingHome,
  IconBuildingOffice,
  IconHouseCheck,
  IconPhone,
  IconQuote,
  IconShieldCheck,
  IconTeam,
  IconThumb,
  IconTools,
  IconWhatsapp,
  IconWrench,
} from "./icons";

const SERVICES = [
  {
    title: "AC Maintenance & Services",
    desc: "WeMaintain Technical Service is dedicated to keeping its customers cool and healthy year-round.",
    image: "/images/work-construction.jpg",
  },
  {
    title: "AC Duct Cleaning Services",
    desc: "Dubai's climate demands heavy use of air conditioning systems year-round.",
    image: "/images/work-cleaning.jpg",
  },
  {
    title: "Deep Cleaning Services",
    desc: "Revitalize your space with WeMaintain Technical Services. Our deep cleaning experts handle it all.",
    image: "/images/work-cleaning.jpg",
  },
  {
    title: "Electrical Maintenance & Services",
    desc: "We have a team of qualified electricians available to service all electrical and electromechanical needs.",
    image: "/images/work-electrician.jpg",
  },
  {
    title: "Grouting Services",
    desc: "We Maintain is your trusted solution for all tile and grout needs in Dubai.",
  },
  {
    title: "Painting Services",
    desc: "Enhance your home's aesthetic appeal by taking advantage of our specialized wall painting service.",
    image: "/images/work-architect.jpg",
  },
  {
    title: "Plumbing Maintenance & Services",
    desc: "Our expert plumbers are on hand to assist with all your plumbing maintenance, repair, and installation needs.",
  },
  {
    title: "Solar Heater Services",
    desc: "Keep your solar water heater running efficiently with our expert maintenance services.",
  },
  {
    title: "Water Heater Services",
    desc: "We specialize in top-notch water heater services for homes and businesses across Dubai.",
  },
  {
    title: "Water Tank Cleaning Service",
    desc: "You do not have to be a genius to understand the importance of clean, safe water for your family.",
  },
  {
    title: "Handyman Services",
    desc: "WeMaintain Technical Service provides the best handyman services in Dubai you can trust to get results.",
  },
  {
    title: "Annual Maintenance Contract",
    desc: "We ensure that customer requirements are determined and met with the aim of enhancing customer satisfaction.",
  },
];

const STATS = [
  { icon: <IconTeam />, value: "15+", label: "Team Members" },
  { icon: <IconTools />, value: "200+", label: "Projects Delivered" },
  { icon: <IconHouseCheck />, value: "5+", label: "Years Of Experience" },
  { icon: <IconBadge />, value: "3", label: "Fleets Operational" },
];

const COMMUNITIES = [
  {
    name: "Dubai Holding",
    list: [
      "Mudon Community",
      "Serena Community",
      "Villanova Community",
      "The Villa Community",
      "Remraam Community",
      "JBR Community",
      "Liwan Community",
      "Arjan Community",
      "Dubai Land Residential Complex",
    ],
  },
  {
    name: "Emaar Properties",
    list: [
      "Arabian Ranches Communities",
      "Mira Oasis Community",
      "Dubai Hills Estate Community",
      "Emaar South Community",
      "Downtown Community",
      "The Spring Meadows Community",
      "Emirates Hills Community",
      "Dubai Marina Community",
      "Nshama Town Square Community",
    ],
  },
  {
    name: "Nakheel Properties",
    list: [
      "Palm Jumeirah Community",
      "Jumeirah Park Community",
      "Jumeirah Village Circle",
      "Jumeirah Village Triangle",
      "Discovery Garden Community",
      "Al Furjan Community",
    ],
  },
];

const FOOTER_SERVICES = [
  "AC Maintenance & Services",
  "AC Duct Cleaning Services",
  "Electrical Maintenance & Services",
  "Plumbing Maintenance & Services",
  "Painting Services",
  "Handyman Services",
  "Water Tank Cleaning Service",
  "Solar Heater Services",
  "Water Heater Services",
  "Deep Cleaning Services",
  "Grouting Services",
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* ============================================================ */}
        {/* 1. HERO SECTION: Full-Bleed Architectural Framed Aesthetic   */}
        {/* ============================================================ */}
        <section className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden bg-[#07070a]">
          {/* Architectural Background Photography with Cinematic Overlays */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-technical-service.jpg"
              alt="Professional Technical Maintenance Services Dubai - HVAC & Electrical Engineering"
              fill
              priority
              className="object-cover object-center brightness-[0.82] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-black/40" />
            <div className="absolute inset-0 texture-dots opacity-20" />
          </div>

          {/* Top-Left Editorial Quote (Vitruvius Philosophy) */}
          <Reveal blur className="absolute top-28 left-6 md:top-32 md:left-14 xl:left-20 max-w-[240px] z-10">
            <p className="font-serif italic text-white/60 text-[14px] leading-snug">
              According to Vitruvius, the architect should strive to fulfill each of these three attributes as well as possible.
            </p>
          </Reveal>

          {/* Top-Right Secondary Note */}
          <Reveal blur delay={100} className="hidden sm:block absolute top-28 right-6 md:top-32 md:right-14 xl:right-20 max-w-[220px] text-right z-10">
            <p className="font-heading text-white text-xs font-semibold uppercase tracking-wider mb-1 text-brand">
              What We Do
            </p>
            <p className="text-white/50 text-[12px] leading-relaxed">
              Full-service technical maintenance — AC, electrical, plumbing, painting &amp; care.
            </p>
          </Reveal>

          {/* Bottom Hero Layout: Headline & Callout */}
          <div className="relative z-10 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 pb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 md:gap-10">
            <Reveal blur>
              <h1 className="font-heading text-white text-[2.25rem] sm:text-5xl lg:text-[5.25rem] font-bold uppercase leading-[0.94] tracking-tight">
                Your Best Professional
                <br />
                <span className="text-brand">Technical Services</span>
              </h1>
            </Reveal>

            <Reveal blur delay={150} className="lg:pb-2 shrink-0">
              <div className="flex flex-col items-start lg:items-end gap-2 max-w-[290px] text-left lg:text-right">
                <p className="font-heading text-white text-base font-semibold uppercase tracking-wider">
                  Architecture can mean
                </p>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  A general term to describe buildings and other physical structures. Full-spectrum maintenance &amp; engineering across Dubai.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Bottom Notch Tab for Carousel Dots */}
          <div className="relative z-10 flex justify-center">
            <div className="bg-white text-ink rounded-t-2xl px-8 py-2.5 flex items-center gap-2.5 shadow-[0_-8px_25px_rgba(0,0,0,0.25)]">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === 0 ? "w-6 bg-brand" : "w-1.5 bg-stone-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. FULL-BLEED TRUST BADGES & PRIMARY SERVICES                */}
        {/* ============================================================ */}
        <section className="w-full px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 py-12 md:py-16">
          <Reveal className="flex flex-wrap gap-x-8 gap-y-3 justify-center pb-10 mb-10 border-b border-black/10">
            {[
              { icon: <IconShieldCheck />, label: "Licensed & insured" },
              { icon: <IconBolt />, label: "Same-day dispatch" },
              { icon: <IconTeam />, label: "15+ trained technicians" },
              { icon: <IconPhone />, label: "+971 581020077" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 text-ink-soft text-[13px] font-medium">
                <span className="w-4 h-4 text-brand shrink-0">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </Reveal>

          {/* Two Primary Building Maintenance Cards: Full-Bleed Grid */}
          <div className="grid sm:grid-cols-2 gap-5 xl:gap-8">
            <a
              href="#services"
              className="group relative overflow-hidden flex items-end justify-between gap-4 rounded-3xl min-h-[260px] md:min-h-[300px] p-8 md:p-10 transition-all duration-500 hover:shadow-2xl active:scale-[0.99]"
            >
              <Image
                src="/images/work-construction.jpg"
                alt="Residential Building Maintenance"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
              <div className="relative z-10 flex items-center gap-4 text-white">
                <span className="w-14 h-14 shrink-0 rounded-full bg-brand/30 border border-brand/40 backdrop-blur-md text-white flex items-center justify-center p-3.5">
                  <IconBuildingHome />
                </span>
                <div>
                  <span className="text-xs uppercase tracking-wider text-brand font-semibold">Residential Care</span>
                  <p className="font-heading text-2xl md:text-3xl font-bold leading-snug">
                    Building Maintenance (Residential)
                  </p>
                </div>
              </div>
              <span className="relative z-10 w-11 h-11 rounded-full bg-white text-ink flex items-center justify-center shrink-0 font-bold transition-transform duration-500 group-hover:translate-x-1 shadow-md">
                ›
              </span>
            </a>

            <a
              href="#services"
              className="group relative overflow-hidden flex items-end justify-between gap-4 rounded-3xl min-h-[260px] md:min-h-[300px] p-8 md:p-10 transition-all duration-500 hover:shadow-2xl active:scale-[0.99]"
            >
              <Image
                src="/images/work-cleaning.jpg"
                alt="Commercial Building Maintenance"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
              <div className="relative z-10 flex items-center gap-4 text-white">
                <span className="w-14 h-14 shrink-0 rounded-full bg-white/20 border border-white/30 backdrop-blur-md text-white flex items-center justify-center p-3.5">
                  <IconBuildingOffice />
                </span>
                <div>
                  <span className="text-xs uppercase tracking-wider text-brand font-semibold">Corporate &amp; Facility</span>
                  <p className="font-heading text-2xl md:text-3xl font-bold leading-snug">
                    Building Maintenance (Commercial)
                  </p>
                </div>
              </div>
              <span className="relative z-10 w-11 h-11 rounded-full bg-white text-ink flex items-center justify-center shrink-0 font-bold transition-transform duration-500 group-hover:translate-x-1 shadow-md">
                ›
              </span>
            </a>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. FULL-BLEED ABOUT SECTION: Widescreen Editorial Layout     */}
        {/* ============================================================ */}
        <section id="about" className="w-full px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 py-20 md:py-28 grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <Reveal className="grid grid-cols-2 gap-4 sm:gap-6">
            <PhotoTile
              imageSrc="/images/work-architect.jpg"
              icon={<IconTeam />}
              className="col-span-2 aspect-[16/10] rounded-3xl shadow-lg"
            />
            <PhotoTile
              imageSrc="/images/work-electrician.jpg"
              icon={<IconWrench />}
              className="aspect-square rounded-3xl shadow-lg"
            />
            <div className="bg-ink rounded-3xl flex flex-col justify-center items-center text-center text-white p-6 md:p-8 shadow-lg">
              <p className="font-heading text-4xl sm:text-5xl font-bold text-brand">200+</p>
              <p className="text-sm font-medium mt-1 text-white/80">Projects Completed</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-brand font-semibold text-sm tracking-widest uppercase mb-3">About company</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              We Are One Of Dubai&apos;s Premier Technical Services Providers
            </h2>
            <p className="text-ink-soft mt-6 leading-relaxed text-base lg:text-lg">
              At We Maintain, we take pride in being your trusted partner for all home and facility maintenance services.
              Whether it&apos;s fixing, installing, or continuous preventative care, our specialized engineering team delivers
              reliable, high-standard solutions for villas, penthouses, and commercial landmarks across Dubai.
            </p>

            <div className="mt-8 bg-[#f8f7f4] border border-black/5 rounded-2xl p-6 relative overflow-hidden">
              <IconQuote className="absolute top-4 right-5 w-12 h-12 text-brand/20" />
              <p className="font-heading text-lg sm:text-xl font-semibold leading-snug relative text-ink">
                WeMaintain Technical Services LLC is a leading home maintenance company
                serving customers throughout Dubai at highly competitive prices.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-brand text-white font-semibold text-sm rounded-full pl-6 pr-2 py-2 mt-8 transition-transform duration-300 hover:bg-brand-dark shadow-md"
            >
              Enquire Now
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <IconArrowRight className="w-4 h-4" />
              </span>
            </a>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 border-t border-black/10 pt-8">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full border border-ink/10 flex items-center justify-center p-3 text-ink mb-2">
                    {s.icon}
                  </div>
                  <p className="font-heading text-2xl font-bold">{s.value}</p>
                  <p className="text-xs text-ink-soft mt-0.5 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ============================================================ */}
        {/* 4. FULL-BLEED SERVICES GRID                                  */}
        {/* ============================================================ */}
        <section id="services" className="bg-near-black py-20 md:py-28">
          <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
            <Reveal>
              <p className="text-brand font-semibold text-sm tracking-widest uppercase text-center mb-2">
                Specialized Solutions
              </p>
              <h2 className="font-heading text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-14">
                Our Services
              </h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} delay={(i % 4) * 80}>
                  <article className="group bg-[#141414] rounded-2xl p-2.5 ring-1 ring-white/10 hover:ring-brand/50 transition-all duration-500 h-full flex flex-col hover:-translate-y-1 shadow-lg">
                    <PhotoTile
                      imageSrc={s.image}
                      icon={<IconTools />}
                      tone={i % 3 === 0 ? "amber" : i % 3 === 1 ? "navy" : "slate"}
                      className="aspect-[16/10] rounded-xl"
                    />
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-heading text-white text-lg font-semibold group-hover:text-brand transition-colors">
                          {s.title}
                        </h3>
                        <p className="text-white/55 text-sm mt-2 leading-relaxed">{s.desc}</p>
                      </div>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-brand mt-5 uppercase tracking-wider group-hover:underline"
                      >
                        Book Service ›
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. FULL-BLEED BANNER CTA                                     */}
        {/* ============================================================ */}
        <Reveal className="w-full px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 -mt-2 md:mt-0 relative z-10">
          <div className="relative overflow-hidden bg-brand rounded-3xl px-8 py-10 md:px-14 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 -translate-y-10 md:-translate-y-16 shadow-[0_40px_70px_-30px_rgba(246,166,35,0.5)]">
            <div className="blob-orange absolute inset-0" />
            <p className="relative font-heading text-white text-2xl sm:text-3xl font-semibold leading-snug max-w-2xl">
              &ldquo;Empowering Dubai with Reliable Home Maintenance Solutions — Your Partner
              in Excellence!&rdquo;
            </p>
            <a
              href="#contact"
              className="relative shrink-0 bg-ink text-white font-semibold text-sm rounded-full px-8 py-4 hover:bg-navy transition-colors duration-500 shadow-lg"
            >
              Enquire Now
            </a>
          </div>
        </Reveal>

        {/* ============================================================ */}
        {/* 6. FULL-BLEED COMMUNITIES WE SERVE                           */}
        {/* ============================================================ */}
        <section className="bg-[#f8f7f4] py-20 md:py-28 border-t border-black/5">
          <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
            <Reveal>
              <p className="text-brand font-semibold text-sm tracking-widest uppercase mb-2">Coverage</p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-12">Communities We Serve</h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {COMMUNITIES.map((c, i) => (
                <Reveal key={c.name} delay={i * 100}>
                  <div className="bg-white rounded-3xl p-8 ring-1 ring-black/5 shadow-sm h-full hover:shadow-md transition-shadow">
                    <p className="font-heading font-bold text-xl mb-5 text-brand">{c.name}</p>
                    <ul className="space-y-3 text-sm text-ink-soft">
                      {c.list.map((l) => (
                        <li key={l} className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-brand/70 shrink-0" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. FULL-BLEED CONTACT / QUOTE FORM                           */}
        {/* ============================================================ */}
        <section id="contact" className="w-full px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 py-20 md:py-28 grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <Reveal className="flex flex-col justify-center">
            <p className="text-brand font-semibold text-sm tracking-widest uppercase mb-3">Get in Touch</p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Request Your Free Maintenance Quote
            </h2>
            <p className="text-ink-soft mt-5 leading-relaxed text-base lg:text-lg max-w-lg">
              Fast, dependable technical assistance throughout Dubai. Fill out the form or call our direct line for same-day dispatch.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="tel:+971581020077"
                className="inline-flex items-center gap-3 bg-stone-100 hover:bg-stone-200 text-ink font-semibold text-sm rounded-full px-7 py-3.5 transition-colors shadow-sm"
              >
                <IconPhone className="w-4 h-4 text-brand" />
                +971 581020077
              </a>
              <a
                href="https://wa.me/971581020077"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-semibold text-sm rounded-full px-7 py-3.5 transition-colors"
              >
                <IconWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="w-full max-w-2xl lg:ml-auto">
              <QuoteForm />
            </div>
          </Reveal>
        </section>
      </main>

      {/* ============================================================ */}
      {/* 8. FULL-BLEED FOOTER                                         */}
      {/* ============================================================ */}
      <footer id="blog" className="bg-navy text-white/70">
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 py-16 md:py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-14">
          <div>
            <h4 className="font-heading text-white font-semibold text-base mb-1">About Us</h4>
            <div className="w-8 h-0.5 bg-brand mb-4" />
            <p className="text-sm leading-relaxed">
              We Maintain delivers reliable, high-quality home maintenance services. From quick
              fixes to full installations, our expert team ensures that every task is handled
              with care and efficiency. Simplify your life with services you can trust.
            </p>
            <p className="text-brand text-sm font-semibold mt-5">Emergency Contact:</p>
            <p className="text-white text-sm">+971 581020077</p>
          </div>

          <div>
            <h4 className="font-heading text-white font-semibold text-base mb-1">Services</h4>
            <div className="w-8 h-0.5 bg-brand mb-4" />
            <ul className="space-y-2 text-sm">
              {FOOTER_SERVICES.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="text-brand">»</span> {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white font-semibold text-base mb-1">Quick Links</h4>
            <div className="w-8 h-0.5 bg-brand mb-4" />
            <ul className="space-y-2 text-sm">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Services", "#services"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label} className="flex items-center gap-2">
                  <span className="text-brand">»</span>{" "}
                  <a href={href} className="hover:text-brand transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white font-semibold text-base mb-1">Contact Info</h4>
            <div className="w-8 h-0.5 bg-brand mb-4" />
            <p className="text-sm leading-relaxed">
              Wavez by Danube Properties - Office No.11-14O - 1st Floor - Liwan - Dubai -
              United Arab Emirates
            </p>
            <p className="text-sm mt-4">
              <span className="text-brand font-semibold">Support:</span>
              <br />
              +971 581020077
            </p>
            <p className="text-sm mt-3">
              <span className="text-brand font-semibold">Email:</span>
              <br />
              admin@wemaintain.ae
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
          © {new Date().getFullYear()} WeMaintain Technical Services LLC. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Quick Action */}
      <a
        href="https://wa.me/971581020077"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center p-3.5 shadow-[0_15px_30px_-10px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-transform duration-500"
      >
        <IconWhatsapp />
      </a>
    </>
  );
}
