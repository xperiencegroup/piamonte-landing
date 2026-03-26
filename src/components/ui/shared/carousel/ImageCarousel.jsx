import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import RowIcon from "@/assets/icons/shared/rowIcon";

export function ImageCarousel({ images = [] }) {
  const autoplay = useRef(Autoplay({ delay: 10000, stopOnInteraction: true }));

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const scrollNext = () => emblaApi?.scrollNext();
  const scrollPrev = () => emblaApi?.scrollPrev();

  useEffect(() => {
    if (!emblaApi) return;

    autoplay.current.play();
  }, [emblaApi]);

  return (
    <div className="relative embla flex flex-col justify-center w-full h-full">
      <div className="embla__viewport w-full h-full flex" ref={emblaRef}>
        <div className="embla__container flex w-full h-full">
          {images.map((image, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%]">
              <img
                src={image}
                alt="Imagen del render"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex absolute justify-between items-center w-full h-fit pointer-events-none">
        <button
          onClick={scrollPrev}
          className="group flex justify-center items-center size-[clamp(24px,4.21875vw,54px)] rotate-180 hover:cursor-pointer pointer-events-auto"
        >
          <RowIcon className="size-[clamp(12px,2.158594vw,27.63px)] text-nude group-hover:text-cafe-claro dark:group-hover:text-amarillo" />
        </button>

        <button
          onClick={scrollNext}
          className="group flex justify-center items-center size-[clamp(24px,4.21875vw,54px)] hover:cursor-pointer pointer-events-auto"
        >
          <RowIcon className="size-[clamp(12px,2.158594vw,27.63px)] text-nude group-hover:text-cafe-claro dark:group-hover:text-amarillo" />
        </button>
      </div>
    </div>
  );
}
