import { BannerCard } from "../Components/Banner";
import { HeroCarousel } from "../Components/HeroCarousel";
import { Carousel } from "flowbite-react";

export function Index() {
  return (
    <section className="section_hero">
      <div className="container mx-auto grid grid-cols-1 gap-6 py-8 lg:grid-cols-3">
        {/* Hero Principal */}
        <Carousel className="relative flex items-center rounded-2xl bg-blue-50 p-8 lg:col-span-2">
          <HeroCarousel
            discountText="Electo"
            title="For Your First"
            highlightedWord="Electo"
            description="There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form by injected
              humour."
            buttonText="Shop Now"
            imageUrl="/src/assets/hero-1.png"
            imageAlt="Hero"
          ></HeroCarousel>
        </Carousel>

        {/* Banners Laterales */}
        <div className="flex flex-col gap-6">
          <BannerCard
            image="/src/assets/mini-banner-1.jpg"
            alt="Speaker"
            text="Hot Sale"
            description="Best Speaker Sale Collections"
            descriptionLink=" Discover Now"
          ></BannerCard>
          <BannerCard
            image="/src/assets/mini-banner-2.jpg"
            alt="Watch"
            text="Apple Watch"
            description="Apple Smart Watch Collections"
            descriptionLink="Shop Now"
          ></BannerCard>
        </div>
      </div>
    </section>
  );
}
