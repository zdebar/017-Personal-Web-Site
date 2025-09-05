import Link from "next/link";
import { CardData } from "../data/cards";
import GitHubIcon from "./Icons/GitHubIcon";
import ImageCarousel from "./ImageCarousel";

export default function Card({
  title,
  version,
  texts,
  technologies,
  images,
  link,
  github,
  hosting,
}: CardData) {
  return (
    <section>
      <article className="w-main py-large flex-row-col gap-large justify-between">
        <div className="w-column">
          <h2>{title}</h2>
          {version && <p>version: {version}</p>}

          <div className="flex-col gap-tiny my-medium">
            {texts.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          {technologies && (
            <div className="my-medium">
              <p>
                <strong>Technologies:</strong>
              </p>
              <p>{technologies}</p>
            </div>
          )}

          {link && (
            <div className="my-small">
              <Link href={link}>
                <button className="button">..more</button>
              </Link>
            </div>
          )}
          <div className="flex-row align-center gap-small">
            {hosting && (
              <Link href={hosting} target="_blank" rel="noopener noreferrer">
                <button className="button">Test here</button>
              </Link>
            )}
            {github && <GitHubIcon gitHubHref={github} />}
          </div>
        </div>
        {images && <ImageCarousel images={images} alt={title} />}
      </article>
    </section>
  );
}
