export function BannerCard({
  image,
  alt,
  text,
  description,
  descriptionLink,
}: {
  image: string;
  alt: string;
  text: any;
  description: string;
  descriptionLink: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <img src={image} alt={alt} className="h-48 w-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center bg-black/30 p-4 text-white">
        <p className="font-medium">{text}</p>
        <h3 className="text-lg font-bold">{description}</h3>
        <a href="#" className="mt-2 text-sm underline">
          {descriptionLink}
        </a>
      </div>
    </div>
  );
}
