import ProjectCard from "./ProjectCard";
import { cards } from "../data/cards";

export default function ProjectList() {
  return (
    <div id="projects">
      {cards
        .slice()
        .reverse()
        .map((card) => {
          return <ProjectCard key={card.id} {...card} />;
        })}
    </div>
  );
}
