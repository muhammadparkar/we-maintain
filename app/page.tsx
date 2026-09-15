import Image from "next/image";
import Header from "./Header";
import Reveal from "./Reveal";
import QuoteForm from "./QuoteForm";
import PhotoTile from "./PhotoTile";
import {
  IconArrowRight,
  IconBadge,
  IconBuildingHome,
  IconBuildingOffice,
  IconHouseCheck,
  IconQuote,
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
    image: "/images/service-ac-maint.jpg",
  },
  {
    title: "AC Duct Cleaning Services",
    desc: "Dubai's climate demands heavy use of air conditioning systems year-round.",
    image: "/images/service-ac-duct.jpg",
  },
  {
    title: "Deep Cleaning Services",
    desc: "Revitalize your space with WeMaintain Technical Services. Our deep cleaning experts handle it all.",
    image: "/images/service-deep-cleaning.jpg",
  },
  {
    title: "Electrical Maintenance & Services",
    desc: "We have a team of qualified electricians available to service all electrical and electromechanical needs.",
    image: "/images/service-electrical.jpg",
  },
  {
    title: "Grouting Services",
    desc: "We Maintain is your trusted solution for all tile and grout needs in Dubai.",
    image: "/images/service-grouting.jpg",
  },
  {
    title: "Painting Services",
    desc: "Enhance your home's aesthetic appeal by taking advantage of our specialized wall painting service.",
    image: "/images/service-painting.jpg",
  },
  {
    title: "Plumbing Maintenance & Services",
    desc: "Our expert plumbers are on hand to assist with all your plumbing maintenance, repair, and installation needs.",
    image: "/images/service-plumbing.jpg",
  },
  {
    title: "Solar Heater Services",
    desc: "Keep your solar water heater running efficiently with our expert maintenance services.",
    image: "/images/service-solar-heater.jpg",
  },
  {
    title: "Water Heater Services",
    desc: "We specialize in top-notch water heater services for homes and businesses across Dubai.",
    image: "/images/service-water-heater.jpg",
  },
  {
    title: "Water Tank Cleaning Service",
    desc: "You do not have to be a genius to understand the importance of clean, safe water for your family.",
    image: "/images/service-water-tank.jpg",
  },
  {
    title: "Handyman Services",
    desc: "WeMaintain Technical Service provides the best handyman services in Dubai you can trust to get results.",
    image: "/images/service-handyman.jpg",
  },
  {
    title: "Annual Maintenance Contract",
    desc: "We ensure that customer requirements are determined and met with the aim of enhancing customer satisfaction.",
    image: "/images/service-amc.jpg",
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

const TEAM = [
  {
    name: "Mark Sanderson",
    role: "Lead HVAC & Cooling Specialist",
    image: "/images/team-1.jpg",
    tone: "amber" as const,
  },
  {
    name: "Omar Farooq",
    role: "Head of Handyman & Fit-Out",
    image: "/images/team-2.jpg",
    tone: "navy" as const,
  },
  {
    name: "David Klein",
    role: "Senior Plumbing Specialist",
    image: "/images/team-3.jpg",
    tone: "slate" as const,
  },
  {
    name: "Elena Rostova",
    role: "Operations & Quality Lead",
    image: "/images/team-4.jpg",
    tone: "navy" as const,
  },
  {
    name: "Robert Vance",
    role: "Technical Services Director",
    image: "/images/team-5.jpg",
    tone: "amber" as const,
  },
  {
    name: "Sarah Miller",
    role: "Water Systems Specialist",
    image: "/images/team-6.jpg",
    tone: "slate" as const,
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-near-black">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-dubai-villa.jpg"
              alt="Luxury Dubai Villa"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1b150d]/90 via-[#0e0e10]/95 to-[#0b0b0d]" />
            <div className="texture-dots absolute inset-0 opacity-30" />
          </div>
          <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
            <Reveal>
              <p className="inline-flex items-center gap-2 text-brand text-xs font-semibold tracking-[0.2em] uppercase bg-brand/10 rounded-full px-4 py-1.5 mb-6">
                Technical Services · Dubai UAE
              </p>
              <h1 className="font-heading text-white text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase leading-[1.05] max-w-xl">
                Your Best Professional Technical Services Company In Dubai
              </h1>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-3 bg-brand text-white font-semibold text-sm rounded-full pl-6 pr-2 py-2 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] hover:pr-3"
              >
                Get free quote
                <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
                  <IconArrowRight className="w-4 h-4" />
                </span>
              </a>
            </Reveal>

            <Reveal delay={150}>
              <QuoteForm />
            </Reveal>
          </div>

          <Reveal>
            <div className="relative mx-auto max-w-7xl px-5 md:px-8 pb-10 md:pb-14 grid sm:grid-cols-2 gap-4 sm:gap-0">
              <a
                href="#services"
                className="group relative overflow-hidden flex items-center justify-between gap-4 bg-brand text-white px-7 py-6 sm:rounded-l-2xl"
              >
                <Image
                  src="/images/hero-house.jpg"
                  alt="Residential Maintenance"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/90 to-brand/80" />
                <span className="relative flex items-center gap-4">
                  <IconBuildingHome className="w-7 h-7 shrink-0" />
                  <span className="font-heading text-lg font-semibold leading-snug">
                    Building Maintenance
                    <br />
                    Service (Residential)
                  </span>
                </span>
                <IconArrowRight className="relative w-5 h-5 shrink-0 transition-transform duration-500 group-hover:translate-x-1.5" />
              </a>
              <a
                href="#services"
                className="group relative overflow-hidden flex items-center justify-between gap-4 bg-ink text-white px-7 py-6 sm:rounded-r-2xl"
              >
                <Image
                  src="/images/work-construction.jpg"
                  alt="Commercial Maintenance"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-25 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/80" />
                <span className="relative flex items-center gap-4">
                  <IconBuildingOffice className="w-7 h-7 shrink-0 text-brand" />
                  <span className="font-heading text-lg font-semibold leading-snug">
                    Building Maintenance
                    <br />
                    Service (Commercial)
                  </span>
                </span>
                <span className="relative w-10 h-10 rounded-full border border-white/30 flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:translate-x-1.5">
                  <IconArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </Reveal>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
          <Reveal className="grid grid-cols-2 gap-4">
            <PhotoTile
              imageSrc="/images/hero-technical-service.jpg"
              alt="WeMaintain Technical Team in Action"
              icon={<IconTeam />}
              tone="slate"
              className="col-span-2 aspect-[4/3] rounded-2xl"
            />
            <PhotoTile
              imageSrc="/images/work-construction.jpg"
              alt="Professional Craftsmanship"
              icon={<IconWrench />}
              tone="amber"
              className="aspect-square rounded-2xl"
            />
            <div className="bg-ink rounded-2xl flex flex-col justify-center items-center text-center text-white p-4 border border-white/5">
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
                    imageSrc={s.image}
                    alt={s.title}
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
            <PhotoTile
              imageSrc="/images/work-architect.jpg"
              alt="Quality Technical Inspection Dubai"
              icon={<IconHouseCheck />}
              tone="navy"
              className="aspect-[4/5] rounded-[1.75rem]"
            />
          </Reveal>
        </section>

        {/* TEAM */}
        <section id="team" className="mx-auto max-w-7xl px-5 md:px-8 pb-16">
          <Reveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-12">Our Team</h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 100}>
                <div className="group rounded-2xl bg-[#141414] p-2 ring-1 ring-white/10 hover:ring-brand/40 transition-all duration-500">
                  <PhotoTile
                    imageSrc={m.image}
                    alt={m.name}
                    tone={m.tone}
                    className="aspect-square rounded-xl"
                  />
                  <div className="p-3 text-center">
                    <p className="font-heading text-white font-semibold text-base">{m.name}</p>
                    <p className="text-brand text-xs font-medium mt-0.5">{m.role}</p>
                  </div>
                </div>
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
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden group shadow-2xl ring-1 ring-black/10">
              <Image
                src="/images/hero-technical-service.jpg"
                alt="WeMaintain Support Dubai"
                fill
                sizes="500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-flex items-center gap-2 bg-brand text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  24/7 Rapid Response
                </span>
                <p className="font-heading font-bold text-xl leading-snug">
                  On-Demand Technical Experts Ready Across All Dubai Communities
                </p>
                <p className="text-white/70 text-xs mt-1">Prompt dispatch within 60 minutes for emergencies</p>
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
              {SERVICES.slice(0, 9).map((s) => (
                <li key={s.title} className="flex items-center gap-2">
                  <span className="text-brand">»</span> {s.title}
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
