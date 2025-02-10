import Image from "next/image";
import { CardData } from "../data/cards";

export default function Card({ title, description, image, link }: CardData) {
  return (
    <a className="card" href={link}>
      <div className="card-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {image && (
        <Image src={image} alt={title} width={300} height={200} />
      )}
    </a>
  );
}
