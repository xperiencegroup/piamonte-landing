import { useSearchParams } from "react-router";
import AlbercaIcon from "@/assets/icons/home/amenidades/albercaIcon";
import BarIcon from "@/assets/icons/home/amenidades/barIcon";
import BasketballIcon from "@/assets/icons/home/amenidades/basketballIcon";
import CasaClubIcon from "@/assets/icons/home/amenidades/casaClubIcon";
import CasetaIcon from "@/assets/icons/home/amenidades/casetaIcon";
import FogaterosIcon from "@/assets/icons/home/amenidades/fogaterosIcon";
import GimnasioIcon from "@/assets/icons/home/amenidades/gimnasioIcon";
import HuertoIcon from "@/assets/icons/home/amenidades/huertoIcon";
import JuegosInfantiles from "@/assets/icons/home/amenidades/juegosInfantiles";
import LagoIcon from "@/assets/icons/home/amenidades/lagoIcon";
import PadelIcon from "@/assets/icons/home/amenidades/padelIcon";
import PetPark from "@/assets/icons/home/amenidades/petPark";
import SalaIcon from "@/assets/icons/home/amenidades/salaIcon";
import SalonSocialIcon from "@/assets/icons/home/amenidades/salonSocialIcon";
import TerrazaIcon from "@/assets/icons/home/amenidades/terrazaIcon";
import YogaIcon from "@/assets/icons/home/amenidades/yogaIcon";

const VIDEO_TOUR_BUTTONS = [
  {
    id: "caseta",
    label: "Caseta",
    icon: CasetaIcon,
  },
  {
    id: "casa-club",
    label: "Casa Club",
    icon: CasaClubIcon,
  },
  {
    id: "bar",
    label: "Bar",
    icon: BarIcon,
  },
  {
    id: "terraza",
    label: "Terraza",
    icon: TerrazaIcon,
  },
  {
    id: "salon-social",
    label: "Salón Social",
    icon: SalonSocialIcon,
  },
  {
    id: "sala",
    label: "Sala",
    icon: SalaIcon,
  },
  {
    id: "lago",
    label: "Lago",
    icon: LagoIcon,
  },
  {
    id: "zona-yoga",
    label: "Zona de Yoga",
    icon: YogaIcon,
  },
  {
    id: "alberca",
    label: "Alberca",
    icon: AlbercaIcon,
  },
  {
    id: "juegos-infantiles",
    label: "Juegos Infantiles",
    icon: JuegosInfantiles,
  },
  {
    id: "pet-park",
    label: "Pet Park",
    icon: PetPark,
  },
  {
    id: "gimnasio",
    label: "Gimnasio",
    icon: GimnasioIcon,
  },
  {
    id: "padel",
    label: "Cancha de Pádel",
    icon: PadelIcon,
  },
  {
    id: "basket",
    label: "Cancha de Basket",
    icon: BasketballIcon,
  },
  {
    id: "fogateros",
    label: "Fogateros",
    icon: FogaterosIcon,
  },
  {
    id: "huerto",
    label: "Huerto",
    icon: HuertoIcon,
  },
];

export default function AmenidadesVideoTour() {
  const [params, setSearchParams] = useSearchParams();
  const activeParam = params.get("section");

  return (
    <div className="relative z-0 w-full">
      {/* Background */}
      <div className="absolute inset-0 w-full h-dvh">
        {/* Overlay */}
        <div className="linear-gradient-shadow" />
      </div>

      {/* Video Tour Buttons */}
      <div className="relative flex justify-center w-full pt-[clamp(9px,1.5625vw,20px)]">
        <div className="flex flex-wrap justify-center items-end w-full max-w-[1216px] h-fit mx-auto">
          {VIDEO_TOUR_BUTTONS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setSearchParams({ section: item.id })}
                className={`relative flex items-center h-[clamp(21px,3.75vw,48px)] w-fit p-[clamp(5px,0.9375vw,12px)] gap-[clamp(4px,0.625vw,8px)] hover:cursor-pointer ${activeParam === item.id && "after:absolute after:w-full after:bottom-0 after:left-0 after:h-0.5 after:bg-cafe dark:after:bg-amarillo"}`}
              >
                <div className="flex items-center justify-center size-[clamp(11px,1.875vw,24px)]">
                  <Icon
                    className={`w-[clamp(8px,1.484375vw,19px)] h-fit ${activeParam === item.id ? "text-cafe dark:text-amarillo" : "text-gris dark:text-nude"}`}
                  />
                </div>
                <p
                  className={`uppercase ${activeParam === item.id ? "text-cafe dark:text-amarillo font-semibold" : "text-gris dark:text-nude"}`}
                >
                  {item.label}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
