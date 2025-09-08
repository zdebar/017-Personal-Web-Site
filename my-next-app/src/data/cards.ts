export type CardData = {
  id: number;
  title: string;
  version?: string;
  update?: string;
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
    update: "09/2025",
    texts: ["This site."],
    images: ["/images/00/00-001.png", "/images/00/00-002.png"],
    technologies: "React, Next.js, TypeScript, CSS",
    github: "https://github.com/zdebar/017-Personal-Web-Site",
  },
  {
    id: 1,
    title: "Leetcode 67 / 75",
    texts: [
      "I already did basic Data Structures and Algorithms courses on Udemy. This is to memorize it more with practice.",
    ],
    technologies: "Python",
    version: "in progress",
    update: "09/2025",
    date: "2025-08-08",
    images: ["/images/01-000.png"],
  },
  {
    id: 2,
    title: "English App",
    version: "0.7.0",
    update: "09/2025",
    texts: [
      "English improvement app I allways find and could not find anywhere.",
      "Fast practice drill. Up to 400 words or sentences in 20 minutes of practice. Hopefully improved pronunciation for me, and faster learning for others.",
      "It's all based on flash cards, spaced repetition, and exclusive focus listening and speaking.",
    ],
    technologies:
      "React,  Tailwind CSS, Node.js, PostgreSQL, Vercel, Railway, Supabase, Google Cloud, Python",
    date: "2025-08-26",
    link: "/projects/0",
    github: "https://github.com/zdebar/020-flash-card-app-typescript",
    hosting: "https://020-flash-card-app-typescript.vercel.app/",
    images: [
      "/images/02/02-001.png",
      "/images/02/02-002.png",
      "/images/02/02-003.png",
      "/images/02/02-004.png",
      "/images/02/02-005.png",
      "/images/02/02-006.png",
      "/images/02/02-007.png",
    ],
  },
];
