import Card from "./Card";
import { cards } from "../data/cards";

export default function ProjectList() {
  return (
    <section className="projects" id="projects">
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </section>
  );
}
