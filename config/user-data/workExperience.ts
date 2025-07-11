export interface IWorkExperience {
  company: string;
  companyUrl?: string;
  projectUrl?: string;
  image?: string;
  position: string;
  period: string;
  responsibilities: string[];
  shortDescription?: string;
}
export const UserWorkExperienceData: IWorkExperience[] = [
  {
    company: "InspireEdge",
    position: "UX Designer",
    period: "Apr 2025 – Present",
    image: "/images/google.svg",
    shortDescription: "Crafted a high-converting website for an AI-powered software product using ethical intelligence and predictive analytics.",
    responsibilities: [
      "Designed the product interface with a focus on seamless AI-driven workflows",
      "Helped brands recover abandoned carts using user-centered design patterns",
      "Created user flows and wireframes for data-heavy dashboards"
    ]
  },
  {
    company: "Sporta AI",
    position: "UI/UX Designer",
    period: "2025 – Present",
    image: "/images/sporta.svg",
    shortDescription: "Collaborating on a sports analytics platform that provides real-time insights and predictive tools for athletes and coaches.",
    responsibilities: [
      "Created a visual-first design system that merges complex data with clean UX",
      "Collaborated with analysts and developers to build intuitive dashboards",
      "Led UX audits and iterative testing sessions with coaches and users"
    ]
  },
  {
    company: "Conova",
    position: "UX Designer",
    period: "2025 – Present",
    image: "/images/conova.svg",
    shortDescription: "Designing a smart workspace booking system with geofenced check-in/out functionality.",
    responsibilities: [
      "Improved real-time seat and room management UX for enterprise teams",
      "Worked closely with PMs to define core flows",
      "Created prototypes and ran user feedback sessions"
    ]
  },
  {
    company: "Muallim",
    position: "Product Designer",
    period: "Jan 2025 – Mar 2025",
    image: "/images/mualimlogo.svg",
    shortDescription: "Led design for an edtech platform connecting Arabic tutors with learners.",
    responsibilities: [
      "Focused on functional UX and 10x better user experience than previous tools",
      "Simplified complex onboarding with progressive disclosure design",
      "Collaborated on mobile and desktop responsive views"
    ]
  },
  {
    company: "ITCC, University of Ibadan",
    position: "Lead Designer",
    period: "2024 – Present",
    image: "/images/itcc.png",
    shortDescription: "Designed and optimized the admin interface used for managing industrial training for students.",
    responsibilities: [
      "Improved usability and institutional efficiency through interface audits",
      "Designed data-heavy admin dashboards and workflows",
      "Streamlined reporting and coordination for 1000+ students"
    ]
  }
];
