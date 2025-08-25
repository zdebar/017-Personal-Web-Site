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
    title: "Language App v0.6.0",
    description:
      "Fast practice drill. Up to 400 words or sentences in 20 minutes of practice.",
    date: "2025-08-04",
    link: "/projects/0",
  },
  {
    id: 1,
    title: "Leetcode 58 / 75",
    description:
      "Basic Data Structures and Algorithms practice with Leetcode 75.",
    date: "2025-08-08",
    link: "/projects/1",
  },
];
