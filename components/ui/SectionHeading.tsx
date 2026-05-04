interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center mx-auto" : "text-left"}`}>
      <h2 className="text-3xl md:text-5xl font-bold text-orchi-dark tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {/* Garis aksen kecil di bawah judul */}
      <div className={`h-1.5 w-16 bg-orchi-base rounded-full mt-6 ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}