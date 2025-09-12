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
        <article className="content py-large " style={{ position: "relative" }}>
          <ChevronDownButton targetId={title} />
          <h2 className="pb-big">{title}</h2>
          <div className="flex-row-col gap-big justify-between">
            <div style={{ flex: 1 }} className="flex-col-row w-column gap-big">
              <div>
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
              </div>
              <div className="flex-col gap-small ">
                {technologies && (
                  <div className="mb-small">
                    <p>
                      <strong>Technologies:</strong>
                    </p>
                    <p>{technologies}</p>
                  </div>
                )}
                {link && (
                  <div>
                    <Link
                      href={link}
                      title="more about this project"
                      className="button button-green shadow link-button"
                    >
                      ..more
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
                      className="button button-green shadow link-button"
                    >
                      try it here
                    </Link>
                  )}
                  {github && <GitHubIcon gitHubHref={github} />}
                </div>
              </div>
            </div>
            {images && (
              <ImageCarousel
                images={images}
                alt={title}
                maxHeight={800}
                className="mt-tiny"
              />
            )}
          </div>
        </article>
      </section>
      <style jsx>{`
        .flex-row-col {
          display: flex;
          flex-direction: row;
        }
        .flex-col-row {
          display: default;
        }

        @media (max-width: 800px) {
          .flex-row-col {
            flex-direction: column;
          }
        }

        @media (min-width: 500px) and (max-width: 800px) {
          .flex-col-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
}
