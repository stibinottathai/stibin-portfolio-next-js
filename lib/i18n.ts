export type Lang = "en";

/**
 * Static UI chrome strings.
 */
export const STRINGS = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      faq: "FAQ",
      contact: "Contact",
      hireMe: "Hire Me",
    },
    hero: {
      greeting: "Hi, I'm",
      viewWork: "View My Work",
      getInTouch: "Get In Touch",
      downloadCV: "Download CV ↓",
    },
    sections: {
      aboutKicker: "01 · About",
      aboutTitle: "Engineering Software & Search Growth",
      servicesKicker: "02 · Core Services",
      servicesTitle: "What I Build & Optimize",
      skillsKicker: "03 · Tech & Marketing Arsenal",
      skillsTitle: "Skills, Frameworks & Tools",
      experienceKicker: "04 · Experience",
      experienceTitle: "Professional Track Record",
      projectsKicker: "05 · Projects",
      projectsTitle: "Featured Platforms & Apps",
      faqKicker: "06 · Frequently Asked Questions",
      faqTitle: "Answers to Common Questions",
      educationKicker: "07 · Education",
      educationTitle: "Learning & Foundations",
      contactKicker: "08 · Contact",
    },
    projects: { all: "All", mobile: "Mobile", web: "Web" },
    contact: {
      titleA: "Let's build something",
      titleB: "great together",
      lead: (city: string) =>
        `I'm currently in ${city} and available to start immediately. Whether it's a Flutter app, a Next.js platform, or a role you're hiring for — drop me a message and I'll reply as soon as I can.`,
      yourName: "Your name",
      yourEmail: "Your email",
      message: "Message",
      namePlaceholder: "John Doe",
      emailPlaceholder: "john@company.com",
      messagePlaceholder: "Hi, I'd like to talk about…",
      send: "Send Message →",
      sending: "Sending…",
      sentTitle: "Message sent!",
      sentBody: "Thanks for reaching out — I'll get back to you soon.",
      sendAnother: "Send another message",
      error:
        "Something went wrong sending your message — please try again, or email me directly instead.",
    },
    footer: (name: string, year: number) =>
      `© ${year} ${name}`,
  },
};

export type UIStrings = (typeof STRINGS)["en"];
