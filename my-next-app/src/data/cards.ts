export type CardData = {
  id: number;
  title: string;
  version?: string;
  description: string;
  images?: string[];
  date?: string;
  link?: string;
  github?: string;
  hosting?: string;
  color?: string;
};

export const cards: CardData[] = [
  {
    id: 0,
    title: "English App",
    version: "0.7.0",
    description:
      "Fast practice drill. Up to 400 words or sentences in 20 minutes of practice.",
    date: "2025-08-26",
    link: "/projects/0",
    github: "https://github.com/zdebar/020-flash-card-app-typescript",
    hosting: "https://020-flash-card-app-typescript.vercel.app/",
    images: ["/images/001.png", "/images/002.png"],
  },
  {
    id: 1,
    title: "Leetcode 67 / 75",
    description:
      "Basic Data Structures and Algorithms practice with Leetcode 75.",
    date: "2025-08-08",
  },
];
