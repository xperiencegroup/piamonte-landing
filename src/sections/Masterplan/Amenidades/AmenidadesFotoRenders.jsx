import render1 from "@/assets/images/Masterplan/FotoRenders/render1.jpg";
import { ImageCarousel } from "@/components/ui/shared/carousel/ImageCarousel";

const CAROUSEL_IMAGES = [render1, render1];

export default function AmenidadesFotoRenders() {
  return (
    <>
      {/* Background */}
      <div className="absolute -z-10 inset-0 w-full h-dvh">
        {/* Overlay */}
        <div className="absolute inset-0 bg-nude dark:bg-verde" />
      </div>

      <div className="relative z-0 w-full h-full">
        <div className="flex relative w-full h-full justify-center items-end pb-[clamp(18px,3.125vw,40px)]">
          <div className="relative w-[clamp(540px,95vw,1216px)] h-[clamp(251px,44.140625vw,565px)]">
            <ImageCarousel images={CAROUSEL_IMAGES} />
          </div>
        </div>
      </div>
    </>
  );
}
