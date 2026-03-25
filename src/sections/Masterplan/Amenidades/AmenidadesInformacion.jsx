import { Carousel } from "@/components/ui/shared/carousel/Carousel";
import amenidades_info from "../../../assets/images/Masterplan/amenidades_info.png";
import Slide1 from "./Carousel/Slide1";
import Slide2 from "./Carousel/Slide2";
import Slide3 from "./Carousel/Slide3";
import Slide4 from "./Carousel/Slide4";

const navIndicator = (index, isActive) =>
  isActive ? (
    <span className="size-[clamp(20px,2.08vw,40px)] rounded-full border-[3px] border-gris" />
  ) : (
    <span className="size-[clamp(20px,2.08vw,40px)] rounded-full border-[3px] border-amarillo" />
  );

const SLIDES = [<Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />];

export default function AmenidadesInformacion() {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 w-full h-dvh">
        <img
          src={amenidades_info}
          alt="Fondo principal"
          className="absolute inset-0 w-full h-dvh -z-10 object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#E9E6D7] via-nude/95 via-65% to-nude/85 to-86% dark:from-[#2D2B28] dark:via-gris/95 dark:to-gris/85" />
      </div>

      <div className="relative z-0 w-full h-full">
        <div className="flex relative w-full h-full justify-center items-end pb-[clamp(18px,3.125vw,40px)]">
          <div className="w-[clamp(490px,86.328125vw,1105px)] h-[clamp(251px,44.140625vw,565px)]">
            <Carousel slides={SLIDES} />
          </div>
        </div>
      </div>
    </>
  );
}
