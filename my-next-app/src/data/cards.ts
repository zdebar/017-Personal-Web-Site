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
    title: "Language App",
    description:
      "Language learning focused on maximizing daily spoken practice repetitions.",
    link: "/projects/0",
  },
];
