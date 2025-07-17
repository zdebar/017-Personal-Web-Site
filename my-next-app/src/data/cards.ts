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
      "Language learning focused on maximizing daily spoken practice repetitions.",
    link: "/projects/0",
  },
  {
    id: 1,
    title: "Leetcode 13 / 75",
    description: "Basic Data Structures and Algorithms practice.",
    link: "/projects/1",
  },
];
