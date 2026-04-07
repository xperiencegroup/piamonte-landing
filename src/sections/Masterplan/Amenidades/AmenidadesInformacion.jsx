import { Carousel } from "@/components/ui/shared/carousel/Carousel";
import useIsShortHeight from "@/hooks/useIsShortHeight";
import chunkArray from "@/utils/chunkArray";
import amenidades_info from "../../../assets/images/Masterplan/amenidades_info.png";
import { CARDS_DATA } from "@/data/carousel/cards";

// Papers
import PaperTearTop from "@/assets/images/Masterplan/AmenidadesInformacion/Papeles/paperTearTop.png";
import PaperTear from "@/assets/images/Masterplan/AmenidadesInformacion/Papeles/paperTear.png";

export default function AmenidadesInformacion() {
  const isShort = useIsShortHeight();
  const cardsPerSlide = isShort ? 2 : 4;
  const chunks = chunkArray(CARDS_DATA, cardsPerSlide);

  const slides = chunks.map((chunk, i) => {
    return (
      <div
        key={i}
        className={`flex flex-col w-full h-full ${isShort ? "justify-center" : ""}`}
      >
        <div className="grid grid-cols-2 gap-[clamp(9px,1.5625vw,20px)] w-full h-fit place-items-center">
          {chunk.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative w-[clamp(232px,40.820313vw,522.5px)] h-[clamp(100px,17.578125vw,225px)] bg-nude dark:bg-verde"
              >
                <img
                  src={item.backgroundImage}
                  alt="Imagen de la amenidad"
                  className="absolute inset-0 w-full h-full object-cover p-[clamp(7px,1.25vw,16px)]"
                />

                <div
                  className={`flex absolute bottom-0 z-10 w-[clamp(102px,17.96875vw,230px)] h-[clamp(23px,4.0625vw,52px)] justify-center items-center translate-y-[35%] ${item.labelPosition === "left" ? "left-0" : "right-0"}`}
                >
                  <img
                    src={item.decorationImage}
                    alt="Imagen de fondo textura papel"
                    className={`absolute w-[clamp(65px,11.484375vw,147px)] h-[clamp(23px,4.0625vw,52px)] ${item.decorationImage === PaperTear ? "w-full translate-y-[8%]" : ""}`}
                  />

                  <div
                    className={`relative z-10 flex justify-center items-center gap-[clamp(4px,0.625vw,8px)] ${item.decorationImage === PaperTear ? "pt-0" : ""} ${item.decorationImage === PaperTearTop ? "pt-0" : "pt-[clamp(3px,0.46875vw,6px)]"}`}
                  >
                    <Icon className="size-[clamp(8px,1.484375vw,19px)] text-gris dark:text-verde" />
                    <p className="text-paper font-bold text-gris dark:text-verde uppercase">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

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
        <div className="flex relative w-full h-full justify-center items-center pt-[clamp(18px,3.125vw,40px)]">
          <div className="w-[clamp(490px,86.328125vw,1105px)] h-[clamp(218px,38.4375vw,492px)]">
            <Carousel slides={slides} variant="card" arrows="outside" />
          </div>
        </div>
      </div>
    </>
  );
}
