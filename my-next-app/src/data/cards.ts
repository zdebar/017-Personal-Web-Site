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
    title: "Language App v0.4.0",
    description:
      "Simple language learning app focused on fast practice drill. Up to 1000 words or 500 sentences per hour of practice.",
    date: "2025-07-19",
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
