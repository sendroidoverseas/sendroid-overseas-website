type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, copy, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b9964a]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl leading-tight text-[#071b33] md:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 text-base leading-8 text-[#526176] md:text-lg">{copy}</p> : null}
    </div>
  );
}
