// Imagenes
import salonSocial from "@/assets/images/Masterplan/AmenidadesInformacion/salon_social.png";
import sala from "@/assets/images/Masterplan/AmenidadesInformacion/sala.png";
import lago from "@/assets/images/Masterplan/AmenidadesInformacion/lago.png";
import zonaYoga from "@/assets/images/Masterplan/AmenidadesInformacion/zona_yoga.png";

// Papers
import PaperTearBottom from "@/assets/images/Masterplan/AmenidadesInformacion/Papeles/paperTearBottom.png";
import PaperTear from "@/assets/images/Masterplan/AmenidadesInformacion/Papeles/paperTear.png";

// Íconos
import TerrazaIcon from "@/assets/icons/home/amenidades/terrazaIcon";
import SalonSocialIcon from "@/assets/icons/home/amenidades/salonSocialIcon";
import SalaIcon from "@/assets/icons/home/amenidades/salaIcon";
import LagoIcon from "@/assets/icons/home/amenidades/lagoIcon";

const FIRST_ROW = [
  {
    label: "Salón Social",
    labelPosition: "left",
    backgroundImage: salonSocial,
    icon: SalonSocialIcon,
    decorationImage: PaperTear,
  },
  {
    label: "Sala",
    labelPosition: "left",
    backgroundImage: sala,
    icon: SalaIcon,
    decorationImage: PaperTearBottom,
  },
  {
    label: "Lago",
    labelPosition: "right",
    backgroundImage: lago,
    icon: LagoIcon,
    decorationImage: PaperTearBottom,
  },
  {
    label: "Zona de Yoga",
    labelPosition: "right",
    backgroundImage: zonaYoga,
    icon: TerrazaIcon,
    decorationImage: PaperTear,
  },
];

export default function Slide2() {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Fila 1 */}
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
                  className={`absolute w-[clamp(65px,11.484375vw,147px)] h-[clamp(23px,4.0625vw,52px)] ${item.decorationImage === PaperTear ? "w-full" : ""}`}
                />

                <div
                  className={`relative z-10 flex justify-center items-center gap-[clamp(4px,0.625vw,8px)] ${item.decorationImage === PaperTear ? "pt-0" : "pt-[clamp(3px,0.46875vw,6px)]"}`}
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
