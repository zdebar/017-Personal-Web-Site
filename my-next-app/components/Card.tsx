import Image from "next/image";
import Link from 'next/link';
import { CardData } from "../data/cards";

export default function Card({ id, title, description, image }: CardData) {
  return (
    <Link className="card" href={`/projects/${id}`}>
      <div className="card-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {image && (
        <Image src={image} alt={title} width={300} height={200} />
      )}
    </ Link>
  );
}
