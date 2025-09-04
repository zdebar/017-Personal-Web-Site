import Card from "./Card";
import { cards } from "../data/cards";

export default function ProjectList() {
  return (
    <div id="projects">
      {cards
        .slice()
        .reverse()
        .map((card, index) => {
          const color =
            index % 2 !== 0
              ? "var(--background-color-1)"
              : "var(--background-color-2)";
          return <Card key={card.id} {...card} color={color} />;
        })}
    </div>
  );
}
