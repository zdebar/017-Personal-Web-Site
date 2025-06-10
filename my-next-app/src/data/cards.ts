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
    title: "English App",
    description:
      "A1 in 10 days, A2 in 20 days, B1 in 40 days, B2 in 80 days, C1 in 160 days, C2 in 320 days.",
    link: "/projects/0",
  },
];
