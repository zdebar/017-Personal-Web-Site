import Card from "./Card";
import { cards } from "../data/cards";

export default function ProjectList() {
  return (
    <div id="projects">
      {cards
        .slice()
        .reverse()
        .map((card) => {
          return <Card key={card.id} {...card} />;
        })}
    </div>
  );
}
