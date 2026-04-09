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
        <div className="flex relative w-full h-full justify-center max-lg:landscape:items-end portrait:items-center lg:items-center">
          <div className="w-[clamp(140px,72.65vw,558px)] lg:w-[clamp(490px,86.328125vw,1105px)] h-full lg:max-h-[617px]">
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
