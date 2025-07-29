export type CardData = {
  id: number;
  title: string;
  description: string;
  image?: string;
  date?: string; // Made `date` optional
  link: string; // Made `link` mandatory
};

export const cards: CardData[] = [
  {
    id: 0,
    title: "Language App v0.5.0",
    description:
      "Focus on fast practice drill. Up to 200 words or 100 sentences per 10 minutes of practice.",
    date: "2025-07-29",
    link: "/projects/0",
  },
  {
    id: 1,
    title: "Leetcode 32 / 75",
    description:
      "Basic Data Structures and Algorithms practice with Leetcode 75.",
    date: "2025-07-19",
    link: "/projects/1",
  },
];
