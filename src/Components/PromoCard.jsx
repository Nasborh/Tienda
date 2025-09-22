import { Badge } from "flowbite-react";

export function PromoCard({ badge, badgeColor, title, subtitle, img, bg }) {
  return (
    <div
      className={`relative flex flex-col justify-between overflow-hidden rounded-2xl p-6`}
      style={{ backgroundColor: bg }}
    >
      <div className="flex flex-col gap-3">
        {/* Badge */}
        <Badge color={badgeColor} className="w-fit px-3 py-1 text-sm">
          {badge}
        </Badge>

        {/* Title */}
        <h2 className="text-xl leading-snug font-semibold">{title}</h2>

        {/* Subtitle / CTA */}
        <a
          href="#"
          className="w-fit border-b border-gray-700 text-sm font-medium text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
        >
          {subtitle}
        </a>
      </div>

      {/* Product Image */}
      <img
        src={img}
        alt={title}
        className="absolute right-4 bottom-0 max-h-32 object-contain"
      />
    </div>
  );
}
