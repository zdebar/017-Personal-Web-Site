export type CardData = {
  id: number;
  title: string;
  version?: string;
  texts: string[];
  technologies?: string;
  images?: string[];
  date?: string;
  link?: string;
  github?: string;
  hosting?: string;
};

export const cards: CardData[] = [
  {
    id: 0,
    title: "Personal Website",
    version: "2.0.0",
    texts: ["This site."],
    technologies: "React, Next.js, TypeScript, CSS",
    github: "https://github.com/zdebar/017-Personal-Web-Site",
  },
  {
    id: 1,
    title: "Leetcode 67 / 75",
    texts: [
      "Basic algorithms with Leetcode 75.",
      "I have already finished Data Structures and Algorithms in the past. This is currated list of problems for practice.",
    ],
    technologies: "Python",
    date: "2025-08-08",
    images: ["/images/01-000.png"],
  },
  {
    id: 2,
    title: "English App",
    version: "0.7.0",
    texts: [
      "Fast practice drill. Up to 400 words or sentences in 20 minutes of practice. Hopefully improved pronunciation for me, and faster learning for others.",
      "It's all based on flash cards, spaced repetition, and exclusive focus listening and speaking.",
    ],
    technologies:
      "React,  Tailwind CSS, Node.js, PostgreSQL, Vercel, Railway, Supabase, Google Cloud, Python",
    date: "2025-08-26",
    link: "/projects/0",
    github: "https://github.com/zdebar/020-flash-card-app-typescript",
    hosting: "https://020-flash-card-app-typescript.vercel.app/",
    images: ["/images/02-001.png", "/images/02-002.png"],
  },
];
