"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};
const projects = [
  {
    id: "01",
    status: "Personal · Production",
    title: "PhoneBhai",
    type: "E-commerce Marketplace",
    desc: "A production-ready refurbished and new device marketplace built with Next.js, React, TypeScript and a custom backend. Includes product discovery, search, wishlist, cart, checkout, orders, reviews, warranty information and media delivery.",
    tags: ["Next.js", "React", "TypeScript", "Redux", "REST API"],
    accent: "blue",
  },
  {
    id: "02",
    status: "Client · Shipped",
    title: "Gibnu",
    type: "Commerce Platform",
    desc: "A multi-surface commerce platform connecting customers, sellers, agents and delivery operations through coordinated digital experiences.",
    tags: ["React Native", "Mobile", "Commerce", "API"],
    accent: "red",
  },
  {
    id: "03",
    status: "Client · Shipped",
    title: "IFU Innovations",
    type: "Affiliate Commerce",
    desc: "An affiliate commerce experience designed around product discovery and outbound purchasing through partner e-commerce platforms.",
    tags: ["React Native", "Landing Page", "Commerce"],
    accent: "amber",
  },
  {
    id: "04",
    status: "Client · Shipped",
    title: "My Deal Center",
    type: "Real Estate Marketplace",
    desc: "A property-focused marketplace experience for discovering, browsing and managing real-estate listings through a mobile-first interface.",
    tags: ["React Native", "Mobile", "Marketplace"],
    accent: "blue",
  },
];

const toolkit = [
  {
    id: "T01",
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Responsive UI",
    ],
  },
  {
    id: "T02",
    title: "Mobile",
    items: [
      "React Native",
      "Expo",
      "React Navigation",
      "AsyncStorage",
      "Responsive layouts",
      "Mobile UI",
      "Cross-platform apps",
    ],
  },
  {
    id: "T03",
    title: "State & Data",
    items: [
      "Redux Toolkit",
      "REST APIs",
      "Axios",
      "Firebase",
      "Authentication",
      "API integration",
      "SQL basics",
    ],
  },
  {
    id: "T04",
    title: "Tools",
    items: [
      "Git",
      "Bitbucket",
      "Postman",
      "VS Code",
      "Chrome DevTools",
      "Figma collaboration",
      "Vercel",
    ],
  },
];

const experience = [
  {
    year: "AUG 2026 — PRESENT",
    role: "Website Management Developer",
    company: "SureBuy Store",
    description:
      "Managing and developing the SureBuy Store web platform, working across website updates, frontend development, product flows, performance, responsive interfaces and ongoing production improvements.",
  },
  {
    year: "AUG 2024 — AUG 2026",
    role: "Frontend Developer — React & TypeScript",
    company: "Lumosys Technologies Private Limited",
    description:
      "Developed and maintained e-commerce applications using React and TypeScript, building responsive interfaces, reusable components, Redux-based state flows and performance-focused frontend experiences.",
  },
];

const education = [
  {
    year: "2023",
    title: "MCA — Computer Applications",
    institution: "Odisha University of Agriculture & Technology",
  },
  {
    year: "2021",
    title: "B.Sc. — Chemistry Honours",
    institution: "Raja Madhusudan Dev Degree College",
  },
];

export default function Page() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeColor, setActiveColor] = useState("#D51300");
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target) {
          setActive(visible.target.getAttribute("data-section") || "about");
        }
      },
      {
        threshold: [0.15, 0.35, 0.6],
        rootMargin: "-15% 0px -55% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const navigation = [
    ["ABOUT", "about"],
    ["WORK", "work"],
    ["CRAFT", "craft"],
    ["TOOLKIT", "toolkit"],
    ["EXPERIENCE", "experience"],
    ["CONTACT", "contact"],
  ];

  return (
    <main id="top">
      {/* ================= NAV ================= */}
      <nav className="nav">
        <a
          href="#top"
          className="nav-brand"
          onClick={() => setMenuOpen(false)}
          aria-label="Sibani Pattanaik home"
        >
          <motion.div
            className="nav-logo"
            initial="hidden"
            animate="show"
            whileHover="hover"
          >
            <motion.span
              className="logo-s"
              variants={{
                hidden: {
                  opacity: 0,
                  x: -18,
                  y: -14,
                  rotate: -18,
                  scale: 0.65,
                },
                show: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1] as const,
                  },
                },
                hover: {
                  x: -2,
                  y: -2,
                  rotate: -5,
                  scale: 1.08,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 12,
                  },
                },
              }}
            >
              S
            </motion.span>

            <motion.span
              className="logo-p"
              variants={{
                hidden: {
                  opacity: 0,
                  x: 18,
                  y: 14,
                  rotate: 18,
                  scale: 0.65,
                },
                show: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.28,
                    ease: [0.22, 1, 0.36, 1] as const,
                  },
                },
                hover: {
                  x: 2,
                  y: 2,
                  rotate: 5,
                  scale: 1.08,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 12,
                  },
                },
              }}
            >
              P
            </motion.span>

            <motion.div
              className="logo-orbit"
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{
                opacity: [0, 0.5, 0.2],
                scale: [0.5, 1, 1.08],
                rotate: 270,
              }}
              transition={{
                duration: 2.2,
                ease: "easeOut",
              }}
            />
          </motion.div>

          <div className="nav-brand-copy">
            <strong>SIBANI</strong>
            <span>FRONTEND DEVELOPER</span>
          </div>
        </a>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
          {navigation.map(([label, id], index) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${active === id ? "active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              <span>0{index + 1}</span>
              {label}
            </a>
          ))}
        </div>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sibanipattanaik2000@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="nav-contact"
        >
          LET&apos;S TALK <ArrowUpRight size={14} />
        </a>
      </nav>

      {/* ================= HERO ================= */}
      <section id="about" className="section hero-section" data-section="about">
        <div className="ambient ambient-red" />
        <div className="ambient ambient-blue" />

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow reveal">
              <span className="eyebrow-line" />
              FRONTEND DEVELOPER · REACT · REACT NATIVE
            </div>

            <div className="hero-kicker reveal reveal-delay-1">
              AVAILABLE FOR NEW OPPORTUNITIES
            </div>

            <h1 className="hero-title reveal reveal-delay-1">SIBANI</h1>

            <div className="hero-middle reveal reveal-delay-2">
              <span>—</span>
              <span>PATCHING IDEAS INTO INTERFACES</span>
              <span>—</span>
            </div>

            <h1 className="hero-title hero-title-outline reveal reveal-delay-2">
              PATTANAIK
            </h1>

            <div className="hero-meta reveal reveal-delay-3">
              <span className="hero-tag">REACT</span>
              <span className="hero-tag">REACT NATIVE</span>
              <span className="hero-tag">TYPESCRIPT</span>
              <span className="hero-tag hero-tag-paper">INDIA · UTC+5:30</span>
            </div>

            <p className="hero-description reveal reveal-delay-3">
              Frontend developer focused on building responsive web and mobile
              experiences with React, React Native and TypeScript — from
              interface architecture and state management to real production
              releases.
            </p>

            <div className="hero-actions reveal reveal-delay-4">
              <a href="#work" className="btn btn-primary">
                SELECTED WORK <ArrowUpRight size={16} />
              </a>

              <a
                href="/Sibani-Pattanaik-CV.pdf"
                download="Sibani-Pattanaik-CV.pdf"
                className="btn btn-secondary"
              >
                DOWNLOAD CV <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Paper specification */}
          <div className="hero-paper-wrap reveal reveal-delay-3">
            <div className="paper-shadow" />

            <article className="paper paper-spec">
              <div className="paper-tape tape-top" />

              <div className="paper-header">
                <span>PERSONAL FILE</span>
                <span>NO. 001</span>
              </div>

              <div className="paper-rule" />

              <div className="spec-photo">
                <div className="spec-initials">SP</div>
                <div className="spec-crosshair" />
              </div>

              <div className="spec-heading">
                SIBANI
                <br />
                PATTANAIK
              </div>

              <div className="spec-row">
                <span>ROLE</span>
                <strong>Frontend Developer</strong>
              </div>

              <div className="spec-row">
                <span>STACK</span>
                <strong>React · RN · TypeScript</strong>
              </div>

              <div className="spec-row">
                <span>EXPERIENCE</span>
                <strong>1.5+ YEARS</strong>
              </div>

              <div className="spec-row">
                <span>LOCATION</span>
                <strong>BHUBANESWAR · INDIA</strong>
              </div>

              <div className="spec-row">
                <span>FOCUS</span>
                <strong>WEB · MOBILE · UI</strong>
              </div>

              <div className="paper-stamp">
                OPEN
                <br />
                TO WORK
              </div>

              <div className="paper-signature">SP</div>

              <div className="paper-footer">
                <span>REACT / TYPESCRIPT</span>
                <span>2026</span>
              </div>
            </article>
          </div>
        </div>

        <div className="scroll-marker">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line">
            <span />
          </div>
        </div>
      </section>

      {/* ================= WORK ================= */}
      <section id="work" className="section" data-section="work">
        <div className="section-label reveal" data-num="02">
          SELECTED WORK
        </div>

        <div className="section-heading-row">
          <h2 className="section-title reveal">
            THINGS I&apos;VE
            <br />
            <span>BUILT.</span>
          </h2>

          <div className="section-side-note reveal">
            <span>04 PROJECTS</span>
            <span>WEB + MOBILE</span>
            <span>REAL PRODUCTS</span>
          </div>
        </div>

        <div className="project-stack">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-paper project-${project.accent} reveal`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="paper-tape tape-project" />

              <div className="project-top">
                <span className="project-number">{project.id}</span>
                <span className="project-status">{project.status}</span>
              </div>

              <div className="project-main">
                <div className="project-title-block">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                </div>

                <div className="project-arrow">
                  <ArrowUpRight size={30} />
                </div>
              </div>

              <div className="project-bottom">
                <p>{project.desc}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="paper-index">PROJECT / {project.id}</div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= CRAFT ================= */}
      <section
        id="craft"
        className="section craft-section"
        data-section="craft"
      >
        <div className="section-label reveal" data-num="03">
          CRAFT
        </div>

        <h2 className="section-title reveal">
          CODE IS THE
          <br />
          <span>SKELETON.</span>
        </h2>

        <p className="section-intro reveal">
          I care about what sits underneath the visual layer: reusable
          components, predictable state, responsive layouts, API integration,
          performance and interfaces that remain understandable after the first
          release.
        </p>

        <div className="craft-layout">
          <div className="system-list reveal">
            <div className="system-title">
              <span>SYSTEM NOTES</span>
              <span>01 — 06</span>
            </div>

            {[
              ["01", "COMPONENTS", "Reusable UI architecture"],
              ["02", "STATE", "Redux / predictable data flow"],
              ["03", "API", "REST / Axios / Firebase"],
              ["04", "PERFORMANCE", "Rendering / responsive UI"],
              ["05", "ACCESSIBILITY", "Usable interfaces"],
              ["06", "RELEASE", "Production deployment"],
            ].map(([number, title, description]) => (
              <div className="system-row" key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <small>{description}</small>
              </div>
            ))}
          </div>

          <article className="paper specimen-paper reveal">
            <div className="paper-tape tape-specimen" />

            <div className="specimen-label">TYPE SPECIMEN</div>

            <div className="specimen-big">Aa</div>

            <div className="specimen-word">
              INTERFACE
              <br />
              SYSTEM
            </div>

            <div className="specimen-footer">
              <span>DISPLAY / MONO</span>
              <span>REACT / TS</span>
            </div>
          </article>
        </div>

        <div className="token-strip reveal">
          {[
            ["PRIMARY", "#011FCD"],
            ["SIGNAL", "#D51300"],
            ["PAPER", "#E8DFD0"],
            ["BONE", "#ECE6DC"],
            ["GROUND", "#050404"],
          ].map(([name, value]) => (
            <div className="token" key={name}>
              <div className="token-color" style={{ background: value }} />
              <span>{name}</span>
              <small>{value}</small>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TOOLKIT ================= */}
      <div className="toolkit-color-layout" data-section="toolkit">
        {/* LEFT — COLOUR PALETTE */}
        <motion.div
          className="color-palette paper"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="paper-label">COLOUR SYSTEM</div>

          <div className="palette-list">
            {[
              { name: "BONE", value: "#ECE6DC" },
              { name: "INK", value: "#050404" },
              { name: "BLUE", value: "#011FCD" },
              { name: "RED", value: "#D51300" },
              { name: "AMBER", value: "#FFAC3F" },
              { name: "KRAFT", value: "#A89079" },
            ].map((color) => (
              <motion.button
                key={color.name}
                type="button"
                className={`palette-item ${
                  activeColor === color.value ? "active" : ""
                }`}
                onClick={() => setActiveColor(color.value)}
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.97 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <span
                  className="palette-swatch"
                  style={{ backgroundColor: color.value }}
                />

                <span className="palette-name">{color.name}</span>

                <span className="palette-code">{color.value}</span>

                {activeColor === color.value && (
                  <motion.span
                    className="palette-active-dot"
                    layoutId="palette-active-dot"
                    style={{ backgroundColor: color.value }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — LIVE PAPER */}
        <motion.div
          className="colour-preview-wrap"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            className="colour-preview-paper"
            animate={{
              rotate: activeColor === "#D51300" ? -2 : 1.2,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 16,
            }}
          >
            {/* animated colour layer */}
            <motion.div
              key={activeColor}
              className="colour-ink"
              style={{
                backgroundColor: activeColor,
              }}
              initial={{
                scale: 0,
                opacity: 0,
                borderRadius: "50%",
              }}
              animate={{
                scale: 2.5,
                opacity: 0.92,
                borderRadius: "0%",
              }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* subtle paper texture */}
            <div className="colour-paper-texture" />

            <div className="colour-preview-content">
              <div className="colour-preview-top">
                <span>SELECTED / 01</span>
                <span>PALETTE</span>
              </div>

              <motion.div
                className="aa-mark"
                animate={{
                  color: activeColor,
                  scale: [0.96, 1.04, 1],
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                AA
              </motion.div>

              <motion.div
                className="selected-colour-name"
                key={activeColor}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                {
                  [
                    { name: "BONE", value: "#ECE6DC" },
                    { name: "INK", value: "#050404" },
                    { name: "BLUE", value: "#011FCD" },
                    { name: "RED", value: "#D51300" },
                    { name: "AMBER", value: "#FFAC3F" },
                    { name: "KRAFT", value: "#A89079" },
                  ].find((c) => c.value === activeColor)?.name
                }
              </motion.div>

              <motion.div
                className="selected-colour-code"
                key={`${activeColor}-code`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                transition={{ delay: 0.1 }}
              >
                {activeColor}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="section" data-section="experience">
        <div className="section-label reveal" data-num="05">
          EXPERIENCE
        </div>

        <div className="experience-grid">
          <div>
            <h2 className="section-title reveal">
              WORK
              <br />
              <span>HISTORY</span>
            </h2>

            <p className="section-intro reveal">
              Building interfaces professionally while working across
              e-commerce, React, TypeScript and mobile application development.
            </p>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item reveal" key={item.company}>
                <div className="timeline-marker" />

                <div className="timeline-year">{item.year}</div>

                <h3>{item.role}</h3>

                <div className="timeline-company">{item.company}</div>

                <p>{item.description}</p>

                <div className="timeline-tags">
                  <span>REACT</span>
                  <span>TYPESCRIPT</span>
                  <span>FRONTEND</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="education-area">
          <div className="education-heading reveal">
            <span>EDUCATION</span>
            <span>ACADEMIC FILE</span>
          </div>

          <div className="education-grid">
            {education.map((item, index) => (
              <article
                className="education-paper paper reveal"
                key={item.title}
              >
                <div className="paper-tape education-tape" />

                <span className="education-year">{item.year}</span>

                <h3>{item.title}</h3>

                <p>{item.institution}</p>

                <span className="education-index">0{index + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="section contact-section"
        data-section="contact"
      >
        <div className="contact-noise" />

        <div className="section-label reveal" data-num="06">
          CONTACT
        </div>

        <div className="contact-heading">
          <h2 className="contact-title reveal">
            LET&apos;S MAKE
            <br />
            <span>SOMETHING.</span>
          </h2>

          <div className="contact-note reveal">
            <MapPin size={15} />
            <span>BHUBANESWAR · INDIA</span>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-copy reveal">
            <p>
              Have an idea, a product or a frontend that needs work? I&apos;m
              open to frontend, React and React Native opportunities.
            </p>

            <div className="contact-links">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sibanipattanaik2000@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <Mail size={17} />
                <span>
                  <small>EMAIL</small>
                  sibanipattanaik2000@gmail.com
                </span>
                <ArrowUpRight size={17} />
              </a>

              <a href="tel:+917077699121" target="_blank" rel="noreferrer">
                <Phone size={17} />
                <span>
                  <small>CALL</small>
                  +91 70******21
                </span>
                <ArrowUpRight size={17} />
              </a>

              <a
                href="https://github.com/sibanipattanaik2000"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                <span>
                  <small>GITHUB</small>
                  sibanipattanaik2000
                </span>
                <ArrowUpRight size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/sibani-pattanaik"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} />
                <span>
                  <small>LINKEDIN</small>
                  LinkedIn Profile
                </span>
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <article className="paper contact-paper reveal">
            <div className="paper-tape contact-tape" />

            <div className="contact-paper-top">
              <span>MESSAGE / 001</span>
              <span>OPEN</span>
            </div>

            <div className="contact-paper-main">
              <span className="contact-paper-small">
                FOR COLLABORATIONS,
                <br />
                OPPORTUNITIES &
                <br />
                FRONTEND WORK
              </span>

              <a
                className="contact-email-button"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sibanipattanaik2000@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                SEND AN EMAIL
                <ArrowUpRight size={21} />
              </a>
            </div>

            <div className="contact-stamp">
              LET&apos;S
              <br />
              TALK
            </div>

            <div className="contact-signature">Sibani</div>
          </article>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div>
          SIBANI PATTANAIK
          <span> · FRONTEND DEVELOPER</span>
        </div>

        <div>REACT · REACT NATIVE · TYPESCRIPT</div>

        <a href="#top" className="footer-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </main>
  );
}
