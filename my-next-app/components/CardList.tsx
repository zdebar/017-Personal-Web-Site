import Card from "./Card";
import { cards } from "../data/cards";

export default function CardList() {
  return (
    <section className="card-container">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </section>
  );
}
