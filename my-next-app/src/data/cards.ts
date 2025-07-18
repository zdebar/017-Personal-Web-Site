export type CardData = {
  id: number;
  title: string;
  description: string;
  image?: string;
  link: string; // Made `link` mandatory
};

export const cards: CardData[] = [
  {
    id: 0,
    title: "Language App v0.1.0",
    description:
      "Simple language learning app focused on fast practice. Up to 1000 words or 500 sentences per hour of practice.",
    link: "/projects/0",
  },
  {
    id: 1,
    title: "Leetcode 19 / 75",
    description:
      "Basic Data Structures and Algorithms practice.Leetcode 75 is a curated list of 75 essential problems.",
    link: "/projects/1",
  },
];
