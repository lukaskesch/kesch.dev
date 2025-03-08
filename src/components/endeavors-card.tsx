"use client";

export default function EndeavorsCard({
  title,
  descriptionParagraphs,
}: {
  title: string;
  descriptionParagraphs: React.ReactNode[];
}) {
  const shouldFadeIn = false;
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
        shouldFadeIn ? "opacity-10 transition-opacity duration-500" : ""
      }`}
      data-fade-in={shouldFadeIn}>
      <div className="order-2 md:order-1">
        <h3 className="text-2xl font-bold mt-8">{title}</h3>
        {descriptionParagraphs.map((paragraph, index) => (
          <p className="mt-2" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className="flex justify-center items-center order-1 md:order-2">
        {/* <img src="/focusjournal.png" alt="Screenshot of the Focus Journal Webapp" /> */}
      </div>
    </div>
  );
}
