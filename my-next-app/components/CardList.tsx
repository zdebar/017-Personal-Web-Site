import Card from "./Card";
import { cards } from "../data/cards";

export default function CardList() {
  return (
    <section className="card-container">
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </section>
  );
}
