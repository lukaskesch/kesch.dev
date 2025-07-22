"use client";

import Image from "next/image";

export default function EndeavorsCard({
  title,
  descriptionParagraphs,
  imagePath,
}: {
  title: string;
  descriptionParagraphs: React.ReactNode[];
  imagePath?: string;
}) {
  const shouldFadeIn = false;
  return (
    <>
      <h3 className="text-2xl font-bold mt-8 mb-2">{title}</h3>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
          shouldFadeIn ? "opacity-10 transition-opacity duration-500" : ""
        }`}
        data-fade-in={shouldFadeIn}>
        <div className="order-2 md:order-1">
          {descriptionParagraphs.map((paragraph, index) => (
            <p className="mb-2" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex justify-center items-start order-1 md:order-2">
          {imagePath && (
            <Image
              src={imagePath}
              alt="Screenshot of the Focus Journal Webapp"
              className=""
              width={300}
              height={300}
            />
          )}
        </div>
      </div>
    </>
  );
}
