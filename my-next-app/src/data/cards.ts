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
    description: "English in more natural, less stressing way.",
    link: "/projects/0",
  },
];
