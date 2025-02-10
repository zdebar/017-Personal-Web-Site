export type CardData = {
  id: number;
  title: string;
  description: string;
  image?: string;
  link: string;
};

export const cards: CardData[] = [
  {
    id: 0,
    title: "Flash Card App",
    description: "Simple personal flash card for collecting data and testing repetition algorithms",
    link: "#"
  },
  {
    id: 1,
    title: "Eshop",
    description: "Description for another project",
    link: "#"
  }
];
