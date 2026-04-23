import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useAutoScroll } from "./hooks/useAutoScroll";

export default function Gallery({ slides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true, startIndex: 2 },
    [
      AutoScroll({
        speed: 0.8,
        stopOnInteraction: true,
      }),
    ],
  );

  const { toggleAutoScroll } = useAutoScroll(emblaApi);

  return (
    <div className="gallery">
      <div ref={emblaRef}>
        <div className="gallery__container">
          {slides.map((slide, index) => (
            <div className="gallery_slide" key={index}>
              <div>{slide}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
