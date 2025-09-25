export function HeroCarousel({
  discountText,
  title,
  highlightedWord,
  description,
  buttonText,
  imageUrl,
  imageAlt,
}: {
  discountText: string;
  title: string;
  highlightedWord: any;
  description: string;
  buttonText: string;
  imageUrl: string;
  imageAlt: string;
}) {
  return (
    <div className="relative rounded-lg bg-white p-8 shadow-lg">
      {/* Texto */}
      <div className="max-w-lg space-y-4">
        <h6 className="text-lg font-semibold text-blue-600">{discountText}</h6>
        <h1 className="text-4xl leading-snug font-bold">
          {title} <br />
          <span className="text-blue-500">{highlightedWord}</span> Shopping
        </h1>
        <p className="text-gray-600">{description}</p>
        <a
          href="#"
          className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white shadow transition hover:bg-blue-700"
        >
          {buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      {/* Imagen */}
      <img
        src={imageUrl}
        alt={imageAlt}
        className="absolute right-8 bottom-0 max-h-72 object-contain"
      />
    </div>
  );
}
