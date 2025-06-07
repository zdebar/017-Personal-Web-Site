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
    title: "English Language App",
    description: "English language learning app focused on simplicity of use.",
    link: "/projects/0",
  },
];
