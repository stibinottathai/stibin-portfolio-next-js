export type Lang = "en";

/**
 * Static UI chrome strings.
 */
export const STRINGS = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
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
      aboutTitle: "Building software that ships",
      skillsKicker: "02 · Skills",
      skillsTitle: "Technical arsenal",
      experienceKicker: "03 · Experience",
      experienceTitle: "Where I've worked",
      projectsKicker: "04 · Projects",
      projectsTitle: "Things I've built",
      educationKicker: "05 · Education",
      educationTitle: "Learning never stops",
      contactKicker: "06 · Contact",
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
