// Imagenes
import alberca from "@/assets/images/Masterplan/AmenidadesInformacion/alberca.png";
import juegosInfantiles from "@/assets/images/Masterplan/AmenidadesInformacion/juegos_infantiles.png";
import petPark from "@/assets/images/Masterplan/AmenidadesInformacion/pet_park.png";
import gimnasio from "@/assets/images/Masterplan/AmenidadesInformacion/gimnasio.png";

// Papers
import PaperTearBottom from "@/assets/images/Masterplan/AmenidadesInformacion/Papeles/paperTearBottom.png";
import PaperTearTop from "@/assets/images/Masterplan/AmenidadesInformacion/Papeles/paperTearTop.png";
import PaperTear from "@/assets/images/Masterplan/AmenidadesInformacion/Papeles/paperTear.png";

// Íconos
import AlbercaIcon from "@/assets/icons/home/amenidades/albercaIcon";
import JuegosInfantiles from "@/assets/icons/home/amenidades/juegosInfantiles";
import PetPark from "@/assets/icons/home/amenidades/petPark";
import GimnasioIcon from "@/assets/icons/home/amenidades/gimnasioIcon";

const FIRST_ROW = [
  {
    label: "Alberca",
    labelPosition: "left",
    backgroundImage: alberca,
    icon: AlbercaIcon,
    decorationImage: PaperTearTop,
  },
  {
    label: "Juegos Infantiles",
    labelPosition: "left",
    backgroundImage: juegosInfantiles,
    icon: JuegosInfantiles,
    decorationImage: PaperTear,
  },
  {
    label: "Pet Park",
    labelPosition: "right",
    backgroundImage: petPark,
    icon: PetPark,
    decorationImage: PaperTearBottom,
  },
  {
    label: "Gimnasio",
    labelPosition: "right",
    backgroundImage: gimnasio,
    icon: GimnasioIcon,
    decorationImage: PaperTearBottom,
  },
];

export default function Slide3() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col w-full h-full">
        <div className="grid grid-cols-2 gap-[clamp(9px,1.5625vw,20px)] w-full h-[clamp(109px,19.21875vw,246px)] justify-center">
          {FIRST_ROW.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative w-[clamp(232px,40.820313vw,522.5px)] h-[clamp(100px,17.578125vw,225px)] bg-nude"
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
                    <Icon className="size-[clamp(8px,1.484375vw,19px)] text-gris" />
                    <p className="text-paper font-bold text-gris uppercase">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
