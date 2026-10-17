// ✏️ Edit everything about the site here. Replace placeholders marked "[...]".

import crochetLilies from "@/assets/crochet-lilies.jpg.asset.json";
import crochetKeychains from "@/assets/crochet-keychains.jpg.asset.json";
import crochetPouch from "@/assets/crochet-pouch.jpg.asset.json";
import crochetOctopus from "@/assets/crochet-octopus.jpg.asset.json";
import crochetFlowerpots from "@/assets/crochet-flowerpots.jpg.asset.json";
import crochetPhonecover from "@/assets/crochet-phonecover.jpg.asset.json";
import sportsBadminton from "@/assets/sports-badminton.jpg.asset.json";
import sportsBasketball from "@/assets/sports-basketball.jpg.asset.json";
import sportsRackets from "@/assets/sports-rackets.jpg.asset.json";
import projectRestaurant from "@/assets/project-restaurant.png.asset.json";
import projectDisaster from "@/assets/project-disaster.png.asset.json";
import projectThreat from "@/assets/project-threat.png.asset.json";

export const profile = {
  name: "Hrishita Panda",
  firstName: "Hrishita",
  age: 21,
  email: "hrishitapanda1152@gmail.com",
  github: "https://github.com/HrishitaPanda",
  linkedin: "https://www.linkedin.com/in/hrishita-panda/",
  shop: "https://bloom-n-charm-boutique.lovable.app/products",
};

export type Project = {
  name: string;
  description: string;
  problem: string;
  tech: string[];
  role: string;
  features: string[];
  image?: string; // add a screenshot URL or import
  github?: string;
  demo?: string;
  tint: "lavender" | "blush" | "sage";
};

export const projects: Project[] = [
  {
    name: "AI-Powered Restaurant Recommendation System",
    description:
      "An AI-powered restaurant recommendation platform that generates personalized restaurant and dish recommendations based on user preferences.",
    problem: "Helps people decide where and what to eat by matching suggestions to their personal preferences.",
    tech: ["Node.js", "Express.js", "MongoDB", "Google Gemini API", "JWT"],
    role: "Built entirely by myself — from idea to working app",
    features: [
      "Personalized restaurant and food recommendations",
      "AI integration using the Google Gemini API",
      "Secure REST APIs",
      "JWT authentication and role-based access control",
      "MongoDB CRUD operations",
    ],
    image: projectRestaurant.url,
    tint: "lavender",
  },
  {
    name: "Disaster Management System",
    description:
      "A disaster management platform supporting volunteer management, donation tracking and relief camp management, with a separate microservice for relief distribution.",
    problem:
      "During a disaster, volunteers, donations and relief camps are hard to coordinate from one place — this system brings them together and handles relief distribution as its own service.",
    tech: ["Java", "Spring Boot", "MongoDB", "JWT authentication"],
    role: "Built entirely by myself — from idea to working app",
    features: [
      "Volunteer management",
      "Donation tracking",
      "Relief camp management",
      "Separate microservice for relief distribution",
      "JWT authentication and role-based access control",
    ],
    image: projectDisaster.url,
    tint: "sage",
  },
  {
    name: "Hybrid Threat Analysis System",
    description:
      "A hybrid threat analysis project that detects threats with machine learning and explains the results, using RAG and the Google Gemini API to retrieve trusted cybersecurity information and generate evidence-based recommendations.",
    problem:
      "Threat detection needs both accurate predictions and a clear explanation of why something was flagged — backed by trusted cybersecurity information rather than guesswork.",
    tech: ["Python", "scikit-learn", "Random Forest", "XGBoost", "SHAP", "Node.js", "Express", "FastAPI", "Next.js", "MongoDB", "RAG", "Google Gemini API"],
    role: "Built entirely by myself — from idea to working app",
    features: [
      "Threat detection using Random Forest and XGBoost with scikit-learn",
      "Model explainability using SHAP",
      "Backend services built with Node.js, Express and FastAPI",
      "Dashboard built with Next.js",
      "MongoDB for data storage",
      "RAG and Google Gemini API integration to retrieve trusted cybersecurity information and generate evidence-based recommendations",
    ],
    image: projectThreat.url,
    tint: "blush",
  },
];

export const journey = [
  { title: "First lines of code", text: "Early coding projects and experiments — learning the basics by building small things.", when: "\n" },
  { title: "Web & app development", text: "Moving from exercises to real web and application projects.", when: "\n" },
  { title: "Exploring AI & APIs", text: "Integrating AI services like the Google Gemini API into my own apps.", when: "\n" },
  { title: "Databases, auth & backend", text: "REST APIs, MongoDB, JWT authentication and role-based access control.", when: "\n" },
  { title: "College projects & more", text: "Disaster management, hybrid threat analysis and other technical experiences.", when: "\n" },
];

// Only list skills you actually have. Add more as you go.
export const skills: Record<string, string[]> = {
  "Programming languages": ["JavaScript", "Java", "Python"],
  Frontend: ["HTML", "CSS", "React"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT authentication"],
  Databases: ["MongoDB"],
  "AI & APIs": ["Google Gemini API", "API integration", "Prompt-based AI features"],
  "Dev tools": ["Git", "GitHub", "VS Code", "Postman"],
};

// Replace `src` with your own photos (paste a URL or import an image). Leave empty for a placeholder.
export type GalleryItem = { src?: string; caption: string; alt: string; tall?: boolean };

export const crochetGallery: GalleryItem[] = [
  { src: crochetKeychains.url, caption: "little keychain friends ♡", alt: "Crochet chick and bee keychains held in a hand" },
  { src: crochetPouch.url, caption: "pearl-handle pouch", alt: "Crochet pouch in white and pink with a pearl bead handle", tall: true },
  { src: crochetLilies.url, caption: "handmade lilies", alt: "Two handmade crochet lilies in cream and pink" },
  { src: crochetOctopus.url, caption: "octopus buddy", alt: "Handmade crochet octopus" },
  { src: crochetFlowerpots.url, caption: "little flowerpots", alt: "Crochet flowers in small pots", tall: true },
  { src: crochetPhonecover.url, caption: "cosy phone cover", alt: "Handmade crochet phone cover" },
];

export const sportsPhotos: GalleryItem[] = [
  { src: sportsBadminton.url, caption: "badminton shadows", alt: "Shadow of two people holding badminton rackets up while making peace signs" },
  { src: sportsBasketball.url, caption: "on the court", alt: "Playing basketball on an outdoor court at night" },
  { src: sportsRackets.url, caption: "rackets down", alt: "Two people standing on a badminton court with crossed rackets and a shuttlecock resting on the floor" },
];

export const sports = {
  favorites: ["Badminton", "Basketball"],
  about:
    "Badminton and basketball are two of my favorite ways to stay active, challenge myself, and have fun. I love the energy, quick reflexes, and excitement of every rally and every game. Whether I'm chasing a shuttlecock or shooting a basket, sports help me refresh my mind, enjoy teamwork, and bring a little friendly competition into my day.",
};
