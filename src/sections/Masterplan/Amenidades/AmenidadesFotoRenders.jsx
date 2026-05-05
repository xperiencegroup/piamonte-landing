import { Carousel } from "@/components/ui/shared/carousel/Carousel";
import amenidades_info from "@/assets/images/Masterplan/amenidades_info.png";

// Foto render
import dia_render1 from "@/assets/images/Masterplan/FotoRenders/dia/FOTO RENDERS PIAMONTE 1.jpg";
import dia_render2 from "@/assets/images/Masterplan/FotoRenders/dia/FOTO RENDERS PIAMONTE 2.jpg";
import dia_render3 from "@/assets/images/Masterplan/FotoRenders/dia/FOTO RENDERS PIAMONTE 3.jpg";
import dia_render4 from "@/assets/images/Masterplan/FotoRenders/dia/FOTO RENDERS PIAMONTE 4.jpg";
import dia_render5 from "@/assets/images/Masterplan/FotoRenders/dia/FOTO RENDERS PIAMONTE 5.jpg";
import dia_render6 from "@/assets/images/Masterplan/FotoRenders/dia/FOTO RENDERS PIAMONTE 6.jpg";
import dia_render7 from "@/assets/images/Masterplan/FotoRenders/dia/FOTO RENDERS PIAMONTE 7.jpg";
import dia_render8 from "@/assets/images/Masterplan/FotoRenders/dia/FOTO RENDERS PIAMONTE 8.jpg";
import dia_render9 from "@/assets/images/Masterplan/FotoRenders/dia/FOTO RENDERS PIAMONTE 9.jpg";
import dia_render10 from "@/assets/images/Masterplan/FotoRenders/dia/FOTO RENDERS PIAMONTE 10.jpg";
import dia_render11 from "@/assets/images/Masterplan/FotoRenders/dia/FOTO RENDERS PIAMONTE 11.jpg";
import dia_render12 from "@/assets/images/Masterplan/FotoRenders/dia/FOTO RENDERS PIAMONTE 12.jpg";
import dia_render13 from "@/assets/images/Masterplan/FotoRenders/dia/FOTO RENDERS PIAMONTE 13.jpg";
import dia_render14 from "@/assets/images/Masterplan/FotoRenders/dia/FOTO RENDERS PIAMONTE 14.jpg";

import noche_render1 from "@/assets/images/Masterplan/FotoRenders/noche/FOTO RENDERS NOCHE PIAMONTE 1.jpg";
import noche_render2 from "@/assets/images/Masterplan/FotoRenders/noche/FOTO RENDERS NOCHE PIAMONTE 2.jpg";
import noche_render3 from "@/assets/images/Masterplan/FotoRenders/noche/FOTO RENDERS NOCHE PIAMONTE 3.jpg";
import noche_render4 from "@/assets/images/Masterplan/FotoRenders/noche/FOTO RENDERS NOCHE PIAMONTE 4.jpg";
import noche_render5 from "@/assets/images/Masterplan/FotoRenders/noche/FOTO RENDERS NOCHE PIAMONTE 5.jpg";
import noche_render6 from "@/assets/images/Masterplan/FotoRenders/noche/FOTO RENDERS NOCHE PIAMONTE 6.jpg";
import noche_render7 from "@/assets/images/Masterplan/FotoRenders/noche/FOTO RENDERS NOCHE PIAMONTE 7.jpg";
import noche_render8 from "@/assets/images/Masterplan/FotoRenders/noche/FOTO RENDERS NOCHE PIAMONTE 8.jpg";
import noche_render9 from "@/assets/images/Masterplan/FotoRenders/noche/FOTO RENDERS NOCHE PIAMONTE 9.jpg";
import useDarkMode from "@/hooks/useDarkMode";

const DAY_CAROUSEL_IMAGES = [
  dia_render1,
  dia_render2,
  dia_render3,
  dia_render4,
  dia_render5,
  dia_render6,
  dia_render7,
  dia_render8,
  dia_render9,
  dia_render10,
  dia_render11,
  dia_render12,
  dia_render13,
  dia_render14,
];

const NIGHT_CAROUSEL_IMAGES = [
  noche_render1,
  noche_render2,
  noche_render3,
  noche_render4,
  noche_render5,
  noche_render6,
  noche_render7,
  noche_render8,
  noche_render9,
];

export default function AmenidadesFotoRenders() {
  const isDark = useDarkMode();
  const CAROUSEL_IMAGES = isDark ? NIGHT_CAROUSEL_IMAGES : DAY_CAROUSEL_IMAGES;

  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={amenidades_info}
          alt="Fondo principal"
          className="absolute inset-0 w-full h-full -z-10 object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#E9E6D7] via-nude/95 via-65% to-nude/85 to-86% dark:from-[#2D2B28] dark:via-gris/95 dark:to-gris/85" />
      </div>

      <div className="relative z-0 w-full h-full">
        <div className="flex relative w-full h-full justify-center max-lg:landscape:items-end portrait:items-center lg:items-center pt-[clamp(38px,6vw,75px)]">
          <div className="relative w-[clamp(501.06px,86.484375vw,1107px)] h-[clamp(120px,58.67dvh,220px)] h-full lg:max-h-[617px] bg-nude dark:bg-verde p-[clamp(13.59px,2.34375vw,30px)]">
            <Carousel
              slides={CAROUSEL_IMAGES}
              variant="image"
              arrows="outside"
              arrowOffset="260%"
            />
          </div>
        </div>
      </div>
    </>
  );
}
