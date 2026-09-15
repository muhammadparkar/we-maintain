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
  },
  {
    title: "AC Duct Cleaning Services",
    desc: "Dubai's climate demands heavy use of air conditioning systems year-round.",
  },
  {
    title: "Deep Cleaning Services",
    desc: "Revitalize your space with WeMaintain Technical Services. Our deep cleaning experts handle it all.",
  },
  {
    title: "Electrical Maintenance & Services",
    desc: "We have a team of qualified electricians available to service all electrical and electromechanical needs.",
  },
  {
    title: "Grouting Services",
    desc: "We Maintain is your trusted solution for all tile and grout needs in Dubai.",
  },
  {
    title: "Painting Services",
    desc: "Enhance your home's aesthetic appeal by taking advantage of our specialized wall painting service.",
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
    list: ["Mudon Community", "Serena Community", "Villanova Community", "The Villa Community", "Remraam Community", "JBR Community", "Liwan Community", "Arjan Community", "Dubai Land Residential Complex"],
  },
  {
    name: "Emaar Properties",
    list: ["Arabian Ranches Communities", "Mira Oasis Community", "Dubai Hills Estate Community", "Emaar South Community", "Downtown Community", "The Spring Meadows Community", "Emirates Hills Community", "Dubai Marina Community", "Nshama Town Square Community"],
  },
  {
    name: "Nakheel Properties",
    list: ["Palm Jumeirah Community", "Jumeirah Park Community", "Jumeirah Village Circle", "Jumeirah Village Triangle", "Discovery Garden Community", "Al Furjan Community"],
  },
];

const TEAM_TONES = ["amber", "navy", "slate", "navy", "amber", "slate"] as const;

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
        {/* HERO */}
        <section className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden bg-[#07070a]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#241c10] via-[#141414] to-[#0b0b0d]" />
          <div className="absolute inset-0 texture-dots opacity-60" />
          <div className="absolute -top-32 -left-20 w-[28rem] h-[28rem] rounded-full bg-brand/25 blur-[130px]" />
          <div className="absolute bottom-0 right-0 w-[22rem] h-[22rem] rounded-full bg-[#3a2c14] blur-[120px]" />

          <Reveal blur className="absolute top-28 left-5 md:top-32 md:left-12 max-w-[210px] z-10">
            <p className="font-serif italic text-white/45 text-[15px] leading-snug">
              Trusted by residents &amp; property managers across Dubai since 2019.
            </p>
          </Reveal>

          <Reveal blur delay={100} className="hidden sm:block absolute top-28 right-5 md:top-32 md:right-12 max-w-[220px] text-right z-10">
            <p className="font-heading text-white text-sm font-semibold uppercase tracking-wide mb-1">
              What we do
            </p>
            <p className="text-white/45 text-[13px] leading-relaxed">
              Full-service technical maintenance — AC, electrical, plumbing, painting and
              more, all under one roof.
            </p>
          </Reveal>

          <div className="relative z-10 px-6 md:px-14 pb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <Reveal blur>
              <h1 className="font-heading text-white text-[2.75rem] sm:text-7xl lg:text-[6rem] font-bold uppercase leading-[0.9]">
                Your Best
                <br />
                <span className="font-serif italic normal-case font-medium text-brand">
                  Technical Service
                </span>
              </h1>
            </Reveal>

            <Reveal blur delay={150} className="lg:pb-3 shrink-0">
              <div className="flex flex-col items-start gap-5 max-w-[240px]">
                <p className="text-white/55 text-sm leading-relaxed">
                  Professional AC, electrical, plumbing &amp; building maintenance for
                  homes and businesses across Dubai.
                </p>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 bg-brand text-white font-semibold text-sm rounded-full pl-6 pr-2 py-2 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                >
                  Get free quote
                  <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
                    <IconArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* ponytail: static index dots, wire to a real carousel state if the hero ever rotates multiple images */}
          <div className="relative z-10 flex items-center justify-center gap-2 pb-8">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === 0 ? "w-6 bg-brand" : "w-1.5 bg-white/25"
                }`}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">
          <Reveal className="flex flex-wrap gap-x-8 gap-y-3 justify-center pb-10 mb-10 border-b border-black/10">
            {[
              { icon: <IconShieldCheck />, label: "Licensed & insured" },
              { icon: <IconBolt />, label: "Same-day dispatch" },
              { icon: <IconTeam />, label: "15+ trained technicians" },
              { icon: <IconPhone />, label: "+971 581020077" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 text-ink-soft text-[13px]">
                <span className="w-4 h-4 text-brand shrink-0">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="#services"
              className="group relative overflow-hidden flex items-center justify-between gap-4 bg-brand text-white rounded-2xl px-7 py-6 transition-transform duration-500 active:scale-[0.99]"
            >
              <span className="flex items-center gap-4">
                <span className="w-11 h-11 shrink-0 rounded-full bg-white/15 flex items-center justify-center p-2.5">
                  <IconBuildingHome />
                </span>
                <span className="font-heading text-lg font-semibold leading-snug">
                  Building Maintenance
                  <br />
                  Service (Residential)
                </span>
              </span>
              <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
                <IconArrowRight className="w-4 h-4" />
              </span>
            </a>
            <a
              href="#services"
              className="group relative overflow-hidden flex items-center justify-between gap-4 bg-ink text-white rounded-2xl px-7 py-6 transition-transform duration-500 active:scale-[0.99]"
            >
              <span className="flex items-center gap-4">
                <span className="w-11 h-11 shrink-0 rounded-full bg-brand/20 text-brand flex items-center justify-center p-2.5">
                  <IconBuildingOffice />
                </span>
                <span className="font-heading text-lg font-semibold leading-snug">
                  Building Maintenance
                  <br />
                  Service (Commercial)
                </span>
              </span>
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
                <IconArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
          <Reveal className="grid grid-cols-2 gap-4">
            <PhotoTile icon={<IconTeam />} tone="slate" className="col-span-2 aspect-[4/3] rounded-2xl" />
            <PhotoTile icon={<IconWrench />} tone="amber" className="aspect-square rounded-2xl" />
            <div className="bg-ink rounded-2xl flex flex-col justify-center items-center text-center text-white p-4">
              <p className="font-heading text-3xl font-bold text-brand">200+</p>
              <p className="text-sm font-medium mt-1">Projects Completed</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-brand font-semibold text-sm tracking-wide uppercase mb-3">About company</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight max-w-lg">
              We Are One Of The Most Popular Home Maintenance Company In Dubai
            </h2>
            <p className="text-ink-soft mt-5 leading-relaxed max-w-xl">
              At We Maintain, we take pride in being your trusted partner for all home
              maintenance services. Whether it&apos;s fixing, installing, or maintaining, our
              expert team is committed to delivering high-quality, efficient, and reliable
              solutions for homes and businesses. With a focus on excellence and attention to
              detail, we ensure that every task, no matter how small or big, is handled with
              the utmost care. From quick fixes to ongoing maintenance, We Maintain is here to
              simplify your life, one service at a time.
            </p>

            <div className="mt-8 bg-[#f4f4f4] rounded-2xl p-6 relative overflow-hidden max-w-xl">
              <IconQuote className="absolute top-4 right-5 w-10 h-10 text-brand/20" />
              <p className="font-heading text-lg font-semibold leading-snug relative">
                WeMaintain Technical Services LLC is a leading home maintenance company
                serving customers throughout Dubai at highly competitive prices.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-brand text-white font-semibold text-sm rounded-full pl-6 pr-2 py-2 mt-8"
            >
              Enquire Now
              <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1">
                <IconArrowRight className="w-4 h-4" />
              </span>
            </a>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 max-w-xl">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-full border border-ink/10 flex items-center justify-center p-3.5 text-ink mb-3">
                    {s.icon}
                  </div>
                  <p className="font-heading text-2xl font-bold">{s.value}</p>
                  <p className="text-xs text-ink-soft mt-1 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-near-black py-20 md:py-28">
          <Reveal>
            <h2 className="font-heading text-white text-3xl sm:text-4xl font-bold text-center mb-14">
              Our Services
            </h2>
          </Reveal>
          <div className="mx-auto max-w-7xl px-5 md:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 100}>
                <article className="group bg-[#141414] rounded-2xl p-1.5 ring-1 ring-white/5 hover:ring-brand/40 transition-all duration-500">
                  <PhotoTile
                    icon={<IconTools />}
                    tone={i % 3 === 0 ? "amber" : i % 3 === 1 ? "navy" : "slate"}
                    className="aspect-[4/3] rounded-xl"
                  />
                  <div className="p-5">
                    <h3 className="font-heading text-white text-lg font-semibold">{s.title}</h3>
                    <p className="text-white/55 text-sm mt-2 leading-relaxed">{s.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA 1 */}
        <Reveal className="mx-auto max-w-7xl px-5 md:px-8 -mt-2 md:mt-0 relative z-10">
          <div className="relative overflow-hidden bg-brand rounded-3xl px-7 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 -translate-y-10 md:-translate-y-16 shadow-[0_40px_70px_-30px_rgba(246,166,35,0.5)]">
            <div className="blob-orange absolute inset-0" />
            <p className="relative font-heading text-white text-xl sm:text-2xl font-semibold leading-snug max-w-xl">
              &ldquo;Empowering Dubai with Reliable Home Maintenance Solutions — Your Partner
              in Excellence!&rdquo;
            </p>
            <a
              href="#contact"
              className="relative shrink-0 bg-ink text-white font-semibold text-sm rounded-full px-7 py-3.5 hover:bg-navy transition-colors duration-500"
            >
              Enquire
            </a>
          </div>
        </Reveal>

        {/* WHAT WE DO */}
        <section className="mx-auto max-w-7xl px-5 md:px-8 pb-20 md:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-brand font-semibold text-sm tracking-wide uppercase mb-3">Why Choose Us</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">WHAT WE DO</h2>
            <p className="text-ink-soft mt-5 leading-relaxed max-w-lg">
              Our maintenance and repair services include air-conditioning and ventilation,
              plumbing and sanitary ware, tile and masonry work, painting and decorating,
              carpentry and flooring, plaster and cladding, electrical work, partitions and
              false ceilings, external building cleaning services, home improvements and
              general handyman. Additional maintenance, repair and installation services are
              available upon request.
            </p>

            <div className="mt-8 space-y-6 max-w-lg">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-navy text-white flex items-center justify-center p-3">
                  <IconWrench />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-base">OUR MISSION</h3>
                  <p className="text-ink-soft text-sm mt-1 leading-relaxed">
                    Taking the lead to keep your assets alive. We strive to ensure providing
                    the best quality services with a commitment to our clients.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-navy text-white flex items-center justify-center p-3">
                  <IconThumb />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-base">OUR VISION</h3>
                  <p className="text-ink-soft text-sm mt-1 leading-relaxed">
                    To foster and enhance the initiatives of environment protection by
                    ensuring that all stakeholder activities are carried out in a healthy,
                    safe, and environmentally responsible manner.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <PhotoTile icon={<IconHouseCheck />} tone="navy" className="aspect-[4/5] rounded-[1.75rem]" />
          </Reveal>
        </section>

        {/* TEAM */}
        <section id="team" className="mx-auto max-w-7xl px-5 md:px-8 pb-16">
          <Reveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-12">Our Team</h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {TEAM_TONES.map((tone, i) => (
              <Reveal key={i} delay={(i % 3) * 100}>
                <PhotoTile icon={<IconTeam />} tone={tone} className="aspect-square rounded-2xl" />
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA 2 */}
        <Reveal className="mx-auto max-w-7xl px-5 md:px-8 pb-20 md:pb-28">
          <div className="relative overflow-hidden bg-brand rounded-3xl px-7 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="blob-orange absolute inset-0" />
            <div className="relative max-w-xl">
              <h3 className="font-heading text-white text-xl sm:text-2xl font-bold mb-2">
                Your One-Stop Solution
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                At We Maintain, no job is too small or too big. Our goal is to make your life
                easier by offering reliable technical services that address your every need.
                Let&apos;s take the hassle out of maintenance. Contact us today and experience
                the difference with We Maintain.
              </p>
            </div>
            <a
              href="#contact"
              className="relative shrink-0 bg-ink text-white font-semibold text-sm rounded-full px-7 py-3.5 hover:bg-navy transition-colors duration-500"
            >
              Enquire
            </a>
          </div>
        </Reveal>

        {/* COMMUNITIES */}
        <section className="bg-[#f6f6f6] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-12">Communities We Serve</h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMMUNITIES.map((c, i) => (
                <Reveal key={c.name} delay={i * 100}>
                  <div className="bg-white rounded-2xl p-1.5 ring-1 ring-black/5 h-full">
                    <div className="rounded-xl bg-white h-full p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
                      <p className="font-heading font-bold text-lg mb-4">{c.name}</p>
                      <ul className="space-y-2 text-sm text-ink-soft">
                        {c.list.map((l) => (
                          <li key={l}>{l}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="text-center mt-10">
              <button className="bg-ink text-white font-semibold text-sm rounded-full px-8 py-3.5 hover:bg-navy transition-colors duration-500">
                View More
              </button>
            </Reveal>
          </div>
        </section>

        {/* QUOTE / CONTACT */}
        <section id="contact" className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              <div className="absolute inset-8 rounded-full bg-brand/10" />
              <div className="absolute inset-0 flex items-center justify-center text-brand">
                <IconWrench className="w-32 h-32" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <QuoteForm />
          </Reveal>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="blog" className="bg-navy text-white/70">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="font-heading text-white font-semibold text-base mb-1">About Us</h4>
            <div className="w-8 h-0.5 bg-brand mb-4" />
            <p className="text-sm leading-relaxed">
              We Maintain deliver reliable, high-quality home maintenance services. From quick
              fixes to full installations, our expert team ensures that every task is handled
              with care and efficiency. Simplify your life with services you can trust, every
              time.
            </p>
            <p className="text-brand text-sm font-semibold mt-5">Emergency:</p>
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
                ["Team", "#team"],
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
