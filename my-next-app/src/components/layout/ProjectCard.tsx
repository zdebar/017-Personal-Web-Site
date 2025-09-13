"use client";

import NavigateButton from "../common/NavigateButton";
import LinkIcon from "../icons/LinkButton";
import { CardData } from "../../data/cards";
import GitHubIcon from "../icons/GitHubIcon";
import ImageCarousel from "../common/ImageCarousel";
import ChevronDownButton from "../common/ChevronDownButton";

export default function ProjectCard({
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
    <section id={title}>
      <article className="cnt py-24 relative">
        <ChevronDownButton targetId={title} />
        <div className="flex-col flex gap-12 justify-between items-center sm:flex-row sm:items-start">
          <div className="flex flex-col flex-1 gap-6 max-w-100">
            <h2 className="pb-6">{title}</h2>
            <div>
              <div className="grid grid-cols-[80px_1fr]">
                <p>
                  <strong>version:</strong>
                </p>
                <p>{version}</p>
                <p>
                  <strong>update:</strong>
                </p>
                <p>09/2025</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {texts.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            {technologies && (
              <div className="mb-4">
                <p>
                  <strong>Technologies:</strong>
                </p>
                <p>{technologies}</p>
              </div>
            )}
            <div className="flex flex-col gap-2">
              {link && (
                <NavigateButton
                  title="more about this project"
                  href={link}
                  className="btn-rec btn-green"
                >
                  ..more
                </NavigateButton>
              )}
              <div className="flex items-center gap-2">
                {hosting && (
                  <LinkIcon
                    title={hosting}
                    href={hosting}
                    className="btn-rec btn-green"
                  >
                    try it here
                  </LinkIcon>
                )}
                {github && <GitHubIcon href={github} />}
              </div>
            </div>
          </div>
          {images && (
            <ImageCarousel images={images} alt={title} maxHeight={800} />
          )}
        </div>
      </article>
    </section>
  );
}
