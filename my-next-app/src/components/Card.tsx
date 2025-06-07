import Image from "next/image";
import Link from "next/link";
import { CardData } from "../data/cards";
import "./Card.css";

export default function Card({ title, description, image, link }: CardData) {
  return (
    <Link className="card" href={link}>
      <div className="card-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {image && <Image src={image} alt={title} width={300} height={200} />}
    </Link>
  );
}
