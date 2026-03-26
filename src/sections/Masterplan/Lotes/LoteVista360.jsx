import { Carousel } from "@/components/ui/shared/carousel/Carousel";
import defaultImage from "@/assets/images/Masterplan/Lotes/defaultImage.jpg";

const CAROUSEL_IMAGES = [defaultImage, defaultImage];

export default function LoteVista360() {
  return (
    <>
      {/* Background */}
      <div className="absolute -z-10 inset-0 w-full h-dvh">
        {/* Overlay */}
        <div className="absolute inset-0 bg-nude dark:bg-verde" />
      </div>

      <div className="relative z-0 w-full h-full">
        <div className="flex relative w-full h-full justify-center items-end pb-[clamp(18px,3.125vw,40px)]">
          <div className="w-[clamp(490px,86.328125vw,1105px)] h-[clamp(251px,44.140625vw,565px)]">
            <Carousel
              slides={CAROUSEL_IMAGES}
              variant="image"
              arrows="outside"
            />
          </div>
        </div>
      </div>
    </>
  );
}
