import React from "react";

type Align = "center" | "left" | "right";

interface SectionHeaderProps {
  title: string | string[];
  description?: string;
  align?: Align;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const alignmentClasses: Record<Align, string> = {
  center: "text-center mx-auto",
  left: "text-left",
  right: "text-right ml-auto",
};

export default function SectionHeader({
  title,
  description,
  align = "center",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}: SectionHeaderProps) {
  // title te array dile protita item alada line e boshbe
  const lines = Array.isArray(title) ? title : [title];

  return (
    <div className={`max-w-5xl ${alignmentClasses[align]} ${className}`}>
      <h2
        className={`text-3xl md:text-4xl lg:text-[44px] font-semibold text-gray-900 tracking-tight leading-tight ${titleClassName}`}
      >
        {lines.map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h2>

      {description && (
        <p
          className={`mt-4 text-gray-500 text-lg leading-relaxed max-w-6xl ${
            align === "center" ? "mx-auto" : ""
          } ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}