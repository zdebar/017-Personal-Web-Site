"use client";
import Link from "next/link";
import { CardData } from "../data/cards";
import GitHubIcon from "./Icons/GitHubIcon";
import ImageCarousel from "./common/ImageCarousel";
import ChevronDownButton from "./common/ChevronDownButton";

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
    <>
      <section id={title}>
        <article className="w-main py-large " style={{ position: "relative" }}>
          <ChevronDownButton targetId={title} />
          <div className=" flex-row-col gap-large justify-between">
            <div style={{ flex: 1 }} className="w-column">
              <h2 className="pb-medium">{title}</h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                }}
              >
                <p>
                  <strong>version:</strong>
                </p>
                <p>{version}</p>
                <p>
                  <strong>update:</strong>
                </p>
                <p>09/2025</p>
              </div>
              <div className="flex-col gap-tiny my-medium ">
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
                  <Link href={link} title="more about this project">
                    <button className="button bg-gradient-secondary shadow">
                      ..more
                    </button>
                  </Link>
                </div>
              )}
              <div className="flex-row align-center gap-small">
                {hosting && (
                  <Link
                    href={hosting}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={hosting}
                  >
                    <button className="button bg-gradient-secondary shadow">
                      try it here
                    </button>
                  </Link>
                )}
                {github && <GitHubIcon gitHubHref={github} />}
              </div>
            </div>
            {images && (
              <ImageCarousel images={images} alt={title} maxHeight={800} />
            )}
          </div>
        </article>
      </section>
      <style jsx>{`
        .flex-row-col {
          display: flex;
          flex-direction: row;
        }
        @media (max-width: 600px) {
          .flex-row-col {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
