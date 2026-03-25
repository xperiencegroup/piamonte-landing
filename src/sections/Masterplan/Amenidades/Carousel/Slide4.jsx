// Imagenes
import canchaPadel from "@/assets/images/Masterplan/AmenidadesInformacion/cancha_padel.png";
import canchaBasket from "@/assets/images/Masterplan/AmenidadesInformacion/cancha_basketball.png";
import fogateros from "@/assets/images/Masterplan/AmenidadesInformacion/fogateros.png";
import huerto from "@/assets/images/Masterplan/AmenidadesInformacion/huerto.png";

// Papers
import PaperTearTop from "@/assets/images/Masterplan/AmenidadesInformacion/Papeles/paperTearTop.png";
import PaperTear from "@/assets/images/Masterplan/AmenidadesInformacion/Papeles/paperTear.png";

// Íconos
import PadelIcon from "@/assets/icons/home/amenidades/padelIcon";
import BasketballIcon from "@/assets/icons/home/amenidades/basketballIcon";
import FogaterosIcon from "@/assets/icons/home/amenidades/fogaterosIcon";
import HuertoIcon from "@/assets/icons/home/amenidades/huertoIcon";

const FIRST_ROW = [
  {
    label: "Cancha de Pádel",
    labelPosition: "left",
    backgroundImage: canchaPadel,
    icon: PadelIcon,
    decorationImage: PaperTear,
  },
  {
    label: "Cancha de Basket",
    labelPosition: "left",
    backgroundImage: canchaBasket,
    icon: BasketballIcon,
    decorationImage: PaperTear,
  },
  {
    label: "Fogateros",
    labelPosition: "right",
    backgroundImage: fogateros,
    icon: FogaterosIcon,
    decorationImage: PaperTearTop,
  },
  {
    label: "Huerto",
    labelPosition: "right",
    backgroundImage: huerto,
    icon: HuertoIcon,
    decorationImage: PaperTearTop,
  },
];

export default function Slide4() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="grid grid-cols-2 gap-[clamp(9px,1.5625vw,20px)] w-full h-[clamp(109px,19.21875vw,246px)] place-items-center">
        {FIRST_ROW.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="relative w-[clamp(232px,40.820313vw,522.5px)] h-[clamp(100px,17.578125vw,225px)] bg-nude dark:bg-verde"
            >
              <img
                src={item.backgroundImage}
                alt="Imagen de la amenidad"
                className="absolute inset-0 w-full h-full object-cover p-4"
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
}
