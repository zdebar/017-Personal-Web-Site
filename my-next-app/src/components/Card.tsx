"use client";

import NavigateIcon from "./Icons/NavigateIcon";
import LinkIcon from "./Icons/LinkIcon";
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
    <section id={title}>
      <article className="content py-24 relative">
        <ChevronDownButton targetId={title} />
        <h2 className="pb-12">{title}</h2>
        <div className="flex gap-12 justify-between">
          <div className="flex-col flex-1 column gap-12">
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
              <div className="flex-col gap-2 my-6 ">
                {texts.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </div>
            <div className="flex-col gap-4 ">
              {technologies && (
                <div className="mb-4">
                  <p>
                    <strong>Technologies:</strong>
                  </p>
                  <p>{technologies}</p>
                </div>
              )}
              {link && (
                <NavigateIcon
                  title="more about this project"
                  href={link}
                  className="button-rectangular button-green shadow link-button mb-2"
                >
                  ..more
                </NavigateIcon>
              )}
              <div className="flex items-center gap-4">
                {hosting && (
                  <LinkIcon
                    title={hosting}
                    href={hosting}
                    className="button-rectangular button-green shadow link-button"
                  >
                    try it here
                  </LinkIcon>
                )}
                {github && <GitHubIcon href={github} />}
              </div>
            </div>
          </div>
          {images && (
            <ImageCarousel
              images={images}
              alt={title}
              maxHeight={800}
              className="mt-2"
            />
          )}
        </div>
      </article>
    </section>
  );
}
